import React from 'react'
import styled from 'styled-components'
import { Img } from '../../GlobalStyles'
import TokenomicsIconOne from '../../assets/images/Tokenomics/TokenomicsIconOne.png'
import BoneOne from '../../assets/images/Tokenomics/BoneOne.png'
import TokenomicsIconTwo from '../../assets/images/Tokenomics/TokenomicsIconTwo.png'
import BoneTwo from '../../assets/images/Tokenomics/BoneTwo.png'
import HeaderBoneOne from '../../assets/images/Tokenomics/HeaderBoneOne.png'
import HeaderBoneTwo from '../../assets/images/Tokenomics/HeaderBoneTwo.png'
import HeaderIconOne from '../../assets/images/Tokenomics/HeaderIconOne.png'
import HeaderIconTwo from '../../assets/images/Tokenomics/HeaderIconTwo.png'
import LogoOne from '../../assets/images/Tokenomics/LogoOne.png'
import LogoTwo from '../../assets/images/Tokenomics/LogoTwo.png'
import LogoThree from '../../assets/images/Tokenomics/LogoThree.png'
import LogoFour from '../../assets/images/Tokenomics/LogoFour.png'
import LogoFive from '../../assets/images/Tokenomics/LogoFive.png'
import LogoSix from '../../assets/images/Tokenomics/LogoSix.png'
import RateBone from '../../assets/images/Tokenomics/RateBone.png'
import BuyBone from '../../assets/images/Tokenomics/BuyBone.png'
import BinancePay from '../../assets/images/Tokenomics/BinancePay.png'
import WhitePaper from '../../assets/images/Tokenomics/WhitePaper.png'
import Heading from '../../components/Heading/Heading'

const Tokenomics = () => {
  return (
    <TokenomicsContainer>
      <TokenomicsDetail>
        <TokenomicsIcon>
          <Img src={TokenomicsIconOne} alt="Tokenomics" />
          <Img src={BoneOne} alt="Bone" />
        </TokenomicsIcon>
        <TokenomicsCard>
          <CardHeader>
            <HeaderLeft>
              <Img src={HeaderBoneOne} alt="Bone" />
              Bone Tokenomics
            </HeaderLeft>
            <HeaderIcons>
              <Img src={HeaderIconOne} alt="Bone" />
              <Img src={HeaderIconTwo} alt="Bone" />
            </HeaderIcons>
            <HeaderHeading>ERC20</HeaderHeading>
          </CardHeader>
          <CardContent>
            <CardLeft>
              <CardHeading>
                <Heading level={2}>Blockchain</Heading>
                <Heading level={2}>Total Supply</Heading>
                <Heading level={2}>Circulating Supply</Heading>
                <Heading level={2}>Market Cap</Heading>
                <Heading level={2}>Price</Heading>
              </CardHeading>
              <CardHeading>
                <Heading level={2} Secondary>Smart Chain</Heading>
                <Heading level={2} Secondary>100,000,000</Heading>
                <Heading level={2} Secondary>76,000,000</Heading>
                <Heading level={2} Secondary>$253718</Heading>
                <Heading level={2} Secondary> $0.035</Heading>
              </CardHeading>
            </CardLeft>
            <CardDivider />
            <CardRight>
              <ContentHeading>
                <Heading level={5}>Centralised Exchanges</Heading>
                <Img src={LogoOne} alt="Logo" />
              </ContentHeading>
              <CardDivider />
              <ContentHeading>
                <Heading level={5}>Decentralised Exchanges</Heading>
                <Img src={LogoTwo} alt="Logo" />
                <Img src={LogoThree} alt="Logo" />
              </ContentHeading>
            </CardRight>
          </CardContent>
        </TokenomicsCard>
      </TokenomicsDetail>
      <TokenomicsDetail>
        <TokenomicsDetailHeader>
          <TokenomicsIcon>
            <Img src={TokenomicsIconTwo} alt="Tokenomics" />
            <Img src={BoneTwo} alt="Bone" />
          </TokenomicsIcon>
          <BuyBoneButton>
            <Img src={WhitePaper} alt="WhitePaper" />
          </BuyBoneButton>
        </TokenomicsDetailHeader>
        <TokenomicsCard>
          <CardHeader Secondary>
            <HeaderLeft>
              <Img src={HeaderBoneTwo} alt="Bone" />
              Bone Tokenomics
            </HeaderLeft>
            <HeaderIcons>
              <Img src={HeaderIconOne} alt="Bone" />
              <Img src={HeaderIconTwo} alt="Bone" />
            </HeaderIcons>
            <HeaderHeading Color>BEP20</HeaderHeading>
          </CardHeader>
          <CardContent>
            <CardLeft>
              <CardHeading>
                <Heading level={2}>Blockchain</Heading>
                <Heading level={2}>Total Supply</Heading>
                <Heading level={2}>Circulating Supply</Heading>
                <Heading level={2}>Market Cap</Heading>
                <Heading level={2}>Price</Heading>
              </CardHeading>
              <CardHeading>
                <Heading level={2} Secondary>Ethereum</Heading>
                <Heading level={2} Secondary>100,000,000</Heading>
                <Heading level={2} Secondary>100,000,000</Heading>
                <Heading level={2} Secondary>$348790</Heading>
                <Heading level={2} Secondary> $0.0031</Heading>
              </CardHeading>
            </CardLeft>
            <CardDivider />
            <CardRight>
              <ContentHeading>
                <Heading level={5}>Centralised Exchanges</Heading>
                <Img src={LogoFour} alt="Logo" />
                <Img src={LogoFive} alt="Logo" />
              </ContentHeading>
              <CardDivider />
              <ContentHeading>
                <Heading level={5}>Decentralised Exchanges</Heading>
                <Img src={LogoSix} alt="Logo" />
              </ContentHeading>
            </CardRight>
          </CardContent>
        </TokenomicsCard>
        <BoneRates>
          <RateField>
            <BoneRate>
              <Img src={RateBone} alt="Bone" />
              <Heading level={5} FontLarge> $0.035</Heading>
            </BoneRate>
            <input type="text" value="0" readOnly />
          </RateField>
          <RateField>
            <BoneRate>
              <Heading level={5} FontLarge> TOTAL</Heading>
            </BoneRate>
            <input type="text" value="0" readOnly />
          </RateField>
          <BuyBoneButton>
            <Img src={BuyBone} alt="Bone" />
          </BuyBoneButton>
        </BoneRates>
        <Heading level={5} FontLarge> or</Heading>
        <Img src={BinancePay} alt="Bone" style={{ alignSelf: "flex-start" }} />
      </TokenomicsDetail>
    </TokenomicsContainer>
  )
}

