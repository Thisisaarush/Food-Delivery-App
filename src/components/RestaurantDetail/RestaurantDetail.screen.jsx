import React from "react";
import styled from "styled-components/native";

// components
import RestaurantInfoCard from "../../components/RestaurantInfoCard/RestaurantInfoCard.component";

const RestaurantDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;

  return (
    <RestaurantDetailContainer>
      <RestaurantInfoCard restaurant={item} />
    </RestaurantDetailContainer>
  );
};

// styles
const RestaurantDetailContainer = styled.View``;

export default RestaurantDetailScreen; 
