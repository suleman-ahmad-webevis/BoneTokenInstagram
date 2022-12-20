import React from "react";
import styled from "styled-components";
import Topbar from "../../components/MyDogs/Topbar";
import MyDogForm from "../../components/MyDogs/MyDogForm";

const MyDogs = () => {
  return (
    <MyDogsContainer>
      <Topbar />
      <MyDogForm />
    </MyDogsContainer>
  );
};

export const MyDogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
  padding: 20px 10px;
`;

export default MyDogs;