export const TokenomicsContainer = styled.div`
display: flex;
justify-content: center;
grid-gap: 100px;
padding: 50px;
@media screen and (max-width: 1500px) {
  grid-gap: 30px;
  padding: 30px;
}
@media screen and (max-width: 1350px) {
  flex-direction: column;
  padding: 20px;
  grid-gap: 20px;
}
`;

export const TokenomicsDetail = styled.div`
display: flex;
flex-direction: column;
grid-gap: 20px;
width: 50%;
@media screen and (max-width: 1500px) {
  width: 100%;
}
`;

export const TokenomicsIcon = styled.div`
display: flex;
align-items: center;
grid-gap: 10px;
`;

export const TokenomicsCard = styled.div`
display: flex;
flex-direction: column;
grid-gap: 20px;
background: #EFF5FF;
box-shadow: 0px 4px 4px rgba(136, 136, 136, 0.25);
border-radius: 20px;
`;

export const CardHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background: ${({ Secondary }) => (Secondary ? "#FFFACC" : "#CCDFFF")};
box-shadow: ${({ Secondary }) => (Secondary ? "0px 7px 11px #FFF3B3" : "0px 7px 11px #B3CFFF")};
border-radius: 20px;
padding: 10px 20px;
@media screen and (max-width: 600px) {
  flex-direction: column;
  grid-gap: 20px;
}
`;

export const HeaderLeft = styled.div`
display: flex;
align-items: center;
grid-gap: 10px;
font-family: 'Inter-Regular';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 27px;
color: #73829C;
`;

export const HeaderIcons = styled.div`
display: flex;
grid-gap: 10px;
`;

export const HeaderHeading = styled.div`
font-family: 'Inter-Regular';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
color: ${({ Color }) => (Color ? "#D7942F" : "#3C80F1")};
`;

export const CardContent = styled.div`
display: flex;
justify-content: space-between;
grid-gap: 10px;
padding: 20px;
@media screen and (max-width: 700px) {
  flex-direction: column;
  padding: 10px;
}
`;

export const CardLeft = styled.div`
display: flex;
justify-content: space-between;
width: 50%;
@media screen and (max-width: 700px) {
  width: 100%;
}
`;

export const CardRight = styled.div`
display: flex;
justify-content: space-between;
grid-gap: 10px;
width: 40%;
@media screen and (max-width: 700px) {
  width: 100%;
}
`;
export const CardHeading = styled.div`


`;

export const ContentHeading = styled.div`
display: flex;
flex-direction: column;
align-items: center;
grid-gap: 10px;
`;

export const CardDivider = styled.div`
background: #C8DCFF;
width: 1px;
@media screen and (max-width: 700px) {
 display: none;
}
`;
export const BoneRates = styled.div`
display: flex;
justify-content: space-between;
 grid-gap: 15px;
align-items: center;
padding: 10px 0;
@media screen and (max-width: 700px) {
 flex-direction: column;
}
`;
export const RateField = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background: #FFFFFF;
border: 1px solid #F0F0F0;
box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
border-radius: 15px;
padding: 10px 20px;

input{
font-family: 'Inter-Regular';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 25px;
color: #7184A6;
outline: none;
border: none;
text-align: right;
background: none;
width: 50%;
}
@media screen and (max-width: 700px) {
 width: 100%;
}
`;
export const BoneRate = styled.div`
display: flex;
align-items: center;
grid-gap: 10px;
`;

export const BuyBoneButton = styled.div`
background: #FFFADD;
border: 1px solid #F0F0F0;
border-radius: 15px;
width: 206px;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
padding: 0 8px;
cursor: pointer;
`;
export const TokenomicsDetailHeader = styled.div`
display: flex;
justify-content: space-between;
@media screen and (max-width: 500px) {
  flex-wrap: wrap-reverse;
  grid-gap: 20px;
}
`;
export default Tokenomics