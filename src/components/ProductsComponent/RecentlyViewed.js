import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Img } from "../../GlobalStyles";
import {
  CategoriesButton,
  ProductListLinks,
  ProductPageContainer,
  ProductsLink,
  ProductsListContainer,
} from "../../Pages/Product/Products";
import ProductCard from "../Cards/ProductCard";
import NavProducts from "../../assets/images/Nav/NavProducts.png";
import Categories from "../Categories/Categories";
import { ProductsList } from "./ProductsComponent";
import { getTheProducts, reset } from "../../redux/product/productSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import All from "../../assets/images/Filterbar/All.png";
import New from "../../assets/images/Filterbar/New.png";
import Featured from "../../assets/images/Filterbar/Featured.png";
import Popular from "../../assets/images/Filterbar/Popular.png";
import RecentlyViewed from "../../assets/images/Filterbar/RecentlyViewed.png";
import Rated from "../../assets/images/Filterbar/Rated.png";

function RecentlyViewedProducts() {
  const { recentlyViewedProducts } = useSelector(
    (state) => state.recentlyViewed
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(4);

  const proNavData = [All, New, Featured, Popular, RecentlyViewed, Rated];

  const clickHandler = (index) => {
    if (index === 0) {
      setActiveIndex(0);
      dispatch(reset());
      dispatch(getTheProducts({ page: 1, limit: 10 }));
      navigate("/products", {
        state: {
          index: index,
        },
      });
    }
    if (index === 1) {
      setActiveIndex(1);
      dispatch(reset());
      dispatch(getTheProducts({ new: true }));
      navigate("/products?new=true", {
        state: {
          index: index,
        },
      });
    }
    if (index === 2) {
      setActiveIndex(2);
      dispatch(reset());
      dispatch(getTheProducts({ featured: true }));
      navigate("/products?featured=true", {
        state: {
          index: index,
        },
      });
    }
    if (index === 3) {
      setActiveIndex(3);
      dispatch(reset());
      dispatch(getTheProducts({ popular: true }));
      navigate("/products?popular=true", {
        state: {
          index: index,
        },
      });
    }
    if (index === 5) {
      setActiveIndex(5);
      dispatch(reset());
      dispatch(getTheProducts({ rated: true }));
      navigate("/products?rated=true", {
        state: {
          index: index,
        },
      });
    }
  };

  return (
    <>
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
          <ProductsList id="ProductListContainer">
            {recentlyViewedProducts.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </ProductsList>
        </ProductsListContainer>
      </ProductPageContainer>
    </>
  );
}

export default RecentlyViewedProducts;
