import React from "react";
import styled from "styled-components/native";

export const SplashScreen = ({ setIsOpened }) => {
  return (
    <SplashScreenContainer>
      <SplashImage
        source={{
          uri: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=449&q=80",
        }}
      />
      <SplashText onPress={() => setIsOpened(true)}>Enter</SplashText>
    </SplashScreenContainer>
  );
};

// style
const SplashScreenContainer = styled.View`
  align-items: center;
`;
const SplashImage = styled.Image`
  width: 100%;
  height: 100%;
`;
const SplashText = styled.Text`
  background-color: #ff7900;
  color: black;
  position: absolute;
  bottom: 50px;
  text-align: center;
  padding: 20px 50px;
  border-radius: 100px;
  font-size: 20px;
`;
