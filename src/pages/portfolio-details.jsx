import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import PortfolioDetails from "../components/portfolio-details";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Steriwave - UVC"} />
      <PortfolioDetails />
    </Wrapper>
  );
};

export default index;
