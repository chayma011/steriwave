import CommentForm from '@/src/forms/comment-form';
import React from 'react';
import CommentBox from './comment-box';
import SidebarSearch from '@/src/forms/sidebar-search';
import RecentPost from '../blog/recent-post';
import Category from '../blog/category';
import Tags from '../blog/tags';
import Link from 'next/link';


const post_content = {
    des_1: <>Hey EVS Technicians did you know that autonomous UVC devices need to be controlled by a human or trained technician like yourself to be effective? While they may seem to require the least attention, these devices often struggle with obstacle navigation, requiring a technician to clear the room before disinfection and reset it afterward, which disrupts workflow. </>,

    img: "/assets/img/news/A.jpg",
    // title: "Sectox is the only theme you will ever need",

    des_2: <>Additionally, room mapping can be tedious and often needs to be redone as room layouts change, while the devices rely on limited two-hour battery life. Without confirmation that a lethal UVC dose is being delivered to surfaces, these devices demand significant manual intervention, making them inefficient and unreliable for thorough disinfection. Trust Steriwave, the leader in evidence-based disinfection, for ease of use, efficacy, and streamlined workflow.</>,
    // des_3: <>Cheeky bugger cracking goal starkers lemon squeezy lost the plot pardon me no biggie the BBC burke gosh boot so I said wellies, zonked a load of old tosh bodge barmy skive off he legged it morish spend a penny my good sir wind up hunky-dory. Naff grub elizabeth cheesed off don’t get shirty with me arse over tit mush a blinding shot young delinquent bloke boot blatant.</>,    
}
const {des_1, img, title, des_3, des_2}  = post_content

const PostboxArea = () => {
    return (
        <>
            <div className="postbox__area pt-120 pb-120">
                <div className="container">
                <div className="row">
                    <div className="col-xxl-8">
                        <div className="postbox__wrapper pr-20">

                            <article className="postbox__item format-image mb-50 transition-3">
                            <div className="postbox__content">
                                <div className="postbox__meta">
                                    <span><i className="far fa-calendar-check"></i> July 21, 2020 </span>
                                    <span><a href="#"><i className="far fa-user"></i> jamil rayhan</a></span>
                                    <span><a href="#"><i className="fal fa-comments"></i> 02 Comments</a></span>
                                </div>
                                <h3 className="postbox__title">
                                    Autonomous UVC Needs Significant Human Intervention To Be Effective
                                </h3>
                                <div className="postbox__text">
                                    <p>{des_1}</p>        
                                    <p><img src={img} alt="theme-pure" /></p>    
                                    <h3>{title}</h3>    
                                    <p>{des_2}</p>    
                                    <p>{des_3}</p>

                                </div>
    
                                <div className="postbox__tag tagcloud">
                                    <span>Post Tags :</span>
                                    <Link href="/blog-details">Fresh</Link>
                                    <Link href="/blog-details">Hospitals</Link>
                                    <Link href="/blog-details">Medical</Link>
                                </div>
                            </div>
                            </article>

                            <div className="postbox__comment mb-65">
                            <h3 className="postbox__comment-title">3 Comments</h3>
                            <CommentBox /> 
                            </div>
                            <div className="postbox__comment-form">
                                <h3 className="postbox__comment-form-title">Write a comment</h3>
                                <CommentForm /> 
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
                                    <h4>270x240</h4>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            
        </>
    );
};

export default PostboxArea;