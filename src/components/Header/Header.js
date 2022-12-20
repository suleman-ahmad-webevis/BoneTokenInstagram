import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import { getTotals } from "../../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductNavbar from "../Navbar/ProductNavbar";
import { getTotalsFavourites } from "../../redux/favouritesList/favouritesListSlice";
import { useLocation, useParams } from "react-router-dom";

const Header = ({ theme, setTheme }) => {
  const [productNavbar, setproductNavbar] = useState(true);
  const location = useLocation();
  const url = useLocation().pathname.slice(24);

  const dispatch = useDispatch();
  const locations = ["/products", '/products/recently-viewed', "/",
                     `/products/productDetail/${url}`, "/checkout", 
                     "/customerdelivery", "/dogshows", "/favourites", "/blogs"];
  const { cartItems } = useSelector((state) => state.cart);
  const { favouritesItems } = useSelector((state) => state.favourites);
  useEffect(() => {
    dispatch(getTotals());
    dispatch(getTotalsFavourites());
  }, [cartItems, favouritesItems]);

  return (
    <HeaderContainer>
      {locations.includes(location?.pathname) ? (
        <ProductNavbar
          theme={theme}
          setTheme={setTheme}
          productNavbar={productNavbar}
          setproductNavbar={setproductNavbar}
        />
      ) : (
        <Navbar
          theme={theme}
          setTheme={setTheme}
          productNavbar={productNavbar}
          setproductNavbar={setproductNavbar}
        />
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  /* margin-bottom: 30px;

  @media screen and (max-width: 1245px) {
    margin-bottom: 80px;
  }
  @media screen and (max-width: 820px) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 712px) {
    margin-bottom: 80px;
  }
  @media screen and (max-width: 498px) {
    margin-bottom: 160px;
  } */
`;

export default Header;
