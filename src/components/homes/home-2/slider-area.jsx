import Link from 'next/link';
import React, { useRef } from 'react';
import Slider from 'react-slick';

const setting = {
    fade:true,
    slidesToShow: 1,
    arrows: false, 
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
            }
        }
    ]
}

const slider_data = [
    // {
    //     id: 1,
    //     col: "col-xxl-6 col-xl-7 col-lg-8 col-md-12", 
    //     bg_img: "/assets/img/slider/A.jpg",
    //     sub_title: "Welcome to STERIWAVE, the leading reference in UVC sterilization.",
    //     title:<>STERIWAVE  {" "} <br /> Your Barrier Against the Invisible </>,
    //     info: <>Our innovative solutions provide fast, effective, and chemical-free  {" "} <br />disinfection for hospitals, the food industry, and the pharmaceutical
    //     sector. </>, 
    //     slider_service_title:  <> <b>Installation</b> <br /> Free Service </> ,
    //   },
      {
        id: 2,
        col: "col-xxl-6 col-xl-7 col-lg-8", 
        bg_img: "/assets/img/slider/x3.jpg",
        sub_title: "Welcome to STERIWAVE, the leading reference in UVC sterilization.",
        title: "STERIWAVE PRO Your Barrier Against the Invisible",
        info: <>Our innovative solutions provide fast, effective, and chemical-free  {" "} <br />disinfection for hospitals, the food industry, and the pharmaceutical
        sector. </>, 
        slider_service_title:  <> <b>Installation</b> <br /> Free Service </> ,
      },
      {
      id: 3,
        col: "col-xxl-6 col-xl-7 col-lg-8", 
        bg_img: "/assets/img/slider/x2.jpg",
        sub_title: "Welcome to STERIWAVE, the leading reference in UVC sterilization.",
        title: "STERIWAVE PRO Your Barrier Against the Invisible",
        info: <>Our innovative solutions provide fast, effective, and chemical-free  {" "} <br />disinfection for hospitals, the food industry, and the pharmaceutical
        sector. </>, 
        slider_service_title:  <> <b>Installation</b> <br /> Free Service </> ,
      },
]
const SliderArea = () => {
  const sliderRef = useRef(null);

    return (
        <>
            <div className="tp-slider-area">
                <div className="slider-active slider-arrow-style p-relative">
                    <button type="button" onClick={() => sliderRef.current?.slickPrev()} className="slick-prev slick-arrow" >
                        <i className="flaticon-left-arrow"></i>
                    </button>
                    <button type="button" onClick={() => sliderRef.current?.slickNext()} className="slick-next slick-arrow" >
                        <i className="flaticon-right-arrow"></i>
                    </button>
                    <Slider {...setting} ref={sliderRef} >
                        {slider_data.map((item, i) => 
                            <div key={i}> 
                                <div className="tp-slider-item tp-slider-height tp-slider-overlay-2 d-flex align-items-center"
                                    style={{backgroundImage: `url(${item.bg_img})`}}>
                                    <div className="container">
                                    <div className="row justify-content-xxl-end">
                                        <div className={item.col}>
                                            <div className="tp-slider-content tp-slider-content-two ">
                                                <span className="tp-slider-sub-title p-0">{item.sub_title}</span>
                                                <h2 className="tp-slider-title" style={{fontSize:'50px'}}>{item.title}</h2>
                                                <p>{item.info}</p>
                                                <div className="tp-slide-btn-box mt-45">
                                                <div className="slider-btn mr-30">
                                                    <Link  href="/contact" className="tp-btn-white">Get A Quote</Link>
                                                </div>
                                                <div className="slider-btn">
                                                    <Link href="/#products" className="tp-btn">Our Products</Link>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Slider> 
                </div>
            </div>
        </>
    );
};

export default SliderArea;