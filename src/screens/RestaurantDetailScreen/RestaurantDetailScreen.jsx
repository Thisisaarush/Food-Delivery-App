import React, { useState } from "react";
import styled from "styled-components/native";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

// components
import RestaurantInfoCard from "../../components/RestaurantInfoCard/RestaurantInfoCard.component";

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [launchExpanded, setLaunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <RestaurantDetailContainer>
      <ScrollView>
        <RestaurantInfoCard restaurant={restaurant} />
        <List.Section>
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="food" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
          >
            <List.Item title="Samosa" />
            <List.Item title="Kachori" />
            <List.Item title="Aaloo Paratha" />
            <List.Item title="Jalebi" />
          </List.Accordion>

          <List.Accordion
            title="Launch"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={launchExpanded}
            onPress={() => setLaunchExpanded(!launchExpanded)}
          >
            <List.Item title="Pizza" />
            <List.Item title="Burger" />
            <List.Item title="Aaloo Paratha" />
            <List.Item title="Gulab Jamun" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
          >
            <List.Item title="Chicken Biryani" />
            <List.Item title="Tandoori Murg" />
            <List.Item title="Panner Paratha" />
            <List.Item title="Chocolate Cake" />
          </List.Accordion>

          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
          >
            <List.Item title="Coca Cola" />
            <List.Item title="Pepsi" />
            <List.Item title="Thumbs UP" />
            <List.Item title="Nimbuzz" />
          </List.Accordion>
        </List.Section>
        <Greetings>😋 🍔 🍟 🍕 🍅 🥕 🥒 🐣 🍗</Greetings>
      </ScrollView>
    </RestaurantDetailContainer>
  );
};

// styles
const RestaurantDetailContainer = styled.View`
  background-color: ${(props) => props.theme.CardBackground};
  min-height: 100%;
`;
const Greetings = styled.Text`
  text-align: center;
  margin: 50px 0;
  font-size: ${(props) => props.theme.FontSizeLarge};
  color: ${(props) => props.theme.SecondaryColor};
`;

export default RestaurantDetailScreen;
