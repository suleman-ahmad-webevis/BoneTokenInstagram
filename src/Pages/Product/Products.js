import React, { useState } from "react";
import {
  NavLink,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import styled from "styled-components";
import Categories from "../../components/Categories/Categories";
import ProductsListComponent from "../../components/ProductsComponent/ProductsComponent";
import All from "../../assets/images/Filterbar/All.png";
import New from "../../assets/images/Filterbar/New.png";
import Featured from "../../assets/images/Filterbar/Featured.png";
import Popular from "../../assets/images/Filterbar/Popular.png";
import RecentlyViewed from "../../assets/images/Filterbar/RecentlyViewed.png";
import Rated from "../../assets/images/Filterbar/Rated.png";
import NavProducts from "../../assets/images/Nav/NavProducts.png";
import { Img } from "../../GlobalStyles";
import { getTheProducts, reset } from "../../redux/product/productSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Products = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(
    location?.state?.index ? location?.state?.index : 0
  );

  const proNavData = [All, New, Featured, Popular, RecentlyViewed, Rated];

  const navigate = useNavigate();

  const clickHandler = (index) => {
    if (index === 0) {
      setActiveIndex(0);
      setSearchParams("");
      dispatch(reset());
      dispatch(getTheProducts({ page: 1, limit: 10 }));
    }
    if (index === 1) {
      setActiveIndex(1);
      setSearchParams({ new: true });
      dispatch(reset());
      dispatch(getTheProducts({ new: true }));
    }
    if (index === 2) {
      setActiveIndex(2);
      dispatch(reset());
      setSearchParams({ featured: true });
      dispatch(getTheProducts({ featured: true }));
    }
    if (index === 4) {
      setActiveIndex(4);
      dispatch(reset());
      navigate("/products/recently-viewed");
    }
    if (index === 5) {
      setActiveIndex(5);
      dispatch(reset());
      setSearchParams({ rated: true });
      dispatch(getTheProducts({ rated: true }));
    }
  };

  return (
    <ProductPageContainer>
      <Categories />
      <ProductsListContainer>
        <CategoriesButton onClick={() => setOpen(!open)}>
          <Img src={NavProducts} alt="Products" />
        </CategoriesButton>
        <ProductListLinks open={open}>
          {proNavData.map((item, index) => (
            <ProductsLink
              activeIndex={activeIndex === index}
              onClick={() => clickHandler(index)}
              key={index}
            >
              <Img src={item} alt="proNavBar" />
            </ProductsLink>
          ))}
        </ProductListLinks>
        <ProductsListComponent />
      </ProductsListContainer>
    </ProductPageContainer>
  );
};

export const ProductPageContainer = styled.div`
  display: flex;
  grid-gap: 5px;
  position: relative;
  @media screen and (max-width: 900px) {
    margin-top: 80px;
  }
  @media screen and (max-width: 760px) {
    margin-top: 60px;
  }
`;

export const ProductsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
  width: 80%;
  @media screen and (max-width: 900px) {
    width: 50%;
  }
`;
export const CategoriesButton = styled.div`
  background: #2196f3;
  border-radius: 8px;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;

  @media (max-width: 500px) {
    display: flex;
    position: absolute;
    top: -50px;
    right: 20px;
    z-index: 1;
    z-index: 1000;
    width: 90%;
    height: 50px;
    img {
      width: 150px;
      height: 40px;
    }
  }
`;
export const ProductListLinks = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 20px;
  padding: 20px 40px 0;

  @media screen and (max-width: 1250px) {
    grid-gap: 10px;
  }
  @media screen and (max-width: 900px) {
    position: absolute;
    right: 0;
    left: 0;
    top: -90px;
  }
  @media screen and (max-width: 760px) {
    top: -70px;
  }
  @media (max-width: 500px) {
    overflow: hidden;
    flex-direction: column;
    align-items: flex-end;
    max-height: ${({ open }) => (open ? "100vh" : "0vh")};
    transition: max-height 0.3s ease-in;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;
    background: #fff;
  }
`;
export const ProductsLink = styled.div`
background: rgba(33, 150, 243, 0.3);
border-radius: 8.76923px;
display: flex;
justify-content: center;
align-items: center;
padding: 10px 20px;
height: 57px;
cursor: pointer;
background: ${({activeIndex}) => activeIndex ? "rgba(33, 150, 243, 1)": ""};

  &.active {
    background: rgba(33, 150, 243, 1);
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: 1100px) {
    height: 50px;
  }
  @media screen and (max-width: 1000px) {
    height: 40px;
  }
  @media screen and (max-width: 900px) {
    height: 57px;
  }
  @media screen and (max-width: 760px) {
    height: 50px;
  }
  @media screen and (max-width: 700px) {
    height: 40px;
  }
  @media screen and (max-width: 650px) {
    height: 35px;
  }
  @media screen and (max-width: 600px) {
    height: 30px;
  }
  @media screen and (max-width: 550px) {
    height: 25px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 50px;
    img {
      height: 50px;
      width: 100px;
    }
  }
  /* @media screen and (max-width: 1400px) {height: 70px;}
  @media screen and (max-width: 1200px) {height: 60px;}
  @media screen and (max-width: 1100px) {height: 50px;}
  @media screen and (max-width: 1000px) {height: 40px;}
  @media screen and (max-width: 900px) {height: 60px;}
  @media screen and (max-width: 760px) {height: 50px;}
  @media screen and (max-width: 600px) {height: 40px;}
  @media screen and (max-width: 500px) {width: 100%; img{height: 90%; width: 40%;}} */
`;

export const ProductsNav = styled.div``;

export default Products;
