import React from "react";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";
import Dogdatalogo from "../../assets/images/Dogdatalogo.png";
import Heading from "../Heading/Heading";
import Slider from "../Sliders/Slider";
import { FormButton } from "./MyDogForm.styled";

const Topbar = () => {
  return (
    <TopbarContainer>
      <TobarLogo>
        <Img src={Dogdatalogo} alt="DogData" />
        <Heading level={1} style={{ color: '#2979FF' }}>NFT</Heading>
      </TobarLogo>
      <TopbarContent>
        <FormButton Align NoMargin>
          CREATE NEW <br /> DOG NFT
        </FormButton>
        <Slider />
      </TopbarContent>
    </TopbarContainer>
  );
};

export const TopbarContainer = styled.div`
  display: flex;
  grid-gap: 60px;
  padding-right: 40px;
  @media screen and (max-width: 1020px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const TobarLogo = styled.div`
  display: flex;
  align-items: baseline;
  grid-gap: 10px;
`;
export const TopbarContent = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 60px;
  @media screen and (max-width: 1020px) {
    flex-direction: column;
  }
`;
export default Topbar;
