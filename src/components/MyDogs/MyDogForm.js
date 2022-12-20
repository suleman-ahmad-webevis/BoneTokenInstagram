import React, { useState } from "react";
import {
  BlockColumn,
  BlockFormFields,
  CombinedField,
  CombinedFieldContainer,
  CombinedFields,
  DayAndMonth,
  Divider,
  DOB,
  Form,
  FormButton,
  FormFields,
  FormInput,
  FormLabel,
  InputFieldWithIcon,
  SelectField,
  UploadedImage,
  UserImage,
  RegisterBanner,
  FormRow,
  TopLine,
  GenderField,
  ErrorsInput,
} from "./MyDogForm.styled";
import AddImage from "../../assets/images/AddImage.png";
import Heading from "../Heading/Heading";
import { Img } from "../../GlobalStyles";
import Facebook from "../../assets/images/Facebook.png";
import BreederButtons from "./BreederButtons";
import VaccinationType from "../Selectors/VaccinationType";
import RegisterOnBlockImg from "../../assets/images/RegisterOnBlockImg.png";
import Trophy from "../../assets/images/Trophy.png";
import Flag from "../../assets/images/Flag.png";
import Person from "../../assets/images/Person.png";
import Segments from "../../assets/images/Segments.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import Phone from "../../assets/images/Phone.png";
import { AddDogValidator } from "../../utils/FormValidation";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader";
import { ModalError } from "./MyDogForm.styled";
import { postTheDog } from "../../redux/dog/dogSlice";

