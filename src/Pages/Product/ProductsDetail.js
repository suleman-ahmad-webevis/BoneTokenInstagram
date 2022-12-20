import React from "react";
import styled from "styled-components";
import ProductDetail from "../../components/ProductDetail/ProductDetail";
import { useDispatch } from "react-redux";
import { reset } from "../../redux/product/productSlice";

const ProductsDetail = () => {
  const dispatch = useDispatch();
  window.addEventListener("popstate", () => {
    dispatch(reset());
  });
  return (
    <ProductsListContainer>
      <ProductDetail />
    </ProductsListContainer>
  );
};

const ProductsListContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;
export default ProductsDetail;
