import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import PostboxArea from "./postbox-area";
import Footer from "@/src/layout/footers/footer";

const BlogDetails = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Blog Details" innertitle="News Details" />
        <PostboxArea />
      </main>
      <Footer />
    </>
  );
};

export default BlogDetails;
