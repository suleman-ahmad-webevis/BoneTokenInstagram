import React from "react";
import ReactLoading from "react-loading";
import { Section, Article } from "./generic";

const Loader = () => (
  <Section>
    <Article>
      <ReactLoading type="spin" color="#fff" />
    </Article>
  </Section>
);

export default Loader;
