import React, { useRef, useEffect } from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../common/seo";
import service_data from '@/src/data/service-data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from "@/src/layout/footers/footer";
import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import Slider from 'react-slick';

const router = useRouter();
const { id } = router.query;
const sliderRef = useRef(null);

// Find the service details from service_data
const service = service_data.find(item => item.id === id);

// Get related products (excluding current product)
const relatedProducts = service_data.slice(3, 6).filter(item => item.id !== id);

const handleClick = async (e, link) => {
  // Check if the link is an internal anchor with the format "/#section"
  if (link.startsWith('/#')) {
    e.preventDefault();
    const sectionId = link.split('/#')[1];
    
    if (router.pathname !== '/') {
      // If we're not on the home page, navigate to home with the hash
      await router.push(`/${link}`);
    } else {
      // If we're already on the home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};

// Handle scroll when coming from another page
useEffect(() => {
  if (router.asPath.startsWith('/#')) {
    const sectionId = router.asPath.split('/#')[1];
    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
}, [router.asPath]);

// If service not found or page is initially loading
if (!service) {
  return <div>Loading...</div>;
}

<div className="product-details-content">
  <div className="product-top mb-10">
    <div className="product-tag">
      <Link href="/#products" onClick={(e) => handleClick(e, '/#products')}>UVC Sterilization</Link>
    </div>
  </div>
</div> 