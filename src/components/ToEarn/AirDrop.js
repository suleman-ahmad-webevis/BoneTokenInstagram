import React from "react";
import Heading from "../Heading/Heading";
import styled from "styled-components";
import { Img } from "../../GlobalStyles";
import Twitter from "../../assets/images/ToEarn/Twitter.png";
import Telegram from "../../assets/images/ToEarn/Telegram.png";
import Discord from "../../assets/images/ToEarn/Discord.png";
import Facebook from "../../assets/images/ToEarn/Facebook.png";
import Instagram from "../../assets/images/ToEarn/Instagram.png";
import Youtube from "../../assets/images/ToEarn/Youtube.png";
import Reddit from "../../assets/images/ToEarn/Reddit.png";
import MGroup from "../../assets/images/ToEarn/M.png";
import smallBone from "../../assets/images/ToEarn/smallBone.png";

const AirDrop = () => {
  return (
    <ADContainer>
      <Heading level={10} Black>
        AirDrop
      </Heading>
      <AirDropSection>
        <AirDropIcons>
          <Img src={Telegram} alt="" />
          <Img src={Twitter} alt="" />
          <Img src={Discord} alt="" />
          <Img src={Facebook} alt="" />
          <Img src={Instagram} alt="" />
          <Img src={Reddit} alt="" />
          <Img src={Youtube} alt="" />
          <Img
            style={{ borderRadius: "17px", marginLeft: "8px" }}
            src={MGroup}
            alt=""
          />
        </AirDropIcons>
        <AirDropButtons>
          <EarnBtn>
            Earn <Img src={smallBone} alt="smallBone" />
          </EarnBtn>
          <AirDropBtn>AirDrop</AirDropBtn>
        </AirDropButtons>
      </AirDropSection>
    </ADContainer>
  );
};

const ADContainer = styled.div`
  background: #e9fdfc;
  border: 2px solid #b1b1b1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  grid-gap: 10px;
`;

const AirDropIcons = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 600px) {
    img {
      width: 50px;
    }
  }
  @media screen and (max-width: 470px) {
    img {
      width: 40px;
    }
  }
  @media screen and (max-width: 400px) {
    img {
      width: 35px;
    }
  }
  @media screen and (max-width: 370px) {
    img {
      width: 30px;
    }
  }
`;

const AirDropButtons = styled.div`
  background: #2196f3;
  border: 1px solid #90caf9;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  height: 60px;
  cursor: pointer;
`;

const EarnBtn = styled.div`
  background: #efe0ca;
  border: 1px solid #90caf9;
  border-radius: 0 10px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 60px;
`;

const AirDropBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 60px;
`;

const AirDropSection = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 20px;
  justify-content: space-between;
  @media screen and (max-width: 1530px) {
    flex-direction: column;
  }
`;
export default AirDrop;
