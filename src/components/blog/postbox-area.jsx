import SidebarSearch from '@/src/forms/sidebar-search';
import VideoPopup from '@/src/modals/video-popup';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import RecentPost from './recent-post';
import Category from './category';
import Tags from './tags';


const postbox_content = {
    post_data : [
        {
            id: 1, 
            img: "/assets/img/news/A.jpg",
            video: false,
            imgSlider: false,
            date: "July 21, 2020",
            post_by: "jamil rayhan",
            comments: "02 Comments",
            title: <>The Science Behind UVC Sterilization: How It Works?</>,
            description: <>Explain the principles of UVC light (254 nm wavelength) and how it disrupts the DNA/RNA of microorganisms.<br/> Discuss the difference between UVC, UVA, and UVB.<br/>Highlight why UVC is effective against bacteria, viruses, and fungi.</>,

        },
        {
            id: 2,  
            img: "/assets/img/news/A.jpg",
            imgSlider: false,
            date: "July 21, 2020",
            post_by: "jamil rayhan",
            comments: "02 Comments",
            title: <>UVC Sterilization in Hospitals: Reducing Healthcare-Associated Infections (HAIs)</>,
            description: <>Explore how UVC technology is used in hospitals to disinfect operating rooms, ICUs, and patient rooms.<br/> Share statistics on the reduction of HAIs with UVC sterilization.<br/>Mention WHO and CDC recommendations for UVC use in healthcare settings.</>,

        },
        {
            id: 3, 
            img: "",
            video: false,
            imgSlider: [
                "/assets/img/news/A1.jpg",
                "assets/img/news/A2.jpg",
                "assets/img/news/A09.jpg", 
            ],
            date: "July 21, 2020",
            post_by: "jamil rayhan",
            comments: "02 Comments",
            title: <>The Role of UVC Sterilization in the Food Industry</>,
            description: <>Explain how UVC is used to disinfect food processing equipment, packaging, and storage areas.<br/>Discuss compliance with HACCP and FDA standards.<br/>Share case studies or data on mold and bacteria reduction in food facilities.</>,

        },
    ],

}
const {post_data}  = postbox_content

const setting = {
    slidesToShow: 1,
    fade:false,
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


const PostboxArea = () => {
    const sliderRef = useRef(null);
    const [isVideoOpen,setIsVideoOpen] = useState(false);


    return (
        <>
            <section className="postbox__area pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <div className="postbox__wrapper pr-20">
                                {post_data.map((item, i) => 
                                    <article key={i} className="postbox__item format-image mb-50 transition-3">
                                        {item.img && 
                                            <div className="postbox__thumb w-img">
                                                <Link href="/blog-details">
                                                    <img src={item.img} alt="theme-pure" />
                                                </Link>
                                            </div>
                                        }
                                        {item.video && 
                                            <div className="postbox__thumb postbox__video w-img p-relative">
                                                <Link href="/blog-details">
                                                    <img src="assets/img/news/blog-details-2.jpg" alt="theme-pure" />
                                                </Link>
                                                <button onClick={()=> setIsVideoOpen(true)}   
                                                className="play-btn pulse-btn popup-video"><i className="fas fa-play"></i></button>

                                                {/* video modal start */}
                                                <VideoPopup
                                                isVideoOpen={isVideoOpen}
                                                setIsVideoOpen={setIsVideoOpen}
                                                videoId={"ZShulVioUqg"}
                                                />
                                                {/* video modal end */}
                                            </div>
                                            
                                        }
                                        {item.imgSlider && 
                                        <div className="postbox__thumb postbox__slider w-img p-relative">
                                            <div className="swiper-wrapper blog-slider-active">
                                                <button onClick={() => sliderRef.current?.slickPrev()} type="button" className="slick-prev slick-arrow"><i className="far fa-long-arrow-left"></i></button>
                                                <button onClick={() => sliderRef.current?.slickNext()} type="button" className="slick-next slick-arrow"><i className="far fa-long-arrow-right"></i></button>
                                                <Slider {...setting} ref={sliderRef}>
                                                    {item.imgSlider?.map((img, i) => 
                                                        <div key={i} className="postbox__slider-item">
                                                            <img src={img} alt="theme-pure" />
                                                        </div>
                                                    )}
                                                </Slider> 
                                            </div>
                                        </div>
                                        }
                                        <div className="postbox__content">
                                            <div className="postbox__meta">
                                                <span><i className="far fa-calendar-check"></i>{item.date}</span>
                                                <span><a href="#"><i className="far fa-user"></i>{item.post_by}</a></span>
                                                <span><a href="#"><i className="fal fa-comments"></i>{item.comments}</a></span>
                                            </div>
                                            <h3 className="postbox__title">
                                                <Link href="/blog-details">{item.title}</Link>
                                            </h3>
                                            <div className="postbox__text">
                                                <p>{item.description}</p>
                                            </div>
                                            <div className="post__button">
                                                <Link className="tp-btn" href="/blog-details">READ MORE</Link>
                                            </div>
                                        </div>
                                    </article>    
                                )}  

                                <div className="basic-pagination">
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link href="/blog">
                                                <i className="far fa-angle-left"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog">1</Link>
                                            </li>
                                            <li>
                                                <span className="current">2</span>
                                            </li>
                                            <li>
                                                <Link href="/blog">3</Link>
                                            </li>
                                            <li>
                                                <Link href="/blog">
                                                <i className="far fa-angle-right"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>                                
                            </div>
                        </div>

                        <div className="col-xxl-4 col-xl-4 col-lg-4">
                            <div className="sidebar__wrapper"> 
                                <SidebarSearch /> 
                                <RecentPost /> 
                                <Category /> 
                                <Tags /> 
                                <div className="sidebar__widget mb-40">
                                <h3 className="sidebar__widget-title">Sponsor Adds</h3>
                                <div className="sidebar__banner w-img p-relative text-center">
                                    <img src="/assets/img/news/A08.jpg" alt="theme-pure" />
                                    <div className="sidebar__banner-content">
                                        {/* <h4>270x240</h4> */}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
         </section>

        </>
    );
};

export default PostboxArea;