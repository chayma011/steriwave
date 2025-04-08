import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import ShopDetailsArea from "./shop-details-area";
import Footer from "@/src/layout/footers/footer";

const ShopDetails = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb title=" Shop Details" innertitle="Our Products" />
      <ShopDetailsArea />

      <Footer />
    </>
  );
};

export default ShopDetails;
