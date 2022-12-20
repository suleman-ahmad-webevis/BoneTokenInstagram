import React from "react";
import styled from "styled-components";
import Heading from "../../Heading/Heading";
import { Img } from "../../../GlobalStyles";
import {
  addToCart,
  decreaseCart,
  getTotals,
} from "../../../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import MinusSign from "../../../assets/images/ProductDetail/Minus.png";
import PlusSign from "../../../assets/images/ProductDetail/Plus.png";
import BankCard from "../../../assets/images/BankCard.png";
import BankCardNo from "../../../assets/images/BankCardNo.png";
import BinancePay from "../../../assets/images/BinancePay.png";
import Ethereum from "../../../assets/images/Ethereum.png";
import TetherERC from "../../../assets/images/TetherERC.png";
import TetherTRC from "../../../assets/images/TetherTRC.png";
import Info from "../../../assets/images/Info.png";
import RequiredCD from "../../../assets/images/RequiredCD.png";
import LocationIcon from "../../../assets/images/LocationIcon.png";
import PhoneInput from "react-phone-input-2";
import {
  CheckoutContainer,
  CheckoutItem,
  CheckoutProImg,
  CheckoutDesc,
  CheckoutQuantity,
  CheckoutCounter,
  CheckoutPrice,
  Price,
  CostContainer,
  Costs,
  PaymentContainer,
  PaymentMethods,
  SelectedMethodImg,
  CheckoutBtn,
  CheckoutDivider,
  CheckoutCard,
  DeleteIcon,
  RightForm,
  FormLabel,
  CombinedFields,
  FormInput,
  IconLabelWrapper,
  FormTextArea,
  SelectedMethods,
  SelectedMethod,
  AddressField,
} from "./CartListTable.Style";
import { useEffect } from "react";
import MemberCard from "../../Cards/MemberCard";

const CartListTable = () => {
  const navigate = useNavigate();
  const { cartTotalAmount, cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, []);

  return (
    <>
      {cartItems.length > 0 ? (
        <CheckoutContainer>
          <CheckoutCard>
            {cartItems.map((item) => (
              <CheckoutItem>
                <CheckoutProImg>
                  <Img src={item?.productImage} alt="" />
                </CheckoutProImg>
                <CheckoutDesc>
                  <Heading level={4}>{item?.description}</Heading>
                  <Heading level={3}>{item?.name}</Heading>
                </CheckoutDesc>
                <CheckoutQuantity>
                  <Heading level={4}>Quantity</Heading>
                  <Heading level={3}>{item?.cartQuantity}</Heading>
                </CheckoutQuantity>
                <CheckoutCounter>
                  <Img
                    onClick={() => {
                      dispatch(decreaseCart(item?._id));
                    }}
                    src={MinusSign}
                    alt="minus"
                  />
                  <input
                    type="text"
                    placeholder="1"
                    value={item?.cartQuantity}
                  />
                  <Img
                    onClick={() => {
                      dispatch(addToCart(item));
                    }}
                    src={PlusSign}
                    alt="plus"
                  />
                </CheckoutCounter>
                <CheckoutPrice>
                  <Heading level={4}>Price</Heading>
                  <Price>
                    <Heading level={4} Color>
                      €
                    </Heading>
                    <Heading level={4} Color>
                      {item?.retailPrice * item?.cartQuantity}
                    </Heading>
                  </Price>
                </CheckoutPrice>
                <DeleteIcon>X</DeleteIcon>
              </CheckoutItem>
            ))}
          </CheckoutCard>
          <CostContainer>
            <Costs>
              <Heading level={3}>Cost</Heading>
              <Heading level={3}>Delivery</Heading>
              <Price>
                <Heading level={3}>VAT</Heading>
                <Heading level={3} Opacity Size>
                  (18%)
                </Heading>
              </Price>
              <Heading level={3}>Total</Heading>
            </Costs>
            <Costs>
              <Heading level={3} Opacity>
                0 euros
              </Heading>
              <Heading level={3} Opacity>
                0 euro
              </Heading>
              <Heading level={3} Opacity>
                0 euro
              </Heading>
              <Heading level={3} Opacity>
                {`${cartTotalAmount} euro`}
              </Heading>
            </Costs>
          </CostContainer>
          <PaymentContainer>
            <RightForm>
              <FormLabel htmlFor="personalInfo">
                Personal information <Img src={RequiredCD} alt="required" />
              </FormLabel>
              <FormInput type="text" name="fname" value="John" />
              <FormLabel htmlFor="personalInfo">
                Address <Img src={RequiredCD} alt="required" />
              </FormLabel>
              <AddressField>
                <Img src={LocationIcon} alt="LocationIcon" />
                <input />
              </AddressField>
              <FormLabel htmlFor="email">
                Email address <Img src={RequiredCD} alt="required" />
              </FormLabel>
              <FormInput
                type="text"
                name="email"
                placeholder="Email address"
                Color
              />
              <IconLabelWrapper>
                <Img src={Info} alt="info" />
                <FormLabel htmlFor="special">
                  Any special requirements
                </FormLabel>
              </IconLabelWrapper>
              <FormTextArea
                name="specialRequirement"
                rows="8"
                cols="50"
                placeholder="...."
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
            <PaymentMethods>
              <SelectedMethod>
                <Img src={BankCardNo} alt="selectedMethod" />
              </SelectedMethod>
              <SelectedMethods>
                <Img src={BinancePay} alt="choseMethod" />
                <Img src={TetherERC} alt="choseMethod" />
                <Img src={Ethereum} alt="choseMethod" />
              </SelectedMethods>
              <MemberCard />
            </PaymentMethods>
            {/* <CheckoutBtn onClick={() => { if (cartItems.length > 0) { navigate('/customerDelivery') } }}>Checkout</CheckoutBtn> */}
          </PaymentContainer>
        </CheckoutContainer>
      ) : (
        <Heading level={2} style={{ padding: "2rem" }}>
          Cart is Empty,{" "}
          <Link
            style={{
              fontSize: "1.7rem",
              color: "#2979ff",
              textDecoration: "none",
            }}
            to="/"
          >
            Add products
          </Link>
        </Heading>
      )}
    </>
  );
};

//For favorites delete it later
export const ListItems = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;

export const TableStyle = styled.table`
  width: 100%;
  th {
    height: 48px;
    text-align: left;
    border-radius: 4px;
  }
  tbody tr {
    font-size: 14px;
    line-height: 20px;
    color: ${(props) => props.theme.ProductCategory};
  }
`;

export default CartListTable;
