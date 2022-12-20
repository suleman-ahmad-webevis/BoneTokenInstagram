import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styled from "styled-components";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";

// import required modules
import { Navigation } from "swiper";

//Dog images
import nextButton from "../../assets/images/Slides2/polygon4.png";
import prevButton from "../../assets/images/Slides2/polygon3.png";
import paw from "../../assets/images/Slides2/paw.png";
import { FormLabel } from "./CustomerDelivery.Style";
import { useDispatch, useSelector } from "react-redux";

import { removeFromCart, saveItemFromDeliverySlider } from '../../redux/cart/cartSlice'
import { useEffect } from "react";
//EditButtonComponent

const DeliverySlider = () => {


  const dispatch = useDispatch()

  const { cartItems } = useSelector((state) => state.cart);

  const swiper = useSwiper();

  const [delivery, setDelivery] = useState("");
  const [slideItem, setSlideItem] = useState(0)

  useEffect(() => {
    dispatch(saveItemFromDeliverySlider(cartItems[slideItem]))
  }, [])

  const handleMouseClick = (i) => {
    setDelivery(i);
  };

  const handleMouseOut = () => {
    setDelivery("");
  };

  return (
    <DeliverySwiper>
      <DeliveryProduct>
        <FormLabel>Product Details</FormLabel>
        <RemoveItem onClick={() => { dispatch(removeFromCart(cartItems[slideItem])); if (slideItem > 0) { swiper?.slidePrev() } else swiper?.slideNext() }}>x</RemoveItem>
      </DeliveryProduct>
      <SliderContainer>
        <BackButtonWrapper id="swipeBack1" onClick={() => { if (slideItem > 0) { dispatch(saveItemFromDeliverySlider(cartItems[slideItem - 1])); setSlideItem(slideItem - 1) } else swiper?.slidePrev(); }}>
          <img src={prevButton} alt="Slide" />
          <PrevPawImage src={paw} />
        </BackButtonWrapper>
        <Swiper
          slidesPerView={1}
          navigation={{
            nextEl: "#swipeNext1",
            prevEl: "#swipeBack1",
          }}
          modules={[Navigation]}
        >
          {cartItems.map((item, index) => (
            <SwiperSlide
              key={index}
              onClick={() => handleMouseClick(index + 1)}
              onMouseLeave={() => handleMouseOut()}
            >
              <SwiperSlideImg src={item?.productImage} />
            </SwiperSlide>
          ))}
        </Swiper>
        <NextButtonWrapper
          id="swipeNext1"
          onClick={() => {
            if (slideItem < cartItems.length - 1) { dispatch(saveItemFromDeliverySlider(cartItems[slideItem + 1])); setSlideItem(slideItem + 1) } else swiper?.slideNext()
          }}
        >
          <img src={nextButton} alt="slide" />
          <NextPawImage src={paw} />
        </NextButtonWrapper>
      </SliderContainer>
    </DeliverySwiper >
  );
};

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 300px;
  /* @media (max-width: 1500px) {
    width: 50vw;
  }
  @media (max-width: 1020px) {
    width: 95vw;
  } */

  /* .swiper-slide {
    font-size: 18px;

  } */
`;


export const DeliverySwiper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DeliveryProduct = styled.div`
  display: flex;
  justify-content: space-between;
  width: 255px;
  margin-left: 40px;
`;
export const RemoveItem = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #2B2B2B;
border-radius: 5px;
width: 39px;
height: 39px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 36px;
color: #FFFFFF;
cursor: pointer;
`;
export const BackButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const NextButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextPawImage = styled.img`
  position: absolute;
`;

export const PrevPawImage = styled.img`
  position: absolute;
  left: 8px;
`;

export const SwiperSlideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SwiperSlideImg = styled.img`
width: 154px;
height: 151px;
border-radius: 8px;
`;

export const SwiperSlideData = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
`;

export default DeliverySlider;
