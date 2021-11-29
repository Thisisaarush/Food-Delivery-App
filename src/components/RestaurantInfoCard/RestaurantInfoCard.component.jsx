import React from "react";

// style
import {
  CardStyled,
  RestaurantImage,
  RestaurantName,
  LabelContainer,
  RatingStarsContainer,
  TempoClosed,
  RestaurantAddress,
} from "./RestaurantInfoCard.style";

// react native svg
import { SvgXml } from "react-native-svg";

// images/icons
import starIcon from "../../../assets/starIcon";
import openIcon from "../../../assets/openIcon";

// components
import { Favourite } from "../Favourite/Favourite.component";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const { name, photos, address, isOpenNow, rating, placeId } = restaurant;

  const RatingStars = Array.from(new Array(Math.floor(rating)));

  return (
    <CardStyled elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantImage source={{ uri: photos[0] }} />
      <RestaurantName>{name}</RestaurantName>
      <LabelContainer>
        <RatingStarsContainer>
          {RatingStars.map((_, i) => (
            <SvgXml
              xml={starIcon}
              width={20}
              height={20}
              key={`star-${placeId}-${i}`}
            />
          ))}
        </RatingStarsContainer>
        {isOpenNow ? (
          <SvgXml xml={openIcon} width={30} height={30} />
        ) : (
          <TempoClosed>Temporarily Closed</TempoClosed>
        )}
      </LabelContainer>
      <RestaurantAddress>{address}</RestaurantAddress>
    </CardStyled>
  );
};

export default RestaurantInfoCard;
