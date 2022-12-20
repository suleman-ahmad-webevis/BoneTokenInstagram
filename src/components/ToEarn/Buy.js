import React from "react";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";
import Heading from "../Heading/Heading";
import BuyFieldBone from "../../assets/images/ToEarn/BuyFieldBone.png"
import BuyBone from "../../assets/images/ToEarn/BuyBone.png"

const Buy = () => {
  return (
    <BuyContainer>
      <Heading level={10} Black>BUY</Heading>
      <BuySection>
        <BuyField>
          <BuyInput
              type="text"
              placeholder="$0.035"
              disabled
            />
          <Img src={BuyFieldBone} alt="Bone" />
          <BuyInput Right
              type="text"
              placeholder="0"
              disabled
            />
        </BuyField>
        <BuyField>
          <BuyInput
              type="text"
              placeholder="Total"
              disabled
            />
          <BuyInput Right
              type="text"
              placeholder="$0"
              disabled
            />
        </BuyField>
        <BuyButton>
          <Img src={BuyBone} alt="BuyBone" />
        </BuyButton>
      </BuySection>
    </BuyContainer>
  );
};

const BuyContainer = styled.div`
  background: #e9fdfc;
  border: 2px solid #b1b1b1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  grid-gap: 10px;
`;

const BuySection = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 20px;
  @media screen and (max-width: 600px) { flex-direction: column; }
`;
const BuyField = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 5px;
  align-items: center;
  background: #F4FAFF;
  border: 1px solid #90CAF9;
  border-radius: 10px;
  height: 60px;
`;
export const BuyInput =styled.input`
    border: none;
    outline: none;
    background: none;
    padding: 10px;
    text-align: ${({Right}) => (Right ? 'right' : 'left')};
    width: 100%;

    ::placeholder{
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      color: ${({Right}) => (Right ? '#2979FF' : 'rgba(144, 202, 249, 0.5)')};
    }
`;
const BuyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #63B661;
  border: 1px solid #90CAF9;
  border-radius: 10px;
  cursor: pointer;
  height: 60px;
`;
export default Buy;
