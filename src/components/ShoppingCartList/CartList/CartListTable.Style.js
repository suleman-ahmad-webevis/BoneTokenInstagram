import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 40px;
  padding: 20px;
  width: 90%;

  @media screen and (max-width: 1200px) {width: 100%;}
`;
export const CheckoutCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  padding: 20px;

  @media screen and (max-width: 1200px) {width: 100%;}
  @media screen and (max-width: 800px) { grid-template-columns: 1fr 1fr; padding: 0;}
  @media screen and (max-width: 600px) { grid-template-columns: 1fr;}
`;
export const CheckoutItems = styled.div``;

export const CheckoutItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #e7eaf3;
  border-radius: 8px;
  position: relative;
  padding: 0 50px 0 10px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    grid-gap: 20px;
    align-items: center;
    padding: 10px;
    }
`;

export const CheckoutProImg = styled.div`
  display: flex;
  align-items: center;
  border-right: 2px solid #e7eaf3;
  border-radius: 8px;
  height: 190px;
  img{
    height: 10rem;
  }
`;

export const CheckoutDesc = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  grid-gap: 20px;
  @media screen and (max-width: 800px) {text-align: left; grid-gap: 10px;}
`;

export const CheckoutQuantity = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  @media screen and (max-width: 800px) {grid-gap: 10px; align-items: center;}
`;


export const CheckoutCounter = styled.div`
  display: flex;
  grid-gap: 20px;
  border-radius: 5px;
  padding: 12px;
  margin-top: 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);  

  img{
    width: 16px;
    height: 16px;
  }
  input {
    outline: none;
    background: none;
    border: none;
    box-shadow: none;
    border-radius: none;
    text-align: center;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    ::placeholder {
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
    }
  }
  
  @media screen and (max-width: 1200px) {input{width: 100px;}}
  @media screen and (max-width: 890px) {grid-gap: 10px; input{width: 40px;}}
  @media screen and (max-width: 800px) {grid-gap: 10px; margin-top: 0; input{width: 100%;}}
`;

export const CheckoutPrice = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  @media screen and (max-width: 800px) {flex-direction: row;}
`;

export const Price = styled.div`
  display: flex;
  /* hello */
  grid-gap: 5px;
`;

export const CostContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-gap: 60px;
`;

export const Costs = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;

export const PaymentContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-gap: 30px;
  @media (max-width: 1100px) {flex-direction: column; margin-top: 10px;}
`;

export const PaymentMethods = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-gap: 50px;
`;

export const SelectedMethod = styled.div``;
export const SelectedMethods = styled.div`
display: flex;
grid-gap: 20px;
  @media (max-width: 600px) {flex-wrap: wrap;}
`;

export const CheckoutBtn = styled.button`
  align-self: flex-end;
  padding: 17px 80px;
  background: #2979ff;
  border-radius: 12px;
  color: #fff;
  border: none;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 27px;
  letter-spacing: 0.035em;
  color: #FFFFFF;
  cursor: pointer;
  
  &:hover{
    background: #000000;
  }
`;


export const DeleteIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 19px;
  background: #2B2B2B;
  border-radius: 5px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const CheckoutDivider = styled.hr``;

export const CustomerDeliveryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-gap: 10px;
  padding: 20px;
`;

export const BackBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  grid-gap: 18px;
  cursor: pointer;
`;

export const BackIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border: 1px solid black;
  border-radius: 360px;
`;

export const PersonalInfo = styled.div`
  width: 50%;
  @media (max-width: 920px) {width: 100%;}
`;

export const RightForm = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 14px;
  background: #FFFFFF;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 50px;
  width: 50%;
  height: 100%;
  margin-top: -120px;

  .react-tel-input .form-control {width: 100%;}
  .react-tel-input .selected-flag .arrow {display: none;}
  .react-tel-input .selected-flag{box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.1);}

  @media (max-width: 1100px) {width: 100%;}
  @media (max-width: 600px) {padding: 20px;}
`;
export const LeftForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  grid-gap: 14px;
  background: #FFFFFF;
  border-radius: 15px;
  padding: 50px;
  @media (max-width: 600px) {padding: 20px;}
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 14px;
`;

export const CombinedField = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 14px;
  width: 100%;
`;
export const FormLabel = styled.label`
  font-family: "DM Sans";
  font-weight: 600;
  font-size: 12px;
`;

export const FormInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 12px;
  width: 100%;
  margin-bottom: ${({ Margin }) => (Margin ? "25px" : "0px")};
  background: ${({ Gray }) => (Gray ? "#F5F5F5" : "#fff")};
  outline: none;

  ::placeholder{
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: ${({ Color }) => (Color ? "rgba(0, 0, 0, 0.4)" : "#000000")};
  }
`;

export const AddressField = styled.div`
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.1);
box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
border-radius: 5px;
padding: 14px 16px;
display: flex;
align-items: center;
grid-gap: 15px;

input{
  width: 100%;
  border: none;
  outline: none;
}
`;

export const CombinedFields = styled.div`
  display: flex;
  grid-gap: 10px;
`;

export const FormTextArea = styled.textarea`
  border: 1px solid rgba(0, 0, 0, 0.1);
  resize: none;
  outline: none;
  border-radius: 5px;
  padding: 20px;
`;

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
  width: 50%;
  @media (max-width: 920px) {width: 100%;}
`;

export const FormSection = styled.div`
  display: flex;
  grid-gap: 20px;
  justify-content: space-between;
  align-items: baseline;
  @media (max-width: 920px) {flex-direction: column;}
`;

export const AcceptBtn = styled.button`
 background: #2979FF;
 border-radius: 15px;
  padding: 20px 10px;
  border: none;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 27px;
  letter-spacing: 0.035em;
  color: #FFFFFF;
  cursor: pointer;
  &:hover{
    background: #000000;
  }
`;

export const UpdateBtn = styled.button`
  background: #2B2B2B;
  border-radius: 5px;
  padding: 16px;
  cursor: pointer;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.035em;
  color: #FFFFFF;
  &:hover{
    background: #000000;
  }
`;

export const IconLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 8px;
`;
