import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import PostboxArea from "./postbox-area";
import Footer from "@/src/layout/footers/footer";

const Blog = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb title="Blog"  innertitle="" />
        <PostboxArea />
      </main>
      <Footer />
    </>
  );
};

export default Blog;
