import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

// navigators
import RestaurantsNavigator from "./RestaurantsNavigator";
import MapScreen from "../../screens/MapScreen/MapScreen";
import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen";

const AppNavigator = () => {
  // navigation
  const Tab = createBottomTabNavigator();
  const createScreenOptions = ({ route }) => {
    return {
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = focused ? "restaurant" : "restaurant-outline";
        } else if (route.name === "Profile") {
          iconName = focused ? "person-circle" : "person-circle-outline";
        } else if (route.name === "Map") {
          iconName = focused ? "map" : "map-outline";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#ff7900",
      tabBarInactiveTintColor: "gray",
    };
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen
          name="Home"
          component={RestaurantsNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
