import service_data from '@/src/data/service-data';
import React from 'react';
import Link from 'next/link';

const ProductArea = () => {
    return (
        <> 
           <div className="service-area pt-0 pb-55">
                <div className="container">
                    <div className="row">
                        {service_data.slice(10, 16).map((item, i)  => 
                            <div key={i} className="col-lg-4 col-md-6">
                                <div className="tpservices">
                                    <div className="tpservices__thumb">
                                        <div className="fix"><a href="#"><img src={item.img} alt="theme-pure" style={{width: '100%', height: '250px', objectFit: 'cover'}} /></a></div>
                                    </div>
                                    <div className="tpservices__content" style={{marginTop: '20px'}}>
                                        <h3 className="tpservices__title" style={{textAlign: 'center'}}>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="tpservices__btn">
                                        <Link className="tp-btn w-100" href={`/products/${item.id}`}>Product Details <i className="fal fa-long-arrow-right"></i></Link>
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

export default ProductArea;