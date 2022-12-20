import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import FavouritesListTable from "../../components/ShoppingCartList/FavouritesList/FavouritesListTable";

const FavouritesList = () => {
  return (
    <FavouritesListContainer>
      <Heading level={1} FontBig>
        Favourites List
      </Heading>
      <FavouritesListTable />
    </FavouritesListContainer>
  );
};

export const FavouritesListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  grid-gap: 20px;
  padding: 20px;
`;

export default FavouritesList;
