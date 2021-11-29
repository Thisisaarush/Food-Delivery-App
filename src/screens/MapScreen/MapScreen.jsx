import React, { useContext, useState, useEffect } from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import MapView from "react-native-maps";

// map search bar
import { MapSearchBar } from "../../components/MapSearchBar/MapSearchBar.component";

// components
import { MapCallout } from "../../components/MapCallout/MapCallout.component";

// context
import { RestaurantsContext } from "../../services/Restaurants/Restaurants.context";
import { LocationContext } from "../../services/Location/Location.context";

const MapScreen = ({ navigation: { navigate } }) => {
  const [latDelta, setLatDelta] = useState(0);
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <MapsContainer>
      <MapSearchBar />
      <MapViewStyled
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigate("RestaurantDetailScreen", { restaurant })
                }
              >
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </MapViewStyled>
    </MapsContainer>
  );
};

// style
const MapsContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.CardBackground};
  align-items: center;
  justify-content: center;
`;
const MapViewStyled = styled(MapView)`
  width: ${Dimensions.get("window").width}px;
  height: ${Dimensions.get("window").height}px;
`;

export default MapScreen;
