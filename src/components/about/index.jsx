import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react"; 
import AboutArea from "./about-area";
import ServiceArea from "./service-area";
import GallaryArea from "./gallary-area";
import OurHistory from "./our-history";
// import FeatureArea from "./feature-area";
// import BlogArea from "./blog-area";
import Footer from "@/src/layout/footers/footer";
import Team from "./team";

const About = () => {
  return (
    <>
      <HeaderTwo />
      <Breadcrumb  title="About"  innertitle=""  /> 
      <AboutArea />
      <ServiceArea />
      <GallaryArea />
      <OurHistory />
      <Team />
      {/* <FeatureArea /> */}
      {/* <BlogArea /> */}
      <Footer />
    </>
  );
};

export default About; 
