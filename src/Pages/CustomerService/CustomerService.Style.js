import styled from "styled-components";

export const CSPage = styled("div")`
  padding: 20px;
`;

export const CSLine = styled("div")`
  border-bottom: 2px solid #2979ff;
  width: 44%;
  margin-top: 10px;
  margin-bottom: 40px;
  
  @media (max-width: 760px) {
  width: 50%;
  margin-top: 10px;
  margin-bottom: 20px;
  }
`;

export const CSContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  grid-gap: 40px;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const CSRight = styled("div")`
display: flex;
flex-direction: column;
grid-gap: 25px;
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const CSLeft = styled("div")`
  display: flex;
  flex-direction: column;
  grid-gap: 30px;
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const CSBoxes = styled("div")`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
`;

export const CSBox = styled("div")`
  border: 1px solid #90caf9;
  border-radius: 8px;
  word-wrap: break-word;
  background-color: #f4faff;
  padding: 15px;
  min-height: 185px;
`;

export const CSPolicy = styled("div")`
  display: flex;
  align-items: center;
  grid-gap: 20px;
  @media (max-width: 400px) {
    grid-gap: 8px;
  }
`;

export const OrderUpdateSection = styled("div")`
  display: flex;
  align-items: flex-end;
  grid-gap: 30px;
  img {margin-bottom: 20px;}
  @media (max-width: 1100px) {
    grid-gap: 10px;
  }
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: flex-start;
    grid-gap: 20px;
  }
`;

export const OrderUpdateInputs = styled("div")`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
  width: 50%;
  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const UpdateButton = styled.div`
  display: flex;
  grid-gap: 30px;
  width: 70%;

`;

export const ShippingSection = styled("div")`
  display: flex;
  grid-gap: 30px;
  padding: 10px 0;
  @media (max-width: 760px) {
    flex-direction: column;
    grid-gap: 0;
  }
`;

export const ShippingRight = styled("div")`
  width: 50%;
  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const ShippingLeft = styled("div")`
  width: 50%;
  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const CountryFlags = styled.div`
  display: flex;
  grid-gap: 10px;
`;

export const Flag = styled.div`
  background: #f4faff;
  border: 1px solid #90caf9;
  border-radius: 8px;
  padding: 16px;
  color: #2196f3;
  font-weight: 700;
  outline: none;
  margin-bottom: 10px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:focus {
    border: 1px solid #2196f3;
  }
  .fi{
    font-size: 20px;
  }
`;

export const Input = styled("input")`
  background: #f4faff;
  border: 1px solid #90caf9;
  border-radius: 8px;
  padding: 16px;
  font-family: 'Inter-Regular';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #2196F3;
  outline: none;
  margin-bottom: 10px;
  width: 100%;
  &:focus {
    border: 1px solid #2196f3;
  }
`;

export const ShippingCostContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
`;

export const UpdateBtn = styled.div`
background: #2196F3;
border: 1px solid rgba(130, 151, 255, 0.5);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 8px;

font-family: 'Inter-Regular';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color: #FFFFFF;
width: 228px;
cursor: pointer;
`;