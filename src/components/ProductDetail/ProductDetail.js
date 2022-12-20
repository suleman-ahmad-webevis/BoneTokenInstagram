import React, { useState } from "react";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";
import ProductImg from "../../assets/images/ProductDetail/ProductImage.png";
import ShareIcon from "../../assets/images/ProductDetail/ShareIcon.png";
import Facebook from "../../assets/images/ProductDetail/Facebook.png";
import Instagram from "../../assets/images/ProductDetail/Instagram.png";
import ProductPhoto from "../../assets/images/ProductDetail/ProductPhoto.png";
import Minus from "../../assets/images/ProductDetail/Minus.png";
import Plus from "../../assets/images/ProductDetail/Plus.png";
import Heading from "../Heading/Heading";
import Rating from "@mui/material/Rating";
import DetailColorSelector from "../Selectors/DetailColorSelector";
import SmartSearchValues from "./SmartSearchValues";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getTheProductById,
  rateTheProduct,
} from "../../redux/product/productSlice";
import { useEffect } from "react";
import Loader from "../Loader/Loader";
import {
  addToCart,
  decreaseCart,
  getItemQuantity,
  incQuantity,
} from "../../redux/cart/cartSlice";
import { FacebookShareButton, InstapaperShareButton } from "react-share";
import { saveRecentlyViewedProducts } from "../../redux/recentlyViewed/recentlySlice";
import axios from "axios";
import InstagramHandler from "./InstagramHandler";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { product, isLoading } = useSelector((state) => state.product);
  const { singleItemQuantity } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTheProductById(id));
    dispatch(getItemQuantity(id));
  }, []);

  dispatch(saveRecentlyViewedProducts(product));

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  // const shareUrl = `https://bonetoken.com/products/productDetail/638c669ed8305fce4a8c3936`

  //AllRatings
  const [quantityR, setQuantityR] = useState(0);
  const [fitPurposeR, setFitPurposeR] = useState(0);
  const [serviceR, setServiceR] = useState(0);
  const [priceR, setPriceR] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (total === 4) {
      dispatch(
        rateTheProduct({ quantityR, fitPurposeR, serviceR, priceR, total, id })
      );
    }
  }, [total]);

  if (isLoading) {
    return <Loader />;
  }

  const tenPercFinder = (retailPrice) => {
    const tenPerc = retailPrice / 10;
    return retailPrice - tenPerc;
  };


  return (
    <ProductDetailContainer>
      <ProductRow>
        <ProductField>
          <Img src={location.state.productImage} alt="ProductImg" />
          <ShareProduct>
            <Img src={ShareIcon} alt="ShareIcon" />
            <Heading level={6}>Share product</Heading>
          </ShareProduct>
          <ShareProduct>
            <FacebookShareButton
              url="www.bonetoken.com"
              style={{ marginLeft: "4px" }}
              quote={"New Product Launched, Have a Look!"}
            >
              <Img src={Facebook} alt="Facebook" />
            </FacebookShareButton>
            <Img src={Instagram} onClick={() => navigate('/instagramhandler')} alt="Instagram" />
          </ShareProduct>
        </ProductField>
        <CombinedProductFields>
          <CombinedProduct>
            <ProductForm>
              <CombinedProduct>
                <ProductField>
                  <label>Product Name</label>
                  <input type="text" value={product?.name} disabled />
                </ProductField>
                <ProductField>
                  <label>Product Code</label>
                  <input
                    type="text"
                    value={product?.productCode}
                    readOnly
                    disabled
                  />
                </ProductField>
              </CombinedProduct>
              <CombinedProduct>
                <ProductField>
                  <label>Weight</label>
                  <input
                    type="text"
                    value={product?.weight}
                    readOnly
                    disabled
                  />
                </ProductField>
                <ProductField>
                  <label>Size</label>
                  <input type="text" value={product?.size} readOnly disabled />
                </ProductField>
              </CombinedProduct>
              <DescriptionField>
                <label>
                  <ShareProduct>
                    <Img src={ShareIcon} alt="ShareIcon" />
                    <Heading level={6}>Description</Heading>
                  </ShareProduct>
                </label>
                <textarea
                  value={product?.description}
                  readOnly
                  disabled
                ></textarea>
              </DescriptionField>
            </ProductForm>
            <ProductPhotos>
              <Heading level={6}>Photos of product</Heading>
              <ProductPhotoContainer>
                <Img src={ProductPhoto} alt="ProductPhoto" />
                <Img src={ProductPhoto} alt="ProductPhoto" />
                <Img src={ProductPhoto} alt="ProductPhoto" />
                <Img src={ProductPhoto} alt="ProductPhoto" />
                <Img src={ProductPhoto} alt="ProductPhoto" />
                <Img src={ProductPhoto} alt="ProductPhoto" />
              </ProductPhotoContainer>
            </ProductPhotos>
          </CombinedProduct>
          <ProductRating>
            <RatingField>
              <ProductField>
                <label>Quality</label>
                <Rating
                  size="large"
                  name="half-rating"
                  precision={1}
                  value={quantityR}
                  onChange={(event, ratingVal) => {
                    setQuantityR(ratingVal);
                    setTotal((prev) => prev + 1);
                  }}
                />
                <label>Service</label>
                <Rating
                  size="large"
                  name="half-rating"
                  precision={1}
                  value={serviceR}
                  onChange={(event, ratingVal) => {
                    setServiceR(ratingVal);
                    setTotal((prev) => prev + 1);
                  }}
                />
              </ProductField>
              <ProductField>
                <label>Fit for purpose</label>
                <Rating
                  size="large"
                  name="half-rating"
                  precision={1}
                  value={fitPurposeR}
                  onChange={(event, ratingVal) => {
                    setFitPurposeR(ratingVal);
                    setTotal((prev) => prev + 1);
                  }}
                />
                <label>Price</label>
                <Rating
                  size="large"
                  name="half-rating"
                  precision={1}
                  value={priceR}
                  onChange={(event, ratingVal) => {
                    setPriceR(ratingVal);
                    setTotal((prev) => prev + 1);
                  }}
                />
              </ProductField>
            </RatingField>
            <ProductPrice>
              <label>Quantity</label>
              <Counter>
                <Img
                  src={Minus}
                  alt="Minus"
                  onClick={() => {
                    setQuantity((prev) => prev - 1);
                  }}
                />
                <input type="text" value={quantity} disabled />
                <Img
                  src={Plus}
                  alt="Plus"
                  onClick={() => {
                    setQuantity((prev) => prev + 1);
                  }}
                />
              </Counter>

              <Heading level={1}>Retail Price: {product?.retailPrice}</Heading>
              <Heading level={1}>
                Member Price 🦴: {tenPercFinder(product?.retailPrice)}
              </Heading>
            </ProductPrice>
          </ProductRating>
          <AddToCartButton
            onClick={() => {
              dispatch(incQuantity({ product, quantity })) &&
                navigate("/checkout");
            }}
          >
            ADD TO CART
          </AddToCartButton>
        </CombinedProductFields>
      </ProductRow>
      <SmartSearchValues />
    </ProductDetailContainer>
  );
};

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 40px;
  padding: 20px;
