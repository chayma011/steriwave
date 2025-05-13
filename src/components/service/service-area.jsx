import service_data from '@/src/data/service-data';
import Link from 'next/link';
import React from 'react';

const ServiceArea = () => {
    return (
        <> 
           <div className="service-area pt-0 pb-55">
                <div className="container">
                    <div className="row">
                        {service_data.slice(0, 6).map((item, i)  => 
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="tpservices">
                                    <div className="tpservices__thumb">
                                        <div className="fix">
                                            <Link href={`/products/${item.id}`}>
                                                <img src={item.img} alt="theme-pure" style={{width: '100%', height: '250px', objectFit: 'cover'}} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="tpservices__content" style={{marginTop: '20px'}}>
                                        <h3 className="tpservices__title" style={{textAlign: 'center'}}>
                                            <Link href={`/products/${item.id}`}>{item.title}</Link>
                                        </h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="tpservices__btn">
                                        <Link className="tp-btn w-100" href={`/products/${item.id}`}>
                                            Product Details <i className="fal fa-long-arrow-right"></i>
                                        </Link>
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