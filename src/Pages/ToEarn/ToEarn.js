import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import { Img } from "../../GlobalStyles";
import EarnBone from "../../assets/images/ToEarn/New/EarnBone.png";
import Telegram from "../../assets/images/ToEarn/New/Telegram.png";
import Twitter from "../../assets/images/ToEarn/New/Twitter.png";
import Discord from "../../assets/images/ToEarn/New/Discord.png";
import Facebook from "../../assets/images/ToEarn/New/Facebook.png";
import Instagram from "../../assets/images/ToEarn/New/Instagram.png";
import Reddit from "../../assets/images/ToEarn/New/Reddit.png";
import Youtube from "../../assets/images/ToEarn/New/Youtube.png";
import M from "../../assets/images/ToEarn/New/M.png";
import TwoEarn from "../../assets/images/ToEarn/New/TwoEarn.png";
import ToggleEarnButtons from "./DoggleEarnButtons";
import EarnSlider from "../../components/Sliders/EarnSlider";

const ToEarn = () => {
  return (
    <ToEarnContainer>
      <ToEarnContentContainer>
        <Heading level={1} Big>
          BoneDrop
        </Heading>
        <ToEarnContent>
          <ToEarnCards>
            <ToEarnLeftCard>
              <Heading level={9} Big Color>
                {" "}
                WEBSHOP RATINGS
              </Heading>
              <Heading level={10}>Rated: $1837 </Heading>
              <EarnedBone>
                <Heading level={10}>BONE </Heading>
                <Img src={EarnBone} alt="EarnBone" />
                <Heading level={10} Color>
                  {" "}
                  earned: 51
                </Heading>
              </EarnedBone>
            </ToEarnLeftCard>
            <ToEarnLeftCard>
              <Heading level={9} Big Color>
                CRYPTO EXPENDITURE
              </Heading>
              <Heading level={10}>TOTAL: $1837</Heading>
              <EarnedBone>
                <Heading level={10}>BONE </Heading>
                <Img src={EarnBone} alt="EarnBone" />
                <Heading level={10} Color>
                  earned: 87
                </Heading>
              </EarnedBone>
            </ToEarnLeftCard>
          </ToEarnCards>
          <ToEarnCards>
            <ToEarnLeftCard>
              <Heading level={9} Big Color>
                WebShop EXPENDITURE
              </Heading>
              <Heading level={10}>TOTAL: $4372 </Heading>
              <EarnedBone>
                <Heading level={10}>BONE </Heading>
                <Img src={EarnBone} alt="EarnBone" />
                <Heading level={10} Color>
                  earned: 43
                </Heading>
              </EarnedBone>
            </ToEarnLeftCard>
            <DonateCard>
              <ToEarnLeftCard Differ>
                <Heading level={9} Big Color>
                  STREET DOG FEEDING
                </Heading>
                <Heading level={10}>Donated: $428</Heading>
                <EarnedBone>
                  <Heading level={10}>BONE </Heading>
                  <Img src={EarnBone} alt="EarnBone" />
                  <Heading level={10} Color>
                    earned: 398
                  </Heading>
                </EarnedBone>
              </ToEarnLeftCard>
              <DonateCardButton>Donate</DonateCardButton>
            </DonateCard>
          </ToEarnCards>
          <DonateCard>
            <ToEarnLeftCard Differ>
              <SocialMedia>
                Earn Tokens Through social media activities
              </SocialMedia>
              <ToEarnCards>
                <SocialIcons>
                  <Img src={Telegram} alt="Telegram" />
                  <Img src={Twitter} alt="Twitter" />
                  <Img src={Discord} alt="Discord" />
                  <Img src={Facebook} alt="Facebook" />
                  <Img src={Instagram} alt="Instagram" />
                  <Img src={Reddit} alt="Reddit" />
                  <Img src={Youtube} alt="Youtube" />
                  <Img src={M} alt="M" />
                </SocialIcons>
                <EarnToggleButtons>
                  <ToggleEarnButtons />
                </EarnToggleButtons>
              </ToEarnCards>
            </ToEarnLeftCard>
          </DonateCard>
          <BoneTokenSummary>
            <ToEarnLeftCard>
              <Heading level={9} Big Color>
                {" "}
                My BoNe Token Summary
              </Heading>
              <Heading level={10}>Earned Total: 57327 </Heading>
              <EarnedBone>
                <Heading level={10}>Available to Withdraw: </Heading>
                <Heading level={10} Color>
                  1486
                </Heading>
              </EarnedBone>
            </ToEarnLeftCard>
            <SummaryButtons>
              <AmmountButton>
                <Heading level={10}>Amount:</Heading>
                <Heading level={10} Color>
                  300
                </Heading>
              </AmmountButton>
              <WithdrawButton>Withdraw</WithdrawButton>
            </SummaryButtons>
          </BoneTokenSummary>
        </ToEarnContent>
      </ToEarnContentContainer>
      <ToEarnContentContainer>
        <Heading level={1} Big>
          {" "}
          2earn
        </Heading>
        <ToEarnContentRight>
          <Img src={TwoEarn} alt="TwoEarn" />
          <ToEarnRightCards>
            <ToEarnRightCard>
              <Heading level={9} Color>
                Judge Reports 17 <br /> uploaded:
              </Heading>
              <EarnedBone>
                <Heading level={10}>BONE </Heading>
                <Img src={EarnBone} alt="EarnBone" />
                <Heading level={10} Color>
                  earned: 87
                </Heading>
              </EarnedBone>
              <ShowButton>
                <Heading level={10}>
                  Judges Show report <br /> Upload
                </Heading>
              </ShowButton>
            </ToEarnRightCard>
            <ToEarnRightCard>
              <Heading level={9} Color>
                Show Photographs <br /> 19 uploaded:
              </Heading>
              <EarnedBone>
                <Heading level={10}>BONE </Heading>
                <Img src={EarnBone} alt="EarnBone" />
                <Heading level={10} Color>
                  earned: 820
                </Heading>
              </EarnedBone>
              <ShowButton>
                <Heading level={10}>
                  DogShow Podium <br /> Image Upload
                </Heading>
              </ShowButton>
            </ToEarnRightCard>
          </ToEarnRightCards>
          <EarnSlider />
          <DogShowTotal>
            <Heading level={10}>DOGSHOW AIRDROP TOTAL</Heading>
            <EarnedBone>
              <Heading level={10}>BONE </Heading>
              <Img src={EarnBone} alt="EarnBone" />
              <Heading level={10} Color>
                earned: 907
              </Heading>
            </EarnedBone>
          </DogShowTotal>
        </ToEarnContentRight>
      </ToEarnContentContainer>
    </ToEarnContainer>
  );
};

