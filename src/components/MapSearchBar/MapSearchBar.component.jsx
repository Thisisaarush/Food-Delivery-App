import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

// context
import { LocationContext } from "../../services/Location/Location.context";

export const MapSearchBar = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchBarStyled
      placeholder="Search for a location..."
      icon='map'
      value={searchKeyword}
      onSubmitEditing={() => {
        search(searchKeyword);
      }}
      onChangeText={(text) => {
        setSearchKeyword(text);
      }}
    />
  );
};

// styles
const SearchBarStyled = styled(Searchbar)`
  margin: ${(props) => props.theme.MarginMedium};
  border: 1px solid grey;
  border-radius: ${(props) => props.theme.BorderRadiusRegular};
  position: absolute;
  top: 0;
  z-index: 100;
`;
