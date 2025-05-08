import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react"; 
import ShoppingArea from "./pricing-area";
import Footer from "@/src/layout/footers/footer";

const Shop = () => {
  return (
    <>
      <HeaderOne />
      <Breadcrumb title=" Shop" innertitle="" /> 
      <ShoppingArea />
      <Footer />
    </>
  );
};

export default Shop;
