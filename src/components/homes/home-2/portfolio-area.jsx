import portfolio_data from '@/src/data/portfolio-data';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import ImagePopup from '@/src/modals/ImagePopup';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// data
const categories = [
"All",
...new Set(portfolio_data.map((item) => item.category)),
]; 

const uniquePortfolioItem = portfolio_data.filter(
   (arr, index, self) =>
     index === self.findIndex((t) => t.img === arr.img && t.State === arr.State)
 );

const PortfolioArea = () => {
   const [activeCategory, setActiveCategory] = useState("All");
   const [items, setItems] = useState(uniquePortfolioItem); 
  
   const filterItems = (cateItem) => {
     setActiveCategory(cateItem);
  
     if (cateItem === "All") {
       return setItems(uniquePortfolioItem);
     } else {
       const findItems = portfolio_data.filter((findItem) => {
         return findItem.category == cateItem;
       });
       setItems(findItems);
     }
   };

   // photoIndex
   const [photoIndex, setPhotoIndex] = useState(0);

   // image open state
   const [isOpen, setIsOpen] = useState(false);

   // handleImagePopup
   const handleImagePopup = (i) => {
     setPhotoIndex(i);
     setIsOpen(true);
   };
    
   //  images
   const img = portfolio_data.map((item) => item.img);

   // Slider settings
   const settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 3000,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
   };

   return (
     <>
       <div className="tp-portfolio-area pt-110 pb-90">
         <div className="container">
           <div className="row text-center">
             <div className="col-xl-12">
               <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                 <span className="tp-section-subtitle d-inline-block pre mb-10">portfolio</span>
                 <h2 className="tp-section-title">Some Case Studies</h2>
               </div>
             </div>
           </div>
           <div className="row">
             <div className="col-12 text-center">
               <div className="tp-port-button masonary-menu">
                 {categories.map((cate, i) => (
                   <button
                     onClick={() => filterItems(cate)}
                     key={i}
                     className={`${cate === activeCategory ? "active" : ""}`}
                   >
                     <span>{cate}</span>
                   </button>
                 ))}  
               </div>
             </div>
           </div>
           <div className="row pt-40">
             <div className="col-12">
               <Slider {...settings}>
                 {items.map((item, i) => (
                   <div key={i} className="px-2">
                     <div className="tp-port-item">
                       <div className="tp-case-img fix">
                         <img src={item.img} alt={item.title} className="img-fluid w-100" style={{height: '300px', objectFit: 'cover'}} />
                       </div>
                       <div className="tp-port-content">
                         <span className="port-subtitle">{item.subtitle}</span>
                         <h3 className="port-title"><Link href="/portfolio-details">{item.title}</Link></h3>
                       </div>
                       <div className="tp-port-icon">
                         <button className="popup-image" onClick={() => handleImagePopup(i)}>
                           <i className="far fa-long-arrow-right"></i>
                         </button>
                       </div>
                     </div>
                   </div>
                 ))}
               </Slider>
             </div>
           </div>
         </div>
       </div>

       {/* image light box start */}
       {isOpen && (
         <ImagePopup
           images={img}
           setIsOpen={setIsOpen}
           photoIndex={photoIndex}
           setPhotoIndex={setPhotoIndex}
         />
       )}
       {/* image light box end */}
     </>
   );
};

export default PortfolioArea;