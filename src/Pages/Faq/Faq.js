import React from "react";
import styled from "styled-components";
import Heading from "../../components/Heading/Heading";
import { faqData } from "./FaqData";

const Faq = () => {
  return (
    <FaqPage>
      <Heading level={9}>FAQ</Heading>
      <FaqLine />
      <FaqBoxes>
        {faqData.map((data, i) => (
          <FaqBoxSection key={i}>
            <Heading level={9}>{data.title}</Heading>
            <FaqBox>
              <Heading FontSmall level={5} Color>
                {data.text}
              </Heading>
            </FaqBox>
          </FaqBoxSection>
        ))}
      </FaqBoxes>
    </FaqPage>
  );
};

const FaqPage = styled.div`
  padding: 20px;
`;

const FaqLine = styled("div")`
  padding-top: 10px;
  border-bottom: 2px solid #2979ff;
  width: 44%;
`;

const FaqBoxes = styled("div")`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 55px 0px;
`;

const FaqBoxSection = styled("div")`
  width: 49%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FaqBox = styled("div")`
  font-size: 16px;
  border: 1px solid #90caf9;
  border-radius: 8px;
  word-wrap: break-word;
  background-color: #f4faff;
  padding: 15px 12px 35px 12px;
  margin: 15px 0px 45px 0px;
`;

export default Faq;
