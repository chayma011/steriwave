import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react"; 
import AboutArea from "./about-area";
import ServiceArea from "./service-area";
import GallaryArea from "./gallary-area";
import OurHistory from "./our-history";
import FeatureArea from "./feature-area";
import BlogArea from "./blog-area";
import Footer from "@/src/layout/footers/footer";

const About = () => {
  return (
    <>
      <HeaderTwo />
      {/* <Breadcrumb  title="About"  innertitle="Blog Grid Classic"  /> */}
      <AboutArea />
      <ServiceArea />
      <GallaryArea />
      <OurHistory />
      <FeatureArea />
      <BlogArea />
      <Footer />
    </>
  );
};

export default About; 
