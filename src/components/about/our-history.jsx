import Link from 'next/link';
import React from 'react';


const history_data = {
    history: "history",
    title: "Individual Discussions with Qualified Experts",
    description: <>Since 2019, STERIWAVE has been dedicated to advancing UVC sterilization technology. Our team of healthcare and engineering experts has worked tirelessly to develop solutions that address the evolving challenges of infection control.</>,

    yearly_info: [
        {
            id: 1, 
            year: "2021",
            title: "Journey Was Started",
            info: <>Founded as a Tunisian startup, we began researching and developing UVC sterilization technology.</>,
        },
        {
            id: 1, 
            year: "2023",
            title: "first UVC sterilization device",
            info: <>Launched our first commercial UVC sterilization device, revolutionizing disinfection in hospitals and laboratories.</>,
        },
        {
            id: 1, 
            year: "2025",
            title: "Best Agency In World 2025",
            info: <>Recognized as a global leader in UVC sterilization, with products used in healthcare, food processing, and pharmaceutical industries worldwide.</>,
        },
    ]
}
const {history, title, description, yearly_info} = history_data

const OurHistory = () => {
    return (
        <>
            <div className="tp-history-area pb-85 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-5 col-lg-8 ">
                        <div className="tp-about-wrapper about-page">
                            <div className="tp-section-box tp-section-box-2  p-relative">
                                <span className="tp-section-subtitle right d-inline-block">{history}</span>
                                <h2 className="tp-section-title mb-20">
                                    {title}
                                </h2>
                                <p>{description}</p>
                            </div>
                                <Link className="tp-btn mt-30" href="/contact">Learn More <i className="fal fa-long-arrow-right"></i></Link>
                        </div>
                        </div>
                        <div className="col-xxl-6 col-xl-7 col-lg-12">
                            {yearly_info.map((item, i)  => 
                                <div key={i} className="tp-ab-4-right d-flex align-items-center">
                                    <h4>{item.year}</h4>
                                    <div className="ab-4-content">
                                        <h3>{item.title}</h3>
                                        <p>{item.info}</p>
                                    </div>
                                </div>                            
                            )}                             
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurHistory;