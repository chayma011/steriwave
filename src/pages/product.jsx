import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import Product from "../components/product";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Steriwave - UVC"} />
      <Product />
    </Wrapper>
  );
};

export default index;