export const ToEarnContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 30px;
  padding: 20px;
<<<<<<< HEAD
  
@media screen and (max-width: 1650px) { flex-direction: column-reverse; align-items: center;}
=======

  @media screen and (max-width: 1650px) {
    flex-direction: column-reverse;
    align-items: center;
  }
>>>>>>> 477afe25e30842001a12232dc93a49648a776616
`;

export const ToEarnContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  padding: 20px 0;
`;

export const ToEarnContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 30px;
  padding: 20px;
`;

export const ToEarnCards = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 30px;
  flex-wrap: wrap;
  @media screen and (max-width: 760px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ToEarnRightCards = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 30px;
  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

export const DonateCard = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 20px;
  @media screen and (max-width: 760px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const DonateCardButton = styled.div`
  background: #2979ff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 10px 20px;

  font-family: "Inter-Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
`;

export const ToEarnLeftCard = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  background: #ffffff;
  box-shadow: ${({ Differ }) =>
    Differ ? "#DA9D02" : "0px 4px 50px rgba(0, 0, 0, 0.05)"};
  border-radius: 15px;
  padding: ${({ Differ }) => (Differ ? "20px 0" : "20px")};
  @media screen and (max-width: 760px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

export const EarnedBone = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  flex-wrap: wrap;
  @media screen and (max-width: 760px) {
    width: 100%;
    justify-content: center;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
  flex-wrap: wrap;
  @media screen and (max-width: 760px) {
    width: 100%;
    justify-content: center;
  }
`;

export const SocialMedia = styled.h2`
  font-family: "Inter-Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #2a4487;
`;

export const EarnToggleButtons = styled.div`
  background: #2196f3;
  border: 1px solid #90caf9;
  border-radius: 10px;
  cursor: pointer;

  font-family: "Inter-Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: #ffffff;
  display: flex;
`;

export const BoneTokenSummary = styled.div`
  display: flex;
  grid-gap: 20px;
  flex-wrap: wrap;
  @media screen and (max-width: 760px) {
    align-items: center;
    justify-content: center;
  }
`;

export const SummaryButtons = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  @media screen and (max-width: 760px) {
    width: 60%;
  }
`;

export const AmmountButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 30px;
  padding: 10px 20px;
  background: #ffffff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  height: 50%;
  cursor: pointer;
`;

export const WithdrawButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background: #2979ff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  height: 50%;
  cursor: pointer;

  font-family: "Inter-Regular";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

export const ToEarnContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 30px;
  padding: 20px 50px;
  background: linear-gradient(
    180.03deg,
    #ffffff 0.03%,
    #ffffff 78.67%,
    rgba(207, 235, 255, 0.92) 109.56%
  );
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  position: relative;
  @media screen and (max-width: 760px) {
    position: unset;
    padding: 20px;
  }
`;

export const ToEarnRightCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 30px;
  padding: 30px;
  background: #ffffff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  text-align: center;
  height: 490px;

  @media screen and (max-width: 760px) {
    height: auto;
  }
`;

export const ShowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  cursor: pointer;
`;

export const DogShowTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  margin-top: 20px;
  grid-gap: 80px;
  @media screen and (max-width: 760px) {
    flex-direction: column;
    align-items: center;
    grid-gap: 10px;
    text-align: center;
  }
`;
export default ToEarn;
