import React from "react";
import styled from "styled-components/native";
import { List } from "react-native-paper";

const ProfileScreen = ({ navigation }) => {
  return (
    <ProfileContainer>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
      </List.Section>
    </ProfileContainer>
  );
};

// style
const ProfileContainer = styled.View`
  min-height: 100%;
  background-color: #fff;
`;

export default ProfileScreen;
