import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, Pressable } from "react-native";

// components
import { FavouritesContext } from "../../services/Favourites/Favourites.context";
import RestaurantInfoCard from "../../components/RestaurantInfoCard/RestaurantInfoCard.component";

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <>
      <FavouritesHeading>Favourite Restaurants</FavouritesHeading>
      {favourites.length ? (
        <FlatList
          data={favourites}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() =>
                  navigation.navigate("RestaurantDetailScreen", {
                    restaurant: item,
                  })
                }
              >
                <RestaurantInfoCard restaurant={item} />
              </Pressable>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <NoFavourites>No Favourites Found ☹️</NoFavourites>
      )}
    </>
  );
};

// style
const NoFavourites = styled.Text`
  text-align: center;
  margin-top: 100px;
  font-size: ${(props) => props.theme.FontSizeMedium};
`;
const FavouritesHeading = styled.Text`
  font-size: ${(props) => props.theme.FontSizeLarge};
  text-align: center;
  margin-top: 20px;
`;
