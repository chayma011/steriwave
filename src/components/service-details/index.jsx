import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import ServiceDetailsArea from "./service-details-area";
import Footer from "@/src/layout/footers/footer";

const ServiceDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb title="Service Details" innertitle="" />
      <ServiceDetailsArea />
      <Footer />
    </>
  );
};

export default ServiceDetails;
