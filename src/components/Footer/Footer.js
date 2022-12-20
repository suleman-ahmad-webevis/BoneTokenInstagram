import styled from "styled-components"
import Heading from "../Heading/Heading";
import React from "react";

const Footer = () => {
  return (
    <FooterContainer>
        <FooterMenu>
            <FooterLink>
                <Heading level={3} to="#">About</Heading>
                <FooterSubLinks>
                    <Heading level={5} Color>Disclaimer</Heading>
                    <Heading level={5} Color>Privacy</Heading>
                    <Heading level={5} Color>Terms and Conditions</Heading>
                </FooterSubLinks>
            </FooterLink>
            <FooterLink>
                <Heading level={3} to="#">Customer service</Heading>
                <FooterSubLinks>
                    <Heading level={5} Color>Returns</Heading>
                    <Heading level={5} Color>Changing order</Heading>
                </FooterSubLinks>
            </FooterLink>
            <FooterLink>
                <Heading level={3} to="#">Shipping</Heading>
                <FooterSubLinks>
                    <Heading level={5} Color>Shipping costs</Heading>
                    <Heading level={5} Color>Delivery times</Heading>
                </FooterSubLinks>
            </FooterLink>
        </FooterMenu>
            <FooterLink>
                <Heading level={3} to="#">Contact</Heading>
                <FooterSubLinks>
                    <Heading level={5} Color>Info@BoneToken.com</Heading>
                    <Heading level={5} Color>Telephone</Heading>
                </FooterSubLinks>
            </FooterLink>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
display: flex;
justify-content: space-between;
background: ${props => props.theme.Nav};
box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
padding: 30px;
flex-wrap: wrap;
grid-gap: 30px;
`;
const FooterMenu = styled.div`
display: flex;
grid-gap: 30px;
flex-wrap: wrap;
`;
const FooterLink = styled.div`
display: flex;
flex-direction: column;
grid-gap: 30px;
cursor: pointer;
`;
const FooterSubLinks = styled.div`
display: flex;
flex-direction: column;
`;

export default Footer