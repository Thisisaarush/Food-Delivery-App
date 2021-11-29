import React, { useContext } from "react";
import { FlatList, Pressable } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

// components
import { SearchBar } from "../../components/SearchBar/SearchBar.component";
import RestaurantInfoCard from "../../components/RestaurantInfoCard/RestaurantInfoCard.component";

// context
import { RestaurantsContext } from "../../services/Restaurants/Restaurants.context";

const RestaurantsScreen = ({ navigation: { navigate } }) => {
  const restaurantContext = useContext(RestaurantsContext);

  const { restaurants, isLoading } = restaurantContext;
  return (
    <RestaurantScreenContainer>
      {isLoading && (
        <LoadingContainer>
          <ActivityIndicator
            size={50}
            style={{ marginLeft: -25 }}
            animating={true}
            color={Colors.red400}
          />
        </LoadingContainer>
      )}
      <SearchBar />
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigate("RestaurantDetailScreen", { restaurant: item })
            }
          >
            <RestaurantInfoCard restaurant={item} />
          </Pressable>
        )}
        keyExtractor={(item) => item.name}
      />
    </RestaurantScreenContainer>
  );
};

// style
const RestaurantScreenContainer = styled.View`
  background-color: #fff;
  margin-bottom: ${(props) => props.theme.MarginXXL};
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 500%;
  left: 50%;
`;

export default RestaurantsScreen;
