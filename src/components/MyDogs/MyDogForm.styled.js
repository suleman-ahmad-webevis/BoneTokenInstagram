import styled from "styled-components";
import { Button } from "../../GlobalStyles";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  padding: ${({ Padding }) => (Padding ? "16px" : "20px")};
  width: 100%;
`;
export const FormFields = styled.div`
  display: flex;
  grid-gap: 40px;
  margin-top: 50px;

  @media screen and (max-width: 1220px) {
    flex-wrap: wrap-reverse;
  }
`;
export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  width: ${({ Width }) => (Width ? "100%" : "370px;")};
  @media screen and (max-width: 1600px) {
    width: 100%;
  }
`;
export const FormRow = styled.div`
  display: flex;
  grid-gap: 30px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 100%;
  }
`;
export const FormLabel = styled.label`
  font-family: 'Inter-Regular';
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #98A4AF;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  background: none;
  border: ${({ inputErrors }) =>
    inputErrors ? "1px solid red" : "1px solid rgba(144, 202, 249, 0.5)"};
  border-radius: 8px;
  padding: ${({ Padding }) => (Padding ? "16px 6px" : "16px")};
  outline: none;
  color: #2196f3;
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  ::placeholder {
    color: rgba(144, 202, 249, 0.5);;
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
  }

  @media screen and (max-width: 820px) {
    padding: 16px;
  }
`;
export const SelectField = styled.div`
  select {
    background: none;
    border: 1px solid rgba(144, 202, 249, 0.5);
    border-radius: 8px;
    padding: ${({ Padding }) => (Padding ? "16px 6px" : "16px")};
    outline: none;
    color: #2196f3;
    font-size: 16px;
    line-height: 24px;
    font-family: Ruddy-Bold;
    width: 100%;
  }
`;
export const InfoField = styled.div`
  background: none;
  border: 1px solid rgba(144, 202, 249, 0.5);
  border-radius: 8px;
  padding: ${({ Padding }) => (Padding ? "16px 6px" : "16px")};
  outline: none;
  color: #2196f3;
  font-size: 16px;
  line-height: 24px;
  font-family: Ruddy-Bold;
  width: 100%;
`;
export const Divider = styled.div`
  border: 1px solid #2979ff;
  margin-bottom: 40px;
  width: ${({ Width }) => (Width ? "70%" : "30%")};
`;
export const FormButton = styled(Button)`
  align-self: ${({ Align }) => (Align ? "center" : "flex-end")};
  padding: 16px 30px;
  margin-top: ${({ NoMargin }) => (NoMargin ? "0" : "30px")};
`;
export const CombinedFieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CombinedFields = styled.div`
  align-items: center;
  grid-gap: 15px;
  display: flex;
  border-radius: 8px;
  border: ${({ inputErrors }) => (inputErrors ? "1px solid red" : "")};
`;

export const ErrorsInput = styled.input`
  border: ${({ inputErrors }) =>
    inputErrors ? "1px solid red" : ""} !important;
`;

export const CombinedField = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 12px;
  input {
    width: 46px;
    height: 40px;
    border: 1px solid #90caf9;
    outline: none;
    border-radius: 8px;
    box-shadow: none;
    text-align: center;
    color: #2196f3;

    ::placeholder {
      color: rgba(144, 202, 249, 0.5);
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
    }
    /* -moz-opacity: .4;
    -webkit-opacity: .4;
    opacity: .4; */
  }
`;

export const GenderField = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 12px;
  input {
    width: 46px;
    height: 40px;
    border: ${({ inputErrors }) =>
      inputErrors ? "1px solid red" : "1px solid #90caf9"};
    border-radius: 8px;
    outline: none;
    box-shadow: none;
    appearance: none;
    text-align: center;
    color: #2196f3;

    :checked {
      background: #2196f3;
    }

    ::placeholder {
      color: rgba(144, 202, 249, 0.5);
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
    }
    /* -moz-opacity: .4;
    -webkit-opacity: .4;
    opacity: .4; */
  }
`;

export const UserImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 186px;
  height: 182px;
  border: ${({ inputErrors }) =>
    inputErrors ? "1px solid red" : "1px solid rgba(144, 202, 249, 0.5)"};
  border-radius: 8px;
  position: relative;
  cursor: pointer;
`;
export const UploadedImage = styled.div`
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
export const InputFieldWithIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-gap: 5px;
  border: ${({ inputErrors }) =>
    inputErrors ? "1px solid red" : "1px solid #e7eaf3"};
  border-radius: 8px;
  padding: ${({ Padding }) => (Padding ? "0 10px" : "16px")};

  .react-tel-input .selected-flag.focus:before,
  .react-tel-input .selected-flag.open:before {
    border: none;
    outline: none;
    background: transparent;
    box-shadow: none;
  }
  .react-tel-input .selected-flag:before {
    border: none;
    outline: none;
    background: transparent;
    box-shadow: none;
  }
  .react-tel-input .selected-flag .arrow {
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #90caf9;
  }
  .react-tel-input .selected-flag .arrow.up {
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: none;
    border-bottom: 7px solid #90caf9;
  }
  .form-control {
    width: 100%;
    border: none;
    outline: none;
    color: #2196f3;
    font-size: 16px;
    line-height: 24px;
    font-family: Ruddy-Bold;
    background: none;
    box-shadow: none !important;
    ::placeholder {
      color: rgba(144, 202, 249, 0.5);
      font-family: Ruddy-Bold;
      font-size: 16px;
      line-height: 24px;
    }
  }
  input {
    width: 100%;
    border: none;
    outline: none;
    color: #2196f3;
    font-size: 16px;
    line-height: 24px;
    font-family: Ruddy-Bold;
    background: none;
    box-shadow: none !important;
    ::placeholder {
      color: rgba(144, 202, 249, 0.5);
      font-family: Ruddy-Bold;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
export const DOB = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: ${({ inputErrors }) =>
    inputErrors ? "1px solid red" : "1px solid #e7eaf3"};
  border-radius: 8px;
  padding: 16px 0;
  width: 100%;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? "#f4faff" : ""};
  color: ${({ color }) => (color ? "#90CAF9" : "")};
  input {
    border: none;
    outline: none;
    width: 100%;
    text-align: center;
    color: #2196f3;
    font-size: 16px;
    line-height: 24px;
    font-family: Ruddy-Bold;
    background: none;

    ::placeholder {
      color: rgba(144, 202, 249, 0.5);
      font-family: Ruddy-Bold;
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
export const DayAndMonth = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
`;
export const AddVaccination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #90caf9;
  border-radius: 8px;
  color: #2196f3;
  font-size: 16px;
  line-height: 24px;
  font-family: Ruddy-Bold;
  padding: 16px;
  cursor: pointer;
  margin-top: 30px;
`;

// Block Forms
export const BlockFormFields = styled.div`
  display: flex;
  grid-gap: 40px;
  @media screen and (max-width: 1220px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;
export const BlockColumn = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
  width: ${({ Width }) => (Width ? "280px" : "410px")};

  @media screen and (max-width: 1220px) {
    width: 100%;
  }
`;

export const LastBlockColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-gap: 100px;
`;

export const ModalError = styled.div`
  color: red;
  font-size: 12px;
  margin-bottom: 20px;
`;

export const RegisterBanner = styled.div`
  align-self: flex-end;
  padding: 0 15px;
`;

export const TopLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
