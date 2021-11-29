import React from "react";
import { ThemeProvider } from "styled-components";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

// fonts
import {
  useFonts as useOswald,
  Oswald_300Light,
  Oswald_400Regular,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLato,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";

// theme
import { Theme } from "./src/theme/Theme";

// global styles
import { SafeAreaViewStyled } from "./src/globalStyles/GlobalStyles";

// context
import { RestaurantContextProvider } from "./src/services/Restaurants/Restaurants.context";
import { LocationContextProvider } from "./src/services/Location/Location.context";
import { FavouritesContextProvider } from "./src/services/Favourites/Favourites.context";

// components
import Navigation from "./src/components/Navigation/Navigation.component";

export default function App() {
  // using fonts
  const [oswaldLoaded] = useOswald({
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_700Bold,
  });
  const [latoLoaded] = useLato({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={Theme}>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <SafeAreaViewStyled>
              <Navigation />
              <ExpoStatusBar style="auto" />
            </SafeAreaViewStyled>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    </ThemeProvider>
  );
}
