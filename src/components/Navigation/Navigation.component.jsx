import React, { useState } from "react";

// navigators
import AppNavigator from "./AppNavigator.component";
import { SplashScreen } from "../../screens/SplashScreen/SplashScreen";

const Navigation = () => {
  const [isOpened, setIsOpened] = useState(false);

  return isOpened ? (
    <AppNavigator />
  ) : (
    <SplashScreen setIsOpened={setIsOpened} />
  );
};

export default Navigation;
