import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import CartListTable from "../../components/ShoppingCartList/CartList/CartListTable";

const CartList = () => {
  return (
    <CartListContainer>
      <CartListTable />
    </CartListContainer>
  );
};

export const CartListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default CartList;
