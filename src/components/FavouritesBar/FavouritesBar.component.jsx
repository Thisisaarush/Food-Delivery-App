import React from "react";
import { ScrollView, Pressable } from "react-native";
import styled from "styled-components/native";

export const FavouritesBar = ({ favourites, onNavigate }) => {
  return (
    <FavouritesContainer elevation={5}>
      {favourites.length ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favourites.map((restaurant) => {
            const key = restaurant.name.split(" ").join("");
            return (
              <Pressable
                key={key}
                onPress={() =>
                  onNavigate("RestaurantDetailScreen", {
                    restaurant,
                  })
                }
              >
                <FavouritesData>
                  <FavouriteImage
                    source={{ uri: restaurant.photos[0] }}
                    blurRadius={2}
                  />
                  <FavouriteName>{restaurant.name}</FavouriteName>
                </FavouritesData>
              </Pressable>
            );
          })}
        </ScrollView>
      ) : (
        <FavouritesText>No Favourites ☹️</FavouritesText>
      )}
    </FavouritesContainer>
  );
};

// style
const FavouritesContainer = styled.View`
  min-height: 50px;
  background-color: white;
  padding: ${(props) => props.theme.PaddingMedium};
  margin: ${(props) => props.theme.MarginMedium};
  border-radius: ${(props) => props.theme.BorderRadiusRegular};
`;
const FavouritesData = styled.View`
  margin-right: ${(props) => props.theme.MarginRegular};
  justify-content: center;
  align-items: center;
`;
const FavouriteImage = styled.Image`
  width: 100px;
  height: 150px;
  border-radius: ${(props) => props.theme.BorderRadiusRegular};
`;
const FavouriteName = styled.Text`
  position: absolute;
  color: black;
  background-color: #ffffffcc;
  padding: ${(props) => props.theme.PaddingSmall};
  border-radius: ${(props) => props.theme.BorderRadiusSmall};
`;
const FavouritesText = styled.Text`
  font-size: ${(props) => props.theme.FontSizeMedium};
  text-align: center;
`;
