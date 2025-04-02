import React, { useRef } from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../common/seo";
import service_data from '@/src/data/service-data';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from "@/src/layout/footers/footer";
import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import Slider from 'react-slick';

const setting = {
  slidesToShow: 2,
  arrows: false,
  autoplay: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
};

const ServiceDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const sliderRef = useRef(null);
  
  // Find the service details from service_data
  const service = service_data.find(item => item.id === id);

  // Get related products (excluding current product)
  const relatedProducts = service_data.slice(3, 6).filter(item => item.id !== id);
  
  // If service not found or page is initially loading
  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      <SEO pageTitle={`${service.title} - Sectox CCTV & Security`} />
      <HeaderTwo />
      <Breadcrumb title={service.title} innertitle="Our Products" />
      <main>
        <div className="shop-details-area pt-120 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-5 col-12">
                <div className="product-img-tabs">
                  <div className="tab-content">
                    <div className="product-img text-center">
                      <img src={service.img} alt={service.title} className="img-fluid rounded" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-7 col-12">
                <div className="product-details-content">
                  <div className="product-top mb-10">
                    <div className="product-tag">
                      <Link href="/#products">UVC Sterilization</Link>
                    </div>
                  </div>
                  <h3 className="product-details-title mb-20">{service.title}</h3>
                  <div className="product-paragraph">
                    <p className="mb-25">{service.description}</p>
                  </div>
                  <div className="mt-4 mb-4">
                    <Link href="/contact" className="tp-btn">
                      Request Quote
                    </Link>
                  </div>
                  {service.specifications && (
                    <div className="product-details-meta">
                      {Object.entries(service.specifications).map(([key, value]) => (
                        <div key={key} className="mb-2">
                          <span className="text-capitalize">{key}: </span>
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="product-details-share mt-4">
                    <span>Share:</span>
                    <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                    <Link href="#"><i className="fab fa-twitter"></i></Link>
                    <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-additional-info pb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="product-additional-tab">
                  <ul className="nav nav-tabs" id="myTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-links active" id="features-tab" data-bs-toggle="tab" data-bs-target="#features"
                        type="button" role="tab" aria-controls="features" aria-selected="true">Features</button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-links" id="specifications-tab" data-bs-toggle="tab" data-bs-target="#specifications"
                        type="button" role="tab" aria-controls="specifications" aria-selected="false">Specifications</button>
                    </li>
                  </ul>
                  <div className="tab-content tp-content-tab" id="myTabContent-2">
                    <div className="tab-pane fade show active" id="features" role="tabpanel" aria-labelledby="features-tab">
                      <div className="row g-4">
                        {service.features?.map((feature, index) => (
                          <div key={index} className="col-md-6">
                            <div className="d-flex align-items-center">
                              <i className="fas fa-check-circle text-primary me-2"></i>
                              <span>{feature}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="tab-pane fade" id="specifications" role="tabpanel" aria-labelledby="specifications-tab">
                      <div className="product__details-info table-responsive">
                        <table className="table table-striped">
                          <tbody>
                            {service.specifications && Object.entries(service.specifications).map(([key, value]) => (
                              <tr key={key}>
                                <td className="add-info text-capitalize">{key}</td>
                                <td className="add-info-list">{value}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-shop-details-product-area grey-bg pt-120 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <div className="tp-section-box tp-section-box-2 p-relative mb-50">
                  <span className="tp-section-subtitle d-inline-block right mb-10">Related</span>
                  <h2 className="tp-section-title">
                    Related Products
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              <Slider {...setting} ref={sliderRef}>
                {relatedProducts.map((item, i) => (
                  <div key={i} className="col-xl-4">
                    <div className="tpsvbox mb-30">
                      <div className="tpsvbox__thumb">
                        <div className="fix">
                          <Link href={`/products/${item.id}`}>
                            <img 
                              src={item.img} 
                              alt={item.title} 
                              className="img-fluid" 
                              style={{ 
                                height: "300px", 
                                width: "100%", 
                                objectFit: "cover",
                                borderRadius: "8px"
                              }} 
                            />
                          </Link>
                        </div>
                        <div className="tpsvbox__icon">
                          <Link href={`/products/${item.id}`}>
                            <i className={item.icon}></i>
                          </Link>
                        </div>
                      </div>
                      <div className="tpsvbox__content text-center">
                        <div className="tpsvbox__big-text">
                          <h2>{item.sirial}</h2>
                        </div>
                        <h3 className="tpsvbox__title">
                          <Link href={`/products/${item.id}`}>{item.title}</Link>
                        </h3>
                        <p className="mb-0">{item.description.slice(0, 100)}...</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </main>
      <Footer style_2={true} />
    </Wrapper>
  );
};

export default ServiceDetails; 