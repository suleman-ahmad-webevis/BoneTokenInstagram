import React from 'react'
import styled from 'styled-components'
import { Img } from '../../GlobalStyles';
import DatePickerField from '../DatePicker/DatePicker';
import eye from '../../assets/images/eye.png'

const MemberCard = () => {
  return (
    <MemberCardContainer>
        <MemberCards>
            <CardOne>
                <CardLabel>CARD NUMBER</CardLabel>
                <CardInput type="text" />
                <CardLabel Align>EXPIRY DATE</CardLabel>
                <CombinedCardField>
                  <DatePickerField />
                  <DatePickerField />
                </CombinedCardField>
                <CardLabel>NAME</CardLabel>
                <CardInput type="text"  Padding/>
            </CardOne>
            <CardTwo>
              <CombinedCardField>
                <CardLabel>CVV</CardLabel>
                <DateField>
                  <input type="text" />
                  <Img src={eye} alt="eye" />
                </DateField>
              </CombinedCardField>
            </CardTwo>
        </MemberCards>
        <PayButton>PAY</PayButton>
    </MemberCardContainer>
  )
}

export const MemberCardContainer = styled.div`
display: flex;
flex-direction: column;
grid-gap: 110px;
`;

export const MemberCards = styled.div`
display: flex;
flex-direction: column;
grid-gap: 20px;
position: relative;
`;

export const CardOne = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
background: #FFFFFF;
box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
border-radius: 8px;
grid-gap: 10px;
width: 90%;
z-index: 1;
`;

export const CardTwo = styled.div`
display: flex;
justify-content: flex-end;
align-items: flex-end;
background: #FFFFFF;
box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
border-radius: 8px;
padding: 20px;
position: absolute;
top: 60px;
right: 0;
left: 50px;
bottom: -90px;
`;

export const PayButton = styled.div`
background: #53B72F;
border-radius: 8px;
width: 223px;
height: 42px;
display: flex;
align-items: center;
justify-content: center;
align-self: flex-end;
cursor: pointer;

font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 26px;
letter-spacing: 0.035em;
color: #FFFFFF;
`;

export const CardLabel = styled.div`
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 26px;
letter-spacing: 0.035em;
color: #656B86;
align-self: ${({Align}) => Align ? "flex-end" : ""};
`;

export const CardInput = styled.input`
background: #E8E8E8;
box-shadow: 0px 4px 4px rgba(125, 125, 125, 0.25);
border-radius: 8px;
border: none;
outline: none;
padding: ${({Padding}) => Padding ? "12px" : "16px"};
`;

export const CombinedCardField = styled.div`
display: flex;
align-items: center;
grid-gap: 10px;
align-self: flex-end;
`;

export const DateField = styled.div`
display: flex;
align-items: center;
grid-gap: 5px;
background: #E8E8E8;
box-shadow: 0px 4px 4px rgba(125, 125, 125, 0.25);
border-radius: 8px;
padding: 14px;

input{
    width: 70px;
    border: none;
    outline: none;
    background: none;
}
`;
export default MemberCard