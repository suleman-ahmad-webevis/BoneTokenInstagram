import React from "react";
import EarnCardOne from "../../components/Cards/EarnCardOne";
import EarnCardTwo from "../../components/Cards/EarnCardTwo";
import AirDrop from "../../components/ToEarn/AirDrop";
import styled from "styled-components";
import Buy from "../../components/ToEarn/Buy";
import Earn from "../../components/ToEarn/Earn";
import Earned from "../../components/ToEarn/Earned";
import TokenSummary from "../../components/ToEarn/TokenSummary";
import BoneDrop from "../../assets/images/ToEarn/BoneDrop.png"
import { Img } from "../../GlobalStyles";

const ToEarn = () => {
  return (
    <ToEarnContainer>
      <ToEarnLeft>
        <EarnCardOne />
        <EarnCardTwo />
        <Buy />
        <AirDrop />
      </ToEarnLeft>
      <ToEarnRight>
        <Earn />
        <Img src={BoneDrop} alt="BoneDrop" style={{alignSelf: "center" }} />
        <Earned />
        <TokenSummary />
      </ToEarnRight>
    </ToEarnContainer>
  );
};

const ToEarnContainer = styled.div`
  display: flex;
  padding: 20px;
  grid-gap: 40px;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ToEarnLeft = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
  width: 60%;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const ToEarnRight = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;

export default ToEarn;
