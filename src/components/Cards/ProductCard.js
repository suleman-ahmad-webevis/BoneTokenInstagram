import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";
import { Img } from "../../GlobalStyles";
import Heading from "../Heading/Heading";
import PriceSign from "../../assets/images/PriceSign.png";
import Heart from "../../assets/images/Heart.png";
import RedHeart from "../../assets/images/RedHeart.svg";
// import Ballon from "../../assets/images/Ballon.png";
// import ItemsCollector from "../../assets/images/ItemsCollector.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../redux/favouritesList/favouritesListSlice";
import { useEffect } from "react";

const ProductCard = ({ product }) => {
  const { favouritesItems } = useSelector((state) => state.favourites);

  const [isFav, setIsFav] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToFavourites = (product) => {
    dispatch(addToFavourites(product));
  };

  useEffect(() => {
    setIsFav(favouritesItems.find((item) => item._id === product._id));
  }, []);

  const handleFavClick = (item) => {
    if (isFav) {
      dispatch(removeFromFavourites(item));
      setIsFav(!isFav);
    } else {
      dispatch(addToFavourites(item));
      setIsFav(!isFav);
    }
  };

  return (
    <ProductCardContainer>
      <CardData>
        <Img
          src={product.productImage}
          alt="Product"
          style={{ cursor: "pointer" }}
          onClick={() =>
            navigate(`/products/productDetail/${product._id}`, {
              state: {
                productImage: product.productImage,
              },
            })
          }
        />
        <ItemName>
          <ProductCategory>{product.name}</ProductCategory>
          <Img
            onClick={() => {
              handleFavClick(product);
            }}
            style={{ cursor: "pointer" }}
            src={isFav ? RedHeart : Heart}
            alt="Heart"
          />
        </ItemName>
        <ItemName>
          <Heading level={4}>{product.description}</Heading>
        </ItemName>
      </CardData>

      <ProductRating>
        <PriceValue>
          <Img src={PriceSign} alt="Rating" />
          <Heading level={4} Color LineHeight>
            {product.retailPrice}
          </Heading>
        </PriceValue>
        <Rating name="half-rating" precision={1} value={product.ratingAvg} />
      </ProductRating>
    </ProductCardContainer>
  );
};

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  grid-gap: 30px;
  padding: 10px;
  border: 1px solid #e7eaf3;
  border-radius: 8px;
  height: 100%;
  max-height: 460px;
`;
export const ProductCategory = styled.div`
  color: ${(props) => props.theme.ProductCategory};
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;
const CardData = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
`;
const ItemName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ProductRating = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;
export const PriceValue = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
`;
const CardIcon = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
`;

export default ProductCard;
