import React, { useState } from "react";
import styled from "styled-components";
import { Button, Img } from "../../GlobalStyles";
import Heading from "../Heading/Heading";
import BreedSelector from "../Selectors/BreedSelector";
import GenderButton from "./GenderButtons";
import SeasonsButton from "./SeasonsButton";
import { useDispatch } from "react-redux";
import {
  getTheProducts,
  reset,
  setSmartSearch,
} from "../../redux/product/productSlice";
import DogAgeButton from "./DogAge";
import SmartSearchIcon from "../../assets/images/SmartSearchIcon.png";
import ColorSelector from "../Selectors/ColorSelector";
import { breedsOptions, dogFCIOptions } from "../Selectors/SSearchOptions";

const ModalContent = ({ setActive }) => {
  const dispatch = useDispatch();
  const [gender, setGender] = useState("");
  const [coatColor, setCoatColor] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [dogGroupFCI, setDogGroupFCI] = useState("");
  const [season, setSeason] = useState("");

  const smartSearchHandler = () => {
    const obj = {
      gender,
      coatColor,
      age,
      breed,
      dogGroupFCI,
      season,
    };
    dispatch(reset());
    dispatch(
      setSmartSearch([gender, coatColor, age, breed, dogGroupFCI, season])
    );
    dispatch(getTheProducts(obj));
    setActive(false);
  };

  return (
    <ModalContentContainer>
      <ModalField>
        <ModalDataField>
          <Heading Color level={5}>Gender</Heading>
          <ModalIcons>
            <GenderButton gender={gender} setGender={setGender} />
          </ModalIcons>
        </ModalDataField>
        <ModalDataField>
          <Heading Color level={5}>Coat Colour</Heading>
          <ModalIcons>
            <ColorSelector setColor={setCoatColor} color={coatColor} />
          </ModalIcons>
        </ModalDataField>
      </ModalField>
      <ModalDataField>
        <Heading Color level={5}>Age</Heading>
        <ModalIcons>
          <DogAgeButton dogAge={age} setDogAge={setAge} />
        </ModalIcons>
      </ModalDataField>
      <ModalDataField>
        <Heading Color level={5}>Breed</Heading>
        <BreedSelector options={breedsOptions} setOptions={setBreed} />
      </ModalDataField>
      <ModalDataField>
        <Heading Color level={5}>DogGroup FCI</Heading>
        <BreedSelector options={dogFCIOptions} setOptions={setDogGroupFCI} />
      </ModalDataField>
      <Heading Color level={5}>Season</Heading>
      <ModalField>
        <SeasonsButton season={season} setSeason={setSeason} />
      </ModalField>
      <Button onClick={smartSearchHandler}>
        <ModalIcons Weight>
          Smart Search
          <Img src={SmartSearchIcon} alt="SSIcon" />
        </ModalIcons>
      </Button>
    </ModalContentContainer>
  );
};

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  grid-gap: 1rem 0rem;
`;
export const ModalField = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
`;

export const ModalDataField = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 8px;
  width: 100%;
`;
export const ModalIcons = styled.div`
  display: flex;
  grid-gap: 5px;
  font-weight: ${({ Weight }) => Weight ? '700' : ""};
`;

export const ModalIcon = styled.div`
  background: #ffffff;
  border: 1px solid rgba(144, 202, 249, 0.5);
  border-radius: 8px;
  display: flex;
  grid-gap: 5px;
  align-items: center;
  padding: ${({ Padding }) => (Padding ? "10px 16px" : "10px 20px")};
`;
export default ModalContent;
