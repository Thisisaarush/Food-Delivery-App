import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

// context
import { LocationContext } from "../../services/Location/Location.context";

export const SearchBar = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchBarStyled
      placeholder="Search for a location..."
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
`;
