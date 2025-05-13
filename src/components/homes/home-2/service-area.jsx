import service_data from '@/src/data/service-data';
import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ServiceArea = () => {
    return (
        <>
            <style jsx global>{`
                .service-slider {
                    padding: 40px 60px;
                }
                .service-slider .swiper-button-next,
                .service-slider .swiper-button-prev {
                    color: #000;
                    width: 50px;
                    height: 50px;
                }
                .service-slider .swiper-button-next:after,
                .service-slider .swiper-button-prev:after {
                    font-size: 24px;
                }
                .service-slider .swiper-pagination-bullet-active {
                    background: #000;
                }
                .tpservices {
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                    padding: 20px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .tpservices__thumb {
                    position: relative;
                    margin-bottom: 20px;
                }
                .tpservices__thumb img {
                    width: 100%;
                    height: 250px;
                    object-fit: cover;
                    border-radius: 8px;
                }
                .tpservices__content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }
                .tpservices__title {
                    text-align: center;
                    margin-bottom: 15px;
                }
                .tpservices__btn {
                    margin-top: auto;
                    padding-top: 20px;
                }
                .tp-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    padding: 12px 25px;
                    background: #000;
                    color: #fff;
                    border-radius: 5px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .tp-btn:hover {
                    background: #333;
                    color: #fff;
                }
            `}</style>
            <div className="service-area grey-bg pt-110 pb-90" id='products'>
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12">
                            <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                                <span className="tp-section-subtitle d-inline-block pre mb-10">Products</span>
                                <h2 className="tp-section-title">
                                    What We Provide
                                </h2>
                            </div>
                        </div> 
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                        className="service-slider"
                    >
                        {service_data.slice(0, 6).map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="tpservices">
                                    <div className="tpservices__thumb">
                                        <div className="fix">
                                            <Link href={`/products/${item.id}`}>
                                                <img src={item.img} alt={item.title} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="tpservices__content">
                                        <h3 className="tpservices__title">
                                            <Link href={`/products/${item.id}`}>{item.title}</Link>
                                        </h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="tpservices__btn">
                                        <Link className="tp-btn" href={`/products/${item.id}`}>
                                            Product Details <i className="fal fa-long-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div> 
        </>
    );
};

export default ServiceArea;

