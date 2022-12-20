import styled from "styled-components";
import { BsToggle2Off, BsToggle2On } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  background: #2979ff;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 10px 20px;
  @media (max-width: 1020px) {
    flex-direction: column;
    justify-content: center;
    grid-gap: 10px;
  }
`;

export const SimpleNav = styled.div`
  display: flex;
  justify-content: space-between;
  background: #2979ff;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 10px 20px;
  @media (max-width: 1020px) {
    flex-direction: column;
    justify-content: center;
    grid-gap: 10px;
  }
`;

export const ToggleOff = styled(BsToggle2Off)`
  color: #fff;
  font-size: 35px;
  display: ${({ isToggle }) => (isToggle ? "none" : "block")};
`;

export const ToggleOn = styled(BsToggle2On)`
  color: #fff;
  font-size: 35px;
  display: ${({ isToggle }) => (isToggle ? "none" : "block")};
`;

export const NavLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-gap: 20px;

  @media (max-width: 1020px) {
    grid-gap: 15px;
  }
`;

export const NavLogo = styled.div`
  display: flex;
  grid-gap: 10px;
  align-items: ${({ simple }) => (simple ? "center" : "")};
  cursor: pointer;
  
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 33px;
letter-spacing: 0.035em;
color: #000000;
`;

export const NavIcons = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 23px;
  padding-left: 20px;
  @media (max-width: 600px) {
    top: 80px;
    right: 20px;
  }
  @media (max-width: 370px) {
    padding-left: 5px;
    grid-gap: 15px;
  }
`;
export const NavRightIcons = styled.div`
  display: flex;
  align-self: flex-end;
  grid-gap: 10px;
  @media (max-width: 600px) {
    position: absolute;
    top: -50px;
    right: 0px;
  }
`;

export const NavIcon = styled.div`
  cursor: pointer;
`;

export const NavCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 10px;
  img {
    cursor: pointer;
  }
`;

export const NavRight = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  @media (max-width: 1020px) {
    position: absolute;
    top: 10px;
    right: 20px;
  }
  @media (max-width: 600px) {
    top: 120px;
    right: 20px;
  }
`;

export const NavInfo = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  align-self: flex-end;
`;

export const TokenContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  grid-gap: 20px;
  position: absolute;
  top: 2px;
  right: 180px;

  @media (max-width: 1020px) {
    right: 215px;
  }
`;

export const Token = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 2px;
  font-family: 'Inter-Regular';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #FFFFFF;
  margin-right: 15px;
`;

export const NavLinks = styled(NavLink)`
  cursor: pointer;
  @media (max-width: 2100px) {
    width: ${({ simple }) => (simple ? "190px" : "160px")};
  }
  @media (max-width: 1800px) {
    width: ${({ simple }) => (simple ? "190px" : "150px")};
  }
  @media (max-width: 1800px) {
    width: ${({ simple }) => (simple ? "190px" : "135px")};
  }
  @media (max-width: 1600px) {
    width: ${({ simple }) => (simple ? "155px" : "120px")};
  }
  @media (max-width: 1500px) {
    width: ${({ simple }) => (simple ? "155px" : "105px")};
  }
  @media (max-width: 1400px) {
    width: ${({ simple }) => (simple ? "140px" : "90px")};
  }
  @media (max-width: 1200px) {
    width: ${({ simple }) => (simple ? "125px" : "75px")};
  }
  @media (max-width: 1100px) {
    width: ${({ simple }) => (simple ? "90px" : "65px")};
  }
  @media (max-width: 1020px) {
    width: ${({ simple }) => (simple ? "100px" : "120px")};
  }
  @media (max-width: 930px) {
    width: ${({ simple }) => (simple ? "100px" : "100px")};
  }
  @media (max-width: 800px) {
    width: ${({ simple }) => (simple ? "100px" : "90px")};
  }
  @media (max-width: 700px) {
    width: ${({ simple }) => (simple ? "100px" : "75px")};
  }
`;
export const Menu = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ open }) => (open ? "100vh" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
    position: absolute;
    top: ${({ simple }) => (simple ? "130px" : "65px")};
    right: 0;
    left: 0;
    background: ${(props) => props.theme.Nav};
    z-index: 1000;
  }

  img {
    cursor: pointer;
  }
`;
export const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 600px) {
    display: block;
    position: absolute;
    top: ${({ simple }) => (simple ? "90px" : "25px")};
    right: ${({ simple }) => (simple ? "0" : "20px")};
    left: ${({ simple }) => (simple ? "140px" : "")};
    z-index: 1;
    color: #fff;
    font-size: 25px;
  }
  @media (max-width: 370px) {
    right: ${({ simple }) => (simple ? "0" : "10px")};
  }
`;
export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;
export const CartItem = styled.div`
  display: flex;
  grid-gap: 20px;
  cursor: pointer;
  @media (max-width: 600px) {
    flex-direction: column;
    grid-gap: 45px;
  }
`;
export const WishItem = styled.div`
  display: flex;
  grid-gap: 20px;
  cursor: pointer;
  @media (max-width: 600px) {
    flex-direction: column;
    grid-gap: 45px;
  }
`;
export const ItemsCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 23px;
  background: #ADE5F7;
  border: 1px solid #FFFFFF;
  border-radius: 100px;
  color: #2196F3;
  font-family: "Ruddy-Bold";
  font-style: normal;
  font-weight: 900;
  font-size: 10px;
  line-height: 15px;
  position: absolute;
  top: 70px;
  margin-left: 15px;

  @media (max-width: 1020px) {
    top: 65px;
  }
`;

export const SearchFieldWithIcon = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #dcd4d4;
  border: 1px solid #e7eaf3;
  border-radius: 8px;
  width: 215px;
  img {
    cursor: pointer;
  }
  @media (max-width: 1020px) {
    margin-top: 70px;
  }
  @media (max-width: 600px) {
    margin-top: 110px;
  }
`;

export const SmartSearch = styled.div`
cursor: pointer;
`;
export const DogProfileData = styled.div`
align-self: flex-end;
`;