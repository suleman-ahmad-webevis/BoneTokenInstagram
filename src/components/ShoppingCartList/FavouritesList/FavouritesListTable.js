import React from "react";
import styled from "styled-components";
import Heading from "../../Heading/Heading";
import { useSelector, useDispatch } from "react-redux";
import { Img } from "../../../GlobalStyles";
import { addToCart } from "../../../redux/cart/cartSlice";
import { removeFromFavourites } from "../../../redux/favouritesList/favouritesListSlice";
import { CheckoutCard, CheckoutContainer, CheckoutDesc, CheckoutItem, CheckoutPrice, CheckoutProImg, CheckoutQuantity, Price } from "../CartList/CartListTable.Style";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button } from "../../../GlobalStyles";

const FavouritesListTable = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const { favouritesItems } = useSelector((state) => state.favourites);

  const handleAddToCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleRemoveFromFavourites = (cartItem) => {
    dispatch(removeFromFavourites(cartItem));
  };

  return (
    <>
      {
        favouritesItems?.length > 0 ?
          (<CheckoutContainer>
            <CheckoutCard>
              {
                favouritesItems?.map((item) => (
                  <CheckoutItem>
                    <CheckoutProImg>
                      <Img src={item?.productImage} alt="" />
                    </CheckoutProImg>
                    <CheckoutDesc>
                      <Heading level={3}>{item?.name}</Heading>
                    </CheckoutDesc>
                    <CheckoutPrice>
                      <Price>
                        <Heading level={3}>€</Heading>
                        <Heading level={3}>{item?.retailPrice}</Heading>
                      </Price>
                    </CheckoutPrice>
                    <Button primary onClick={() => { handleAddToCart(item); navigate('/checkout') }}>
                      Add to Cart
                    </Button>
                    <Price>
                      <Heading level={1} style={{ color: 'Red', cursor: 'pointer' }} onClick={() => handleRemoveFromFavourites(item)}>X</Heading>
                    </Price>
                  </CheckoutItem>
                ))
              }
            </CheckoutCard>
          </CheckoutContainer>)
          : (
            <Heading level={2}>
              Favourties is empty, <Link to='/' style={{ fontSize: '1.7rem', color: "#2979ff", textDecoration: 'none' }}>Add Products</Link>
            </Heading>
          )
      }
    </>
  )
};

export const FavouritesListItems = styled.div`
          @media screen and (max-width: 760px) {
            overflow-x: scroll;
  }
          `;

export const TrashItem = styled.div`
          color: red;
          cursor: pointer;
          font-size: 18px;
          `;

export const FavouritesListImages = styled.div`
          width: 100px;
          @media screen and (max-width: 500px) {
            width: 50px;
  }
          `;

export default FavouritesListTable;
