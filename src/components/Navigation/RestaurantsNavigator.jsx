import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// restaurant screen
import RestaurantsScreen from "../../screens/RestaurantsScreen/RestaurantsScreen";
import RestaurantDetailScreen from "../../screens/RestaurantDetailScreen/RestaurantDetailScreen";

const RestaurantStack = createNativeStackNavigator();

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      initialRouteName="Restaurants"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetailScreen"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantsNavigator;
