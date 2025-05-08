import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import ProductArea from "./product-area";
import FeatureArea from "./feature-area";
import Footer from "@/src/layout/footers/footer";

const Product = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb title="Products" innertitle="" />
      <ProductArea />
      <FeatureArea />
      <Footer />
    </>
  );
};

export default Product;