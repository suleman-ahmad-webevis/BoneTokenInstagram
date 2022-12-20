import React from "react";
import PhoneInput from "react-phone-input-2";
import Heading from "../Heading/Heading";
import {
  CustomerDeliveryContainer,
  BackBtn,
  PersonalInfo,
  ProductDetail,
  RightForm,
  Form,
  FormInput,
  CombinedFields,
  FormTextArea,
  FormSection,
  FormLabel,
  AcceptBtn,
  UpdateBtn,
  IconLabelWrapper,
  LeftForm,
  CombinedField,
  BackIcon,
} from "./CustomerDelivery.Style";
import Info from "../../assets/images/Info.png";
import RequiredCD from "../../assets/images/RequiredCD.png";
import Back from "../../assets/images/Back.png";
import { Img } from "../../GlobalStyles";
import DeliverySlider from "./DeliverySlider";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CustomerDelivery = () => {

  const navgiate = useNavigate()

  const { cartTotalAmount, itemFromDeliverySlider, cartItems } = useSelector((state) => state.cart);

  return (
    <CustomerDeliveryContainer>
      <Heading level={10} Black>
        Customer details delivery order form
      </Heading>
      <BackBtn>
        <Heading level={10} Black>Back</Heading>
        <BackIcon onClick={() => navgiate(-1)} level={10} Black><Img src={Back} alt="BackIcon" /> </BackIcon>
      </BackBtn>
      <FormSection>
        <RightForm>
          <FormLabel htmlFor="personalInfo">Personal information</FormLabel>
          <CombinedFields>
            <FormInput type="text" name="fname" value="John" onChange={() => { }} />
            <FormInput type="text" name="lname" value="Doe" onChange={() => { }} />
          </CombinedFields>
          <FormInput type="text" name="location" Margin />
          <FormLabel htmlFor="email">Email address</FormLabel>
          <FormInput
            type="text"
            name="email"
            placeholder="Email address"
            Color
          />
          <IconLabelWrapper>
            <Img src={Info} alt="info" />
            <FormLabel htmlFor="special">Any special requirements </FormLabel>
            <Img
              src={RequiredCD}
              alt="required"
              style={{ alignSelf: "flex-start" }}
            />
          </IconLabelWrapper>
          <FormTextArea
            name="specialRequirement"
            rows="8"
            cols="50"
            placeholder="Text"
          ></FormTextArea>
          <FormLabel>Phone no</FormLabel>
          <PhoneInput
            international
            country="lt"
            countryCallingCodeEditable={true}
            limitMaxLength={true}
            placeholder="Phone number"
          />
          <FormLabel>VAT Number</FormLabel>
          <PhoneInput limitMaxLength={true} placeholder="Vat Number " />
        </RightForm>
        <ProductDetail>
          <DeliverySlider />
          <LeftForm>
            <CombinedFields>
              <CombinedField>
                <IconLabelWrapper>
                  <Img src={Info} alt="info" />
                  <FormLabel htmlFor="color">Color</FormLabel>
                </IconLabelWrapper>
                <FormInput
                  type="text"
                  name="color"
                  readOnly
                  value={itemFromDeliverySlider && Object.keys(itemFromDeliverySlider).length > 0 ? itemFromDeliverySlider?.colour : ''}
                  Margin
                  Gray
                />
              </CombinedField>
              <CombinedField>
                <IconLabelWrapper>
                  <Img src={Info} alt="info" />
                  <FormLabel htmlFor="size">Size</FormLabel>
                </IconLabelWrapper>
                <FormInput
                  type="text"
                  name="size"
                  value={itemFromDeliverySlider && Object.keys(itemFromDeliverySlider).length > 0 ? itemFromDeliverySlider?.size : ''}
                  readOnly
                  Margin
                  Gray
                />
              </CombinedField>
            </CombinedFields>
            <Form>
              <IconLabelWrapper>
                <Img src={Info} alt="info" />
                <FormLabel htmlFor="price">Retail Price ($)</FormLabel>
              </IconLabelWrapper>
              <FormInput readOnly type="text" name="price" value={itemFromDeliverySlider && Object.keys(itemFromDeliverySlider).length > 0 ? itemFromDeliverySlider?.retailPrice : ''} Margin Gray />
            </Form>
            <Form>
              <FormLabel htmlFor="pay">Total amount to pay ($)</FormLabel>
              <FormInput type="text" name="pay" value={cartTotalAmount} readOnly Margin Gray />
            </Form>
            <UpdateBtn>Update</UpdateBtn>
          </LeftForm>
        </ProductDetail>
      </FormSection>
      <AcceptBtn>Accept</AcceptBtn>
    </CustomerDeliveryContainer>
  );
};

export default CustomerDelivery;
