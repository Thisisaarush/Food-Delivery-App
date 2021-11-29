import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen";
import { FavouritesScreen } from "../../screens/FavouritesScreen/FavouritesScreen";

const SettingsStack = createNativeStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator headerMode="screen">
      <SettingsStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{ headerShown: false }}
      />
    </SettingsStack.Navigator>
  );
};
