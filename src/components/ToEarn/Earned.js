import React from "react";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";
import Heading from "../Heading/Heading";
import smallGoldBone from "../../assets/images/ToEarn/smallGoldBone.png";
import { EarnedPoints } from "./ToEarnData";

const Earned = () => {
  return (
    <>
      {EarnedPoints.map((data, index) => (
        <EarnedContainer key={index}>
          <Heading level={10}>{data.title} </Heading>
          <Heading level={10}>{data.price} </Heading>
          <Points>
            <Heading level={10}>Bone</Heading>
            <Img src={smallGoldBone} alt="" />
            <Heading level={10}>earned:</Heading>
            <Heading level={10}>{data.earned}</Heading>
          </Points>
        </EarnedContainer>
      ))}
    </>
  );
};

const EarnedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  background: #91c1e7;
  border: 1px solid #b1b1b1;
  border-radius: 10px;
  @media screen and (max-width: 600px) { flex-direction: column; }
`;

const Points = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 2px;
`;

export default Earned;
