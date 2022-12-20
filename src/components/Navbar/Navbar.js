import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavBone from "../../assets/images/NavBone.png";
import Nav2earn from "../../assets/images/Nav/Nav2earn.png";
import NavMyDogs from "../../assets/images/Nav/NavMyDogs.png";
import NavProducts from "../../assets/images/Nav/NavProducts.png";
import NavFaq from "../../assets/images/Nav/NavFaq.png";
import NavService from "../../assets/images/Nav/NavService.png";
import NavBuyBone from "../../assets/images/Nav/NavBuyBone.png";
import NavTokenomics from "../../assets/images/Nav/NavTokenomics.png";
import DogImage from "../../assets/images/DogImage.png";
import {
  NavLeft,
  Menu,
  NavRight,
  NavLogo,
  NavIcons,
  NavIcon,
  ToggleOff,
  ToggleOn,
  NavInfo,
  NavLinks,
  Hamburger,
  SimpleNav,
} from "./NewNavbar.Styles";
import { Img } from "../../GlobalStyles";
import Heading from "../Heading/Heading";
import DogProfile from "../../assets/images/DogProfile.png";
import EnglishFlag from "../../assets/images/EnglishFlag.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from "../../redux/product/productSlice";

const Navbar = ({ theme, setTheme }) => {
  const [isToggle, setIsToggle] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <SimpleNav simple>
      <Hamburger onClick={() => setOpen(!open)} simple={+true}>
        {open ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <NavLeft>
        <NavLogo
          simple={+true}
          onClick={() => {
            navigate("/");
          }}
        >
          <Img src={NavBone} alt="logo" />
          BoNeToken.com
        </NavLogo>
        <NavIcons>
          <NavIcon>
            <Img src={EnglishFlag} alt="flag" />
          </NavIcon>
          <NavIcon
            onClick={() => {
              setIsToggle(!isToggle);
              setTheme(!theme);
            }}
          >
            {isToggle ? <ToggleOn /> : <ToggleOff />}
          </NavIcon>
        </NavIcons>
      </NavLeft>
      <Menu open={open} simple={+true}>
        <NavLinks simple={+true} to="/products">
          <Img
            src={NavProducts}
            alt="navitem"
            onClick={() => {
              navigate("/products");
              dispatch(reset());
            }}
          />
        </NavLinks>
        <NavLinks simple={+true} to="/faq">
          <Img src={NavFaq} alt="navitem" />
        </NavLinks>
        <NavLinks simple={+true} to="/customerservice">
          <Img src={NavService} alt="navitem" />
        </NavLinks>
        <NavLinks simple={+true} to="/notfound">
          <Img src={NavBuyBone} alt="navitem" />
        </NavLinks>
        <NavLinks simple={+true} to="/mydogs">
          <Img src={NavMyDogs} alt="navitem" />
        </NavLinks>
        <NavLinks simple={+true} to="/toearn">
          <Img src={Nav2earn} alt="navitem" />
        </NavLinks>
      </Menu>
      <NavRight simple={+true}>
        <NavInfo>
          <Img src={DogImage} alt="dog" />
          <Heading level={3} to="#">
            35bb21.....3n123
          </Heading>
        </NavInfo>
        <Img src={DogProfile} alt="dogchat" />
      </NavRight>
    </SimpleNav>
  );
};

export default Navbar;
