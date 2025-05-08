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

const ServiceDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const sliderRef = useRef(null);

  // Find the service
  const service = service_data.find(item => item.id === id);

  const relatedProducts = service_data.slice(3, 6).filter(item => item.id !== id);

  const handleClick = async (e, link) => {
    if (link.startsWith('/#')) {
      e.preventDefault();
      const sectionId = link.split('/#')[1];

      if (router.pathname !== '/') {
        await router.push(`/${link}`);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

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

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <SEO pageTitle={service.title || "Service Details"} />
      <HeaderTwo />
      <Breadcrumb title={service.title || "Service Details"} />
      <div className="product-details-content">
        <div className="product-top mb-10">
          <div className="product-tag">
            <Link href="/product" onClick={(e) => handleClick(e, '/product')}>UVC Sterilization</Link>
          </div>
        </div>
        <h1>{service.title}</h1>
        <p>{service.description}</p>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default ServiceDetails; 