`;

export const ProductRow = styled.div`
  display: flex;
  grid-gap: 20px;

  @media screen and (max-width: 1020px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ProductField = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;
export const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 13px;
  align-self: flex-end;
`;
export const CombinedProductFields = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;
export const CombinedProduct = styled.div`
  display: flex;
  grid-gap: 20px;

  label {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #000000;
  }

  input {
    background: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 12px;
  }

  ::placeholder {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #000000;
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const ProductForm = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
`;
export const ProductPhotos = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;
export const ShareProduct = styled.div`
  display: flex;
  grid-gap: 10px;
  cursor: pointer;
`;
export const DescriptionField = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;

  textarea {
    background: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    width: 100%;
    height: 136px;
    outline: none;
    padding: 10px;
  }
`;

export const ProductPhotoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Counter = styled.div`
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 12px;
  display: flex;
  align-items: center;
  grid-gap: 10px;

  input {
    outline: none;
    background: none;
    border: none;
    box-shadow: none;
    border-radius: none;
    text-align: center;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    ::placeholder {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
    }
  }
`;
export const AddToCartButton = styled.div`
  background: #2979ff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-family: "DM Sans";
  font-style: normal;
  font-size: 21px;
  line-height: 27px;
  letter-spacing: 0.035em;
  color: #ffffff;
  align-self: flex-end;
  cursor: pointer;
  width: 360px;
  margin-top: 20px;

  &:hover {
    background: #000000;
  }
  @media screen and (max-width: 520px) {
    width: 100%;
  }
`;
export const ProductRating = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const RatingField = styled.div`
  display: flex;
  grid-gap: 60px;
  .css-jue3ft-MuiRating-root {
    font-size: 40px;
  }
  @media screen and (max-width: 520px) {
    flex-direction: column;
    grid-gap: 10px;
  }
`;
export default ProductDetail;
