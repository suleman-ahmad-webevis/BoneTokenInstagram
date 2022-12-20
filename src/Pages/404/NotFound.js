import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import { Button } from "../../GlobalStyles";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundPageContainer>
      <NotFoundPageContent>
        <Heading level={8}>
          404
        </Heading>
        <Heading level={8}>OPPS! PAGE NOT FOUND</Heading>
        <Heading level={1} Color>
          Sorry, the page you're looking for doesn't exist.
        </Heading>
        <HomeLink onClick={() => navigate("/products")}>
          <Button>Return to Home</Button>
        </HomeLink>
      </NotFoundPageContent>
    </NotFoundPageContainer>
  );
};

export const NotFoundPageContainer = styled.div`
  background: #2196f3;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 700px) {
    padding: 20px;
  }
`;
export const NotFoundPageContent = styled.div`
  background: #fff;
  padding: 20px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  border-radius: 8px;
  text-align: center;

  @media screen and (max-width: 700px) {
    padding: 20px;
  }
`;

export const HomeLink = styled.div`
  text-decoration: none;
`;

export default NotFound;
