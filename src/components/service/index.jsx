import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import ServiceArea from "./service-area";
import FeatureArea from "./feature-area";
import PricingArea from "./pricing-area";
import Footer from "@/src/layout/footers/footer";

const Service = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb title="Products" innertitle="" />
      <ServiceArea />
      <FeatureArea />
      {/* <PricingArea /> */}
      <Footer />
    </>
  );
};

export default Service;