const MyDogForm = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.dog);

  const [errors, setErrors] = useState({});
  const [hidden, setHidden] = useState(true);
  const [dog, setDog] = useState({
    ownerName: "",
    insuranceContact: "",
    dogGender: "Male",
    vaccination: "Rabies",
    dogImage: "",
    dogBreeder: "Yes",
    kennelName: "",
    breederShow: "",
    microchipNumber: "",
    dogName: "",
    breed: "Affenpinscher",
    showName: "",
    showCountry: "",
    showPlace: "",
    showJudge: "",
    showClass: "",
    insurancePolicy: "",
    vaccinationSerial: "",
    dob: {
      dobDay: null,
      dobMonth: null,
      dobYear: null,
    },
    showDate: {
      showDay: null,
      showMonth: null,
      showYear: null,
    },
    vaccinationExpire: {
      vaxpireDay: null,
      vaxpireMonth: null,
      vaxpireYear: null,
    },
    insuranceStart: {
      insurasDay: null,
      insurasMonth: null,
      insurasYear: null,
    },
    insuranceExpire: {
      insuraxDay: null,
      insuraxMonth: null,
      insuraxYear: null,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dobDay" || name === "dobMonth" || name === "dobYear") {
      setDog({ ...dog, dob: { ...dog.dob, [name]: value } });
    } else if (
      name === "showDay" ||
      name === "showMonth" ||
      name === "showYear"
    ) {
      setDog({ ...dog, showDate: { ...dog.showDate, [name]: value } });
    } else if (
      name === "vaxpireDay" ||
      name === "vaxpireMonth" ||
      name === "vaxpireYear"
    ) {
      setDog({
        ...dog,
        vaccinationExpire: { ...dog.vaccinationExpire, [name]: value },
      });
    } else if (
      name === "insurasDay" ||
      name === "insurasMonth" ||
      name === "insurasYear"
    ) {
      setDog({
        ...dog,
        insuranceStart: { ...dog.insuranceStart, [name]: value },
      });
    } else if (
      name === "insuraxDay" ||
      name === "insuraxMonth" ||
      name === "insuraxYear"
    ) {
      setDog({
        ...dog,
        insuranceExpire: { ...dog.insuranceExpire, [name]: value },
      });
    } else {
      setDog({ ...dog, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorsCount = AddDogValidator(dog);
    setErrors(errorsCount);
    try {
      if (Object.keys(errorsCount).length === 0) {
        // dispatch(postTheDog(dog));
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
        setDog({ ...dog, dogImage: current.src });
      };
      reader.readAsDataURL(file);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Form>
      <Heading level={1} style={{ color: '#2979FF' }}>on Chain Dog Registration</Heading>
      <TopLine>
        <Divider Width />
        <Divider />
      </TopLine>
      <BlockFormFields>
        <BlockColumn Width>
          <FormLabel htmlFor="for">Dog Photo</FormLabel>
          <UserImage
            inputErrors={errors?.dogImage}
            onClick={() => imageUploader.current.click()}
          >
            <input
              type="file"
              accept="image/*"
              name="dogImage"
              onChange={handleImageUpload}
              ref={imageUploader}
              style={{ display: "none" }}
            />
            <Img src={AddImage} alt="Add Image" />
            <UploadedImage>
              <img ref={uploadedImage} alt="" />
            </UploadedImage>
          </UserImage>
          <FormLabel htmlFor="for">Owner Name</FormLabel>
          <InputFieldWithIcon inputErrors={errors?.ownerName}>
            <input
              type="text"
              name="ownerName"
              onChange={handleChange}
              placeholder="Rasmus"
            />
            <Img src={Facebook} alt="Facebook" style={{ cursor: "pointer" }} />
          </InputFieldWithIcon>
        </BlockColumn>
        <BlockColumn>
          <FormLabel htmlFor="for">Name</FormLabel>
          <FormInput
            inputErrors={errors?.dogName}
            type="text"
            name="dogName"
            onChange={handleChange}
          />
          <FormLabel htmlFor="for">Breed</FormLabel>
          <SelectField>
            <select name="breed" onChange={handleChange} required>
              <option>Affenpinscher</option>
              <option>Afghan Hound</option>
              <option>Aidi</option>
              <option>Airedale Terrier</option>
              <option>Akita (dog)</option>
            </select>
          </SelectField>
          <CombinedFieldContainer>
            <CombinedFields>
              <GenderField inputErrors={errors?.dogGender}>
                <FormLabel>Male</FormLabel>
                <input
                  name="dogGender"
                  value="Male"
                  defaultChecked
                  onChange={handleChange}
                  type="radio"
                />
              </GenderField>
              <GenderField inputErrors={errors?.dogGender}>
                <FormLabel>Female</FormLabel>
                <input
                  name="dogGender"
                  value="Female"
                  onChange={handleChange}
                  type="radio"
                />
              </GenderField>
            </CombinedFields>
            <CombinedField>
              <FormLabel htmlFor="for">Date of Birth</FormLabel>
              <CombinedFields>
                <ErrorsInput
                  type="text"
                  onChange={handleChange}
                  name="dobDay"
                  placeholder="00"
                  inputErrors={errors.dobDay}
                />
                <ErrorsInput
                  type="text"
                  onChange={handleChange}
                  name="dobMonth"
                  placeholder="00"
                  inputErrors={errors.dobMonth}
                />
                <ErrorsInput
                  type="text"
                  onChange={handleChange}
                  name="dobYear"
                  placeholder="00"
                  inputErrors={errors.dobYear}
                />
              </CombinedFields>
            </CombinedField>
          </CombinedFieldContainer>
        </BlockColumn>
        <BlockColumn Width>
          <FormLabel htmlFor="for"> Are you Dog’s Breeder?</FormLabel>
          <BreederButtons dog={dog} setDog={setDog} />
          <FormLabel htmlFor="for">Breeder Kennel name</FormLabel>
          <FormInput
            type="text"
            inputErrors={errors?.kennelName}
            name="kennelName"
            onChange={handleChange}
          />
          <FormLabel htmlFor="for">Show Name if applicable</FormLabel>
          <FormInput
            type="text"
            inputErrors={errors?.showName}
            name="breederShow"
            onChange={handleChange}
          />
          <FormLabel htmlFor="for">Dog Microchip number</FormLabel>
          <FormInput
            type="text"
            onChange={handleChange}
            name="microchipNumber"
            inputErrors={errors?.microchipNumber}
          />
          <FormButton onClick={(e) => e.preventDefault()} Align>
            Save
          </FormButton>
        </BlockColumn>
        <BlockColumn>
          <FormLabel>Vaccination</FormLabel>
          <CombinedFields>
            <DayAndMonth>
              <DOB backgroundColor color={+true}>
                <input placeholder="Rabies" readOnly />
              </DOB>
              <DOB backgroundColor color={+true}>
                <input placeholder="253382162" readOnly />
              </DOB>
            </DayAndMonth>
            <DOB backgroundColor color={+true}>
              <input readOnly placeholder="01/12/2021" />
            </DOB>
          </CombinedFields>
          <FormLabel htmlFor="for" name="vaccination">
            Vaccination type
          </FormLabel>
          <VaccinationType dog={dog} setDog={setDog} />
          <FormLabel htmlFor="for">Vaccination Serial number</FormLabel>
          <FormInput
            type="text"
            name="vaccinationSerial"
            placeholder="Enter policy"
            onChange={handleChange}
            inputErrors={errors?.vaccinationSerial}
          />
          <FormLabel>Expiry</FormLabel>
          <CombinedFields inputErrors={errors?.vaccinationExpire}>
            <DayAndMonth>
              <DOB inputErrors={errors.vaxpireDay}>
                <input
                  type="number"
                  onChange={handleChange}
                  name="vaxpireDay"
                  placeholder="Day"
                />
              </DOB>
              <DOB inputErrors={errors.vaxpireMonth}>
                <input
                  type="number"
                  onChange={handleChange}
                  name="vaxpireMonth"
                  placeholder="Month"
                />
              </DOB>
            </DayAndMonth>
            <DOB inputErrors={errors.vaxpireYear}>
              <input
                type="number"
                onChange={handleChange}
                name="vaxpireYear"
                placeholder="Year"
              />
            </DOB>
          </CombinedFields>
          <FormButton onClick={(e) => e.preventDefault()} Align>
            Save
          </FormButton>
        </BlockColumn>
      </BlockFormFields>
      <FormFields>
        <RegisterBanner>
          <Img src={RegisterOnBlockImg} alt="Dogs" />
        </RegisterBanner>
        <FormRow>
          <BlockColumn>
            <FormLabel htmlFor="for"> DogShows results</FormLabel>
            <InputFieldWithIcon inputErrors={errors?.showName}>
              <input
                type="text"
                name="showName"
                onChange={handleChange}
                placeholder="Enter show name"
              />
              <Img src={Trophy} alt="Trophy" />
            </InputFieldWithIcon>
            <InputFieldWithIcon inputErrors={errors?.showCountry}>
              <input
                type="text"
                name="showCountry"
                onChange={handleChange}
                placeholder="Enter country"
              />
              <Img src={Flag} alt="Flag" />
            </InputFieldWithIcon>

            <InputFieldWithIcon inputErrors={errors?.showPlace}>
              <input
                type="text"
                onChange={handleChange}
                name="showPlace"
                placeholder="Enter place"
              />
              <Img src={Flag} alt="Flag" />
            </InputFieldWithIcon>

            <InputFieldWithIcon inputErrors={errors?.showJudge}>
              <input
                type="text"
                onChange={handleChange}
                name="showJudge"
                placeholder="Enter judge"
              />
              <Img src={Person} alt="Person" />
            </InputFieldWithIcon>

            <InputFieldWithIcon inputErrors={errors?.showClass}>
              <input
                type="text"
                onChange={handleChange}
                name="showClass"
                placeholder="Enter class"
              />
              <Img src={Segments} alt="Segments" />
            </InputFieldWithIcon>

            <CombinedFields inputErrors={errors?.showDate}>
              <DayAndMonth>
                <DOB inputErrors={errors.showDay}>
                  <input
                    type="number"
                    onChange={handleChange}
                    name="showDay"
                    placeholder="Day"
                  />
                </DOB>
                <DOB inputErrors={errors.showMonth}>
                  <input
                    type="number"
                    onChange={handleChange}
                    name="showMonth"
                    placeholder="Month"
                  />
                </DOB>
              </DayAndMonth>
              <DOB inputErrors={errors.showYear}>
                <input
                  type="number"
                  onChange={handleChange}
                  name="showYear"
                  placeholder="Year"
                />
              </DOB>
            </CombinedFields>
            <FormButton onClick={(e) => e.preventDefault()} Align>
              UPDATE PEDIGREE DATABASE
            </FormButton>
          </BlockColumn>
          <BlockColumn>
            <Heading level={1}>Insurance Certificate</Heading>
            <Divider Width />
            <FormLabel htmlFor="for">Policy</FormLabel>
            <FormInput
              inputErrors={errors?.insurancePolicy}
              type="text"
              name="insurancePolicy"
              placeholder="Enter policy"
              onChange={handleChange}
            />
            <FormLabel htmlFor="for">Contact number</FormLabel>
            <InputFieldWithIcon inputErrors={errors?.insuranceContact} Padding>
              <PhoneInput
                international
                country="gb"
                countryCallingCodeEditable={true}
                limitMaxLength={true}
                placeholder="(+44) 00000000"
                value={
                  dog && dog.insuranceContact ? `${dog.insuranceContact}` : ""
                }
                onChange={(value) =>
                  setDog({ ...dog, insuranceContact: value })
                }
              />
              <Img src={Phone} alt="Phone" style={{ cursor: "pointer" }} />
            </InputFieldWithIcon>

            <FormLabel>Start</FormLabel>
            <CombinedFields inputErrors={errors?.insuranceStart}>
              <DayAndMonth>
                <DOB inputErrors={errors.insurasDay}>
                  <input
                    type="number"
                    onChange={handleChange}
                    name="insurasDay"
                    placeholder="Day"
                  />
                </DOB>
                <DOB inputErrors={errors.insurasMonth}>
                  <input
                    type="number"
                    onChange={handleChange}
                    name="insurasMonth"
                    placeholder="Month"
                  />
                </DOB>
              </DayAndMonth>
              <DOB inputErrors={errors.insurasYear}>
                <input
                  type="number"
                  onChange={handleChange}
                  name="insurasYear"
                  placeholder="Year"
                />
              </DOB>
            </CombinedFields>

            <FormLabel>Expiry</FormLabel>
            <CombinedFields inputErrors={errors?.insuranceExpire}>
              <DayAndMonth>
                <DOB inputErrors={errors.insuraxDay}>
                  <input
                    type="number"
                    onChange={handleChange}
                    name="insuraxDay"
                    placeholder="Day"
                  />
                </DOB>
                <DOB inputErrors={errors.insuraxMonth}>
                  <input
                    type="number"
                    onChange={handleChange}
                    name="insuraxMonth"
                    placeholder="Month"
                  />
                </DOB>
              </DayAndMonth>
              <DOB inputErrors={errors.insuraxYear}>
                <input
                  type="number"
                  onChange={handleChange}
                  name="insuraxYear"
                  placeholder="Year"
                />
              </DOB>
            </CombinedFields>
            <FormButton onClick={handleSubmit}>CONFIRM</FormButton>
          </BlockColumn>
        </FormRow>
      </FormFields>
    </Form >
  );
};

export default MyDogForm;
