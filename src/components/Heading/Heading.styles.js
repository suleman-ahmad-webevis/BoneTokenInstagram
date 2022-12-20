import styled from "styled-components/macro";

export const H1 = styled.h1`
font-family: 'Inter-Regular';
font-style: normal;
font-weight: 700;
font-size: ${({ Big }) => (Big ? "34px": "20px" )};
line-height: ${({ Big }) => (Big ?  "38px": "24px")};
color: ${({ Big }) => (Big ? "#294487" : "#2979FF")};
`;

export const H2 = styled.h1`
font-family: 'Inter-Regular';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
color: ${({ Secondary }) => (Secondary ? " #92A7CB" : "#7184A6")};
text-align: ${({ Secondary }) => (Secondary ? "right" : "left")};
`;

export const H3 = styled.h2`
font-weight: 700;
font-size: ${({ Size }) => (Size ? "12px" : "16px")};
line-height: 19px;
color: ${({ Color }) => (Color ? "#fff" : "#000")};
opacity: ${({ Opacity }) => (Opacity ? "0.4" : "1")};;
`;

export const H4 = styled.h4`
  color: ${({ Color }) => (Color ? "#3857FF" : "#98A4AF")};
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;

export const H5 = styled.h5`
font-family: 'Inter-Regular';
font-style: normal;
font-weight: 700;
font-size: "16px";
line-height: "19px";
color: ${({ Color }) => Color ? '#2196F3;' : '#7184A6'};
`;

export const H6 = styled.h6`
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #000000;

`;

export const H7 = styled.h6`
font-family: 'Inter-Regular';
font-weight: 700;
font-size: ${({ small }) => (small ? "12px" : "16px")};
line-height: ${({ small }) => (small ? "15px" : "19px")};
color: #2196F3;
`;

//ForNewFooter
export const H8 = styled.h1`
  color: ${({ Color }) => (Color ? "#fff" : "#F8A529")};
  font-size: ${({ FontSmall }) => (FontSmall ? "36px" : "55px")};
  line-height: ${({ FontSmall }) => (FontSmall ? "44px" : "67px")};
  @media screen and (max-width: 1660px) {
    font-size: ${({ FontSmall }) => (FontSmall ? "25px" : "45px")};
    line-height: ${({ FontSmall }) => (FontSmall ? "30px" : "50px")};
  }
  @media screen and (max-width: 1200px) {
    font-size: ${({ FontSmall }) => (FontSmall ? "23px" : "35px")};
    line-height: ${({ FontSmall }) => (FontSmall ? "30px" : "45px")};
  }
  @media screen and (max-width: 900px) {
    font-size: ${({ FontSmall }) => (FontSmall ? "20px" : "25px")};
    line-height: ${({ FontSmall }) => (FontSmall ? "25px" : "35px")};
  }
`;

//Props
export const H9 = styled.h1`
font-family: 'Inter-Regular';
font-style: normal;
font-weight: 700;
font-size: ${({ Big }) => Big ? '24px' : '20px'};
line-height: ${({ Big }) => Big ? '28px' : '24px'};
color: ${({ Color }) => Color ? '#647DBC' : '#2979FF'};
`;


export const H10 = styled.h1`
font-family: 'Inter-Regular';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;
color: ${({ Color }) => Color ? '#DA9D02' : '#9E9E9E'};
`;
