import styled from "styled-components/native";

// styles
export const CardStyled = styled.View`
  margin: ${(props) => props.theme.MarginMedium};
  border-radius: ${(props) => props.theme.BorderRadiusRegular};
  padding: ${(props) => props.theme.PaddingRegular};
  background-color: ${(props) => props.theme.CardBackground};
  margin-bottom: ${(props) => props.theme.MarginRegular};
`;
export const RestaurantImage = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: ${(props) => props.theme.BorderRadiusRegular};
  margin-bottom: ${(props) => props.theme.MarginLarge};
`;
export const RestaurantName = styled.Text`
  font-family: ${(props) => props.theme.HeadingBold};
  font-size: ${(props) => props.theme.FontSizeRegular};
`;
export const LabelContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  margin-top: ${(props) => props.theme.MarginSmall};
`;
export const RestaurantAddress = styled.Text`
  font-family: ${(props) => props.theme.BodyLight};
`;
export const RatingStarsContainer = styled.View`
  flex-direction: row;
`;
export const TempoClosed = styled.Text`
  color: red;
  font-size: ${(props) => props.theme.FontSizeSmall};
`;
