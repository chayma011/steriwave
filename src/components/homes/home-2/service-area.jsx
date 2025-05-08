import service_data from '@/src/data/service-data';
import Link from 'next/link';
import React from 'react';

const ServiceArea = () => {
    return (
        <>
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
                    <div className="row">
                        {service_data.slice(3, 6).map((item, i) => 
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="tpsvbox mb-30">
                                    <div className="tpsvbox__thumb">
                                        <div className="fix">
                                            <Link href={`/products/${item.id}`}>
                                                <img src={item.img} alt={item.title} />
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
                                        {/* <p className="m-0">Service No {item.sirial}</p> */}
                                    </div>
                                </div>
                            </div>
                        )} 
                    </div>
                </div>
            </div> 
        </>
    );
};

export default ServiceArea;