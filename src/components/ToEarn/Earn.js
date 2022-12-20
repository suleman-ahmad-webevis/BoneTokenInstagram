import React from "react";
import toEarn from "../../assets/images/ToEarn/2earn.png";
import { Img } from "../../GlobalStyles";
import styled from "styled-components";
import Heading from "../Heading/Heading";
import smallGoldBone from "../../assets/images/ToEarn/smallGoldBone.png";
import EarnSlider from "../Sliders/EarnSlider";

const Earn = () => {
  return (
    <ToEarnCard>
    <EarnContainer>
      <Img src={toEarn} alt="toEarn" />
      <UploadedSection>
        <JudgeReport>
            <Heading level={10}>
              Judge Reports 17 <br /> uploaded:
            </Heading>
            <BoneEarn>
              <Heading level={10}>BONE</Heading>
              <Img src={smallGoldBone} />
              <Heading level={10}>earned:</Heading>
              <Heading level={10}>&nbsp;87</Heading>
            </BoneEarn>
            <EarnBtn>Judges Show report Upload</EarnBtn>
        </JudgeReport>
        <JudgeReport>
            <Heading level={10}>
              Judge Photographs 17 <br /> uploaded:
            </Heading>
            <BoneEarn>
              <Heading level={10}>BONE</Heading>
              <Img src={smallGoldBone} />
              <Heading level={10}>earned:</Heading>
              <Heading level={10}>&nbsp;820</Heading>
            </BoneEarn>
            <EarnBtn> DogShow Podium Image Upload</EarnBtn>
        </JudgeReport>
      </UploadedSection>
      <EarnSlider />
    </EarnContainer>
        <EarnedContainer>
          <Heading level={10}>DOGSHOW AIRDROP TOTAL </Heading>
          <Points>
            <Heading level={10}>Bone</Heading>
            <Img src={smallGoldBone} alt="Bone" />
            <Heading level={10}>earned:</Heading>
            <Heading level={10}>907</Heading>
          </Points>
        </EarnedContainer>
    </ToEarnCard>
  );
};

const ToEarnCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const EarnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #647dbc;
  border: 1px solid #b1b1b1;
  border-radius: 10px;
  padding: 5px 20px;
`;

const UploadedSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 80px;
  margin-bottom: 20px;
  
@media screen and (max-width: 600px) { 
  flex-direction: column;
  grid-gap: 20px;
  margin-top: 10px;
  }
`;

const JudgeReport = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;




const BoneEarn = styled.div`
  display: flex;
  align-items: center;
`;


const EarnBtn = styled.div`
  background: #91c1e7;
  border: 1px solid #90caf9;
  border-radius: 8px;
  width: 228px;
  height: 60px;
  padding: 6px 30px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
`;

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
export default Earn;
