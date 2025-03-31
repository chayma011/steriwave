import VideoPopup from '@/src/modals/video-popup';
import React, { useState } from 'react';

const support_content = {
    bg_img: "/assets/img/bg/A2.jpg",
    sub_title: "Get support",
    title: "Efficient And Sustainable Sterilization Solution",
    des: <>We collaborate with healthcare and engineering experts to offer high-performance equipment that meets the most stringent international standards.</>,
    email_title: "Email address",
    email: "support@steriwave-uv.com",


}
const {bg_img, sub_title, title, des, email_title, email}  = support_content

const SupportArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
    return (
        <>
            <div className="tp-support-area pt-120 pb-110 p-relative" 
                 style={{backgroundImage: `url(${bg_img})`}}>
                <div className="container">
                    <div className="row">
                    <div className="col-xl-8 col-lg-10  m-auto">
                        <div className="tpsupport__overlay-content text-center">
                            <button  className=" popup-video mb-60" 
                            onClick={() => setIsVideoOpen(true)} 
                            >
                                <i className="fas fa-play"></i>
                            </button>
                            <div className="tp-section-box tp-section-box-2 white-text p-relative mb-45 text-center">
                                <span className="tp-section-subtitle d-inline-block pre mb-10">{sub_title}</span>
                                <h2 className="tp-section-title">
                                {title}
                                </h2>
                                <p className="m-0">{des}</p>
                            </div>

                            <hr className="mt-50 mb-50" />
                        </div>

                        <div className="tpsupport-wrapper d-flex justify-content-center">
                            <div className="tpsupport-ovr-button mr-30">
                                <a className="tp-btn" href="/contact">Get A Quote<i className="fal fa-angle-right"></i></a>
                            </div>
                            <div className="tp-header-contact tp-support-contact z-index">
                                <div className="tp-header-contact-icon tp-header-contact-icon-2  d-flex align-items-center">
                                <div><i className="fal fa-envelope-open"></i></div>
                                <div className="tp-header-icon-info tp-header-icon-info2">
                                    <label>{email_title}</label>
                                    <a href={`mailto:${email}`}>{email}</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
             
            <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"BgYTt3buLCM"}
            />
        </>
    );
};

export default SupportArea;