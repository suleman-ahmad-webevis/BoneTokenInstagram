import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ProductHeaderText from "../../assets/images/ProductHeader/HeaderLogoText.png";
import ProductHeaderBone from "../../assets/images/ProductHeader/HeaderLogo.png";
import Heart from "../../assets/images/ProductHeader/Heart.png";
import Cart from "../../assets/images/ProductHeader/Cart.png";
import SearchIcon from "../../assets/images/ProductHeader/SearchIcon.png";
import Smart from "../../assets/images/ProductHeader/Smart.png";
import Nav2earn from "../../assets/images/Nav/Nav2earn.png";
import NavMyDogs from "../../assets/images/Nav/NavMyDogs.png";
import NavProducts from "../../assets/images/Nav/NavProducts.png";
import NavTokenomics from "../../assets/images/Nav/NavTokenomics.png";
import NavFaq from "../../assets/images/Nav/NavFaq.png";
import NavService from "../../assets/images/Nav/NavService.png";
import NavBuyBone from "../../assets/images/Nav/NavBuyBone.png";
import NavFci from "../../assets/images/Nav/NavFci.png";
import NavDogShows from "../../assets/images/Nav/NavDogShows.png";
import DogData from "../../assets/images/Nav/DogData.png";
import DogImage from "../../assets/images/DogImage.png";
import ProductSlider from "../Sliders/ProductSlider";
import {
  Nav,
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
  HeaderLeft,
  Hamburger,
  CartItem,
  ItemsCounter,
  SearchFieldWithIcon,
  SmartSearch,
  NavCenter,
  Token,
  WishItem,
  DogProfileData,
  NavRightIcons,
  TokenContent,
} from "./NewNavbar.Styles";
import { Img, Input } from "../../GlobalStyles";
import Heading from "../Heading/Heading";
import DogProfile from "../../assets/images/ProductHeader/DogProfile.png";
import Facebook from "../../assets/images/ProductHeader/Facebook.png";
import Instagram from "../../assets/images/ProductHeader/Instagram.png";
import TokenBone from "../../assets/images/Token.png";
import EnglishFlag from "../../assets/images/EnglishFlag.png";
import Modal from "../modal/modal";
import ModalContent from "../modal/ModalContent";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";
import { getTheProducts, reset } from "../../redux/product/productSlice";
import { getTotalsFavourites } from "../../redux/favouritesList/favouritesListSlice";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const NewNavbar = ({ theme, setTheme }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const { favouritesTotalQuantity } = useSelector((state) => state.favourites);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const category = searchParams.get("category");
  const [isToggle, setIsToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    dispatch(getTotalsFavourites());
  }, [dispatch]);

  const handleChange = debounce((search) => {
    let obj = {
      search,
      category,
    };
    dispatch(getTheProducts(obj));
    dispatch(reset());
  }, 1000);

  return (
    <Nav>
      <Hamburger onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <HeaderLeft>
        <CartItem>
          <NavLeft>
            <NavLogo
              onClick={() => {
                navigate("/");
              }}
            >
              <Img src={ProductHeaderText} alt="BoneToken" />
              <Img src={ProductHeaderBone} alt="Bone" />
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
              <WishItem onClick={() => navigate("/favourites")}>
                <ItemsCounter>{favouritesTotalQuantity}</ItemsCounter>
                <Img src={Heart} alt="favourites" />
              </WishItem>
              <CartItem onClick={() => navigate("/checkout")}>
                <ItemsCounter>{cartTotalQuantity}</ItemsCounter>
                <Img src={Cart} alt="cart" />
              </CartItem>
            </NavIcons>
          </NavLeft>
        </CartItem>
        <SearchFieldWithIcon>
          <Input
            type="text"
            placeholder="Product Search..."
            onChange={(e) => handleChange(e.target.value)}
          />
          <Img src={SearchIcon} alt="searchicon" />
        </SearchFieldWithIcon>
        <SmartSearch onClick={() => setActive(true)}>
          <Img src={Smart} alt="Smart" />
        </SmartSearch>
        <Modal active={active} hideModal={() => setActive(false)}>
          <ModalContent setActive={setActive} />
        </Modal>
      </HeaderLeft>
      <NavCenter>
        <ProductSlider />
        <Menu open={open}>
          <NavLinks to="/products">
            <Img src={NavProducts} alt="navitem" />
          </NavLinks>
          <NavLinks to="/customerservice">
            <Img src={NavService} alt="navitem" />
          </NavLinks>
          <NavLinks to="/mydogs">
            <Img src={NavMyDogs} alt="navitem" />
          </NavLinks>
          <NavLinks to="/notdound">
            <Img src={NavBuyBone} alt="navitem" />
          </NavLinks>
          <NavLinks to="/faq">
            <Img src={NavFaq} alt="navitem" />
          </NavLinks>
          <NavLinks to="/toearn">
            <Img src={Nav2earn} alt="navitem" />
          </NavLinks>
          <NavLinks to="/tokenomics">
            <Img src={NavTokenomics} alt="navitem" />
          </NavLinks>
          <NavLinks to="/fci">
            <Img src={NavFci} alt="navitem" />
          </NavLinks>
          <NavLinks to="/dogshows">
            <Img src={NavDogShows} alt="navitem" />
          </NavLinks>
        </Menu>
      </NavCenter>
      <NavRight>
        <TokenContent>
          <Token>
            <Img src={TokenBone} alt="Token" />
              18281
          </Token>
          <Img src={DogData} alt="DogData" />
        </TokenContent>
        <NavInfo>
          <Img src={DogImage} alt="dog" />
          <Heading level={3} Color to="#">
            35bb21.....3n123
          </Heading>
        </NavInfo>
        <DogProfileData>
          <Img src={DogProfile} alt="dogchat" />
        </DogProfileData>
        <NavRightIcons>
          <NavIcon>
            <Img src={Facebook} alt="Facebook" />
          </NavIcon>
          <NavIcon>
            <Img src={Instagram} alt="Instagram" />
          </NavIcon>
        </NavRightIcons>
      </NavRight>
    </Nav>
  );
};

export default NewNavbar;
