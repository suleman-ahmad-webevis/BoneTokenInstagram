import React, { useState } from "react";
import Heading from "../../components/Heading/Heading";
import { csBox, sCostOne, sCostTwo } from "./csData";
import {
  CSPage,
  CSLine,
  CSContainer,
  CSLeft,
  CSBoxes,
  CSBox,
  CSPolicy,
  CSRight,
  OrderUpdateSection,
  ShippingCostContainer,
  OrderUpdateInputs,
  ShippingSection,
  ShippingRight,
  ShippingLeft,
  Input,
  UpdateButton,
  Flag,
  CountryFlags,
  UpdateBtn,
} from "./CustomerService.Style";
import { Img } from "../../GlobalStyles";
import DogProfileSmall from "../../assets/images/DogProfileSmall.png";
import { FormInput, FormLabel } from "../../components/MyDogs/MyDogForm.styled";
// import "/node_modules/flag-icons/css/flag-icons.min.css";
// import WhitePaper from "../../assets/images/WhitePaper.png";
//ToShowPDF
// import { Viewer, Worker } from "@react-pdf-viewer/core";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// import WhitePaperPDF from "../../assets/pdf/WhitePaper.pdf";

const CustomerService = () => {
  // const [defaultPdfFile] = useState(WhitePaperPDF);
  // const [showPdf, setShowPdf] = useState(false);
  // const defLayoutPlugin = defaultLayoutPlugin();

  return (
    <CSPage>
      <Heading level={1}>Customer Service</Heading>
      <CSLine />
      <CSContainer>
        {/* Left Section */}
        <CSLeft>
          {csBox.map((data) => (
            <CSBoxes>
              <Heading level={1}>{data.title}</Heading>
              <CSBox>
                <Heading FontSmall level={6}>
                  {data.text}
                </Heading>
              </CSBox>
            </CSBoxes>
          ))}
          <CSPolicy>
            <Heading level={1}>Disclaimer</Heading>
            <Heading level={1}>Privacy</Heading>
            <Heading level={1}>Terms and Conditions</Heading>
            {/* <Img
              src={WhitePaper}
              alt="WhitePaper"
              onClick={() => setShowPdf(!showPdf)}
            /> */}
          </CSPolicy>
        </CSLeft>
        {/* Right Section */}
        <CSRight>
          <Heading level={1}>Order Update Request</Heading>
          <OrderUpdateSection>
            <OrderUpdateInputs>
              <FormLabel>Email</FormLabel>
              <FormInput type="text" placeholder="Enter your email" />
              <FormLabel>Order Number</FormLabel>
              <FormInput type="text" placeholder="Enter your order number" />
            </OrderUpdateInputs>
            <UpdateButton>
              <UpdateBtn>Update Me</UpdateBtn>
              <Img src={DogProfileSmall} alt="DogProfileSmall" />
            </UpdateButton>
          </OrderUpdateSection>
          <ShippingCostContainer>
            <Heading level={1}>Shipping costs upto 30kg</Heading>
            <ShippingSection>
              <ShippingRight>
                {sCostOne.map((data) => (
                  <CountryFlags>
                    <Flag>
                      <span className={`fi fi-${data.code}`}></span>
                    </Flag>
                    <Input type="text" value={data.cost} />
                  </CountryFlags>
                ))}
              </ShippingRight>
              <ShippingLeft>
                {sCostTwo.map((a) => (
                  <CountryFlags>
                    <Flag>
                      <span className={`fi fi-${a.code}`}></span>
                    </Flag>
                    <Input type="text" value={a.cost} />
                  </CountryFlags>
                ))}
                <CountryFlags>
                  <Flag>Other</Flag>
                  <Input type="text" value="Delivery@BoneToken.com" />
                </CountryFlags>
              </ShippingLeft>
            </ShippingSection>
          </ShippingCostContainer>
        </CSRight>
      </CSContainer>
      {/* {showPdf && (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
          <Viewer fileUrl={defaultPdfFile} plugins={[defLayoutPlugin]} />
        </Worker>
      )} */}
    </CSPage>
  );
};

export default CustomerService;
