import Link from 'next/link';
import React from 'react';


const about_content = {
    about: "About Us",
    title:"Get reliable, fast, and chemical-free disinfection",
    info: <>STERIWAVE is a Tunisian startup specializing in advanced sterilization
    and disinfection. Our mission is to provide safe, effective, and accessible
    disinfection solutions for the medical and industrial sectors. With our expertise 
    and technological innovation, we develop advanced disinfection solutions tailored 
    to hospitals, clinics, laboratories, as well as the pharmaceutical and food industries. 
    Our devices guarantee effective pathogen elimination while being environmentally friendly.</>,
    features: [
        "Chemical-Free Alternative",
        "Fast & Effective",
        "Protection for Sensitive Materials",
        "Reduced Antimicrobial Resistance",
        "Cost-Effective",
        "Sustainability Responsible",
    ],
    // sig_img: "/assets/img/about/sig.png",
    // author: " ",
    // job_title: "Head Of Idea",
    right_img: "/assets/img/about/B1.png"
}
const {about, title, info, features, sig_img, author, job_title, right_img} = about_content

const AboutArea = () => {
    return (
        <>
           <div className="tp-about-area pt-120 pb-120" id='about'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12">
                        <div className="tp-about-wrapper tp-about-wrapper-2 pt-40 mb-40 pr-40">
                            <div className="tp-section-box tp-section-box-2  p-relative">
                                <span className="tp-section-subtitle right d-inline-block">{about}</span>
                                <h2 className="tp-section-title mb-15">
                                    {title}
                                </h2>
                                <p>{info}</p>
                            </div>
                            <hr className="mt-30 mb-30" />
                            <div className="tp-about-fea-item">
                                <ul>
                                    {features.map((feature , i) => <li key={i}><i className="fal fa-check"></i>{feature}</li>)} 
                                </ul> 
                            </div>
                            <div className="tp-about-fea-signature d-flex align-items-center mt-25">
                                <div className="sig-btn mr-30 mb-10">
                                    <Link className="tp-btn-border" href="/about">Learn More <i className="fal fa-long-arrow-right"></i></Link>
                                </div>
                                <div className="about-signature mb-10">
                                    <img src={sig_img} alt={author} />
                                    <h6>{author}, <span>{job_title}</span></h6>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                        <div className="tp-about-wapper2 pl-10">
                            <img src={right_img} alt="theme-pure" />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutArea;