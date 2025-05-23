import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Shop from "../components/shop";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Steriwave - UVC"} />
      <Shop />
    </Wrapper>
  );
};

export default index;
