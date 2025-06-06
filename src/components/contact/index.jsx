import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import ContactArea from "./contact-area";
import ContactInfo from "./contact-info";
import Footer from "@/src/layout/footers/footer";
//import HeaderTwo from "@/src/layout/headers/header-2";

const Contact = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb title={" Contact"} innertitle={""}  />
      <ContactArea />
      <ContactInfo />
      <Footer />
    </>
  );
};

export default Contact;
