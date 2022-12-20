import styled from "styled-components";
import ProductCard from "../Cards/ProductCard";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTheProducts,
  reset,
  setAllProducts,
} from "../../redux/product/productSlice";
import Loader from "../Loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";

const ProductsListComponent = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [limit] = useState(10);
  const category = searchParams.get("category");
  const featured = searchParams.get("featured");
  const newparam = searchParams.get("new");
  const rated = searchParams.get("rated");

  const { products, total, allProducts, isLoading, page } = useSelector(
    (state) => state.product
  );
  useEffect(() => {
    dispatch(reset());
    dispatch(
      getTheProducts({ featured, category, newparam, rated, page, limit })
    );
  }, []);

  useEffect(() => {
    dispatch(setAllProducts());
  }, [products]);

  const fetchMore = () => {
    if (allProducts.length < total) {
      dispatch(
        getTheProducts({
          newparam,
          featured,
          category,
          page: page + 1,
          limit,
        })
      );
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      {allProducts?.length ? (
        <ProductsList id="ProductListContainer">
          {allProducts.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
          <InfiniteScroll
            dataLength={allProducts?.length}
            next={fetchMore}
            hasMore={allProducts?.length < total ? true : false}
            scrollableTarget="ProductListContainer"
          ></InfiniteScroll>
        </ProductsList>
      ) : (
        <NoProducts>
          <Heading level={10} Black>
            No Products Found
          </Heading>
        </NoProducts>
      )}
    </>
  );
};

export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 10px 40px;
  height: 100%;
  max-height: 1200px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: white;
  }

  ::-webkit-scrollbar-thumb {
    background: white;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: none;
  }
  @media screen and (max-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1350px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const NoProducts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ProductsListComponent;
