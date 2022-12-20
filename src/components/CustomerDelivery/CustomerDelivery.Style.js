import styled from "styled-components";

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
  justify-content: center;
  flex-direction: column;
  grid-gap: 14px;
  background: #FFFFFF;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 50px;
  width: 50%;

  .react-tel-input .form-control {width: 100%;}
  .react-tel-input .selected-flag .arrow {display: none;}
  .react-tel-input .selected-flag{box-shadow: 1px 0px 0px rgba(0, 0, 0, 0.1);}

  @media (max-width: 920px) {width: 100%;}
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
