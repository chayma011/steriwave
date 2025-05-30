import React from 'react';

const fetures_data = {
    fetures_one : [
        {
            id: 1, 
            sirial: "01",
            icon: "flaticon-shield",
            title: "Chemical-Free Alternative",
            description: <>UVC disinfection leaves no toxic residues, ensuring the safety of healthcare professionals and patients.</>,
        },
        {
            id: 2, 
            sirial: "02",
            icon: "flaticon-hacker",
            title: "Fast & Effective",
            description: <>Our devices eliminate over 99.9% of microorganisms in minutes, including multi-resistant pathogens.</>,
        },
    ],

    fetures_two : [
        {
            id: 1, 
            sirial: "03",
            icon: "flaticon-cctv-11",
            title: "Protection for Sensitive Materials",
            description: <>Unlike chemical or thermal methods, UVC preserves the physical and chemical properties of sensitive equipment.</>,
        },
        {
            id: 2, 
            sirial: "04",
            icon: "flaticon-shield-1",
            title: "Reduced Antimicrobial Resistance",
            description: <>Unlike chemical disinfectants, UVC does not promote the development of resistant microorganisms.</>,
        },
    ],

    circle_img: "/assets/img/feature/A7.jpg",
    circle_data: [
        {cls_1: "icon", cls_2: "text", info: <>Video analytics systems with <br />  smart cctv</>,},
        {cls_1: "icon2", cls_2: "text2", info: <>Video analytics systems with <br />  smart cctv</>,},

    ]
}
const {fetures_one, fetures_two, circle_img, circle_data}  = fetures_data

const FeaturesLevel = () => {
    return (
        <>
            <div className="tp-feature-area pt-115 pb-90">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-xl-12">
                        <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                            <span className="tp-section-subtitle d-inline-block pre mb-10">features</span>
                            <h2 className="tp-section-title">
                                Core Level Features
                            </h2>
                        </div>
                        </div>
                    </div>
                    <div className="row  align-items-start justify-content-center">

                        <div className="col-xl-3 col-lg-6 col-md-6">
                            {fetures_one.map((item, i)  => 
                                <div key={i} className="tp-fea-item p-relative mb-30">
                                    <div className="tp-fea-icon d-flex">
                                        <i className={item.icon}></i>
                                        <div className="fea-big-text">
                                            <span>{item.sirial}</span>
                                        </div>
                                    </div>
                                    <div className="tp-fea-content pt-40">
                                        <h5>{item.title}</h5>
                                        <p className="m-0">{item.description}</p>
                                    </div>
                                </div>
                            )} 
                        </div>

                        <div className="col-lg-6 justify-content-center p-relative d-none d-xl-flex">
                            <div className="tp-fea-big-img p-relative">
                                <img src={circle_img} alt="theme-pure" />
                                {circle_data.map((item, i)  => 
                                    <div key={i} className={`tp-fea-plus-${item.cls_1}`}>
                                        <a href="#"><i className="fal fa-plus"></i></a>
                                        <div className={`fea-plus-icon-${item.cls_2}`}>
                                            <h4 className="m-0">{item.info}</h4>
                                        </div>
                                    </div>
                                )} 
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6">
                            {fetures_two.map((item, i)  => 
                                <div key={i} className="tp-fea-item p-relative mb-30">
                                    <div className="tp-fea-icon d-flex">
                                        <i className={item.icon}></i>
                                        <div className="fea-big-text">
                                            <span>{item.sirial}</span>
                                        </div>
                                    </div>
                                    <div className="tp-fea-content pt-40">
                                        <h5>{item.title}</h5>
                                        <p className="m-0">{item.description}</p>
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

export default FeaturesLevel;