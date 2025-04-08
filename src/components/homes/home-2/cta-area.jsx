import React from 'react';


const cta_content = {
    map_link: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14599.594381298903!2d90.42194549999999!3d23.822204699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1652595355816!5m2!1sen!2sbd",
    title: <>Our team is available to guide you in choosing the most suitable solution for your needs.</>,
    contact_info: [
        {
            id: 1, 
            icon: "far fa-envelope",
            socile: "Email",
            link:"support@steriwave-uv.com",
            contact: "support@steriwave-uv.com",
        },
        {
            id: 2, 
            icon: "fab fa-whatsapp",
            socile: "Whatsapp",
            link:"tel:(216)51 488 801",
            contact: "(216) 51 488 801",
        },

    ]

}
const {map_link, title, contact_info}  = cta_content


const CtaArea = () => {
    return (
        <>
            <div className="tp-cta-area black-bg cta-bg position-relative" id='contact' style={{backgroundImage: `url(/assets/img/bg/cta-bg.png)`, height: "600px"}}>
                <div className="cta-map">
                    <iframe src={map_link} style={{ height: "600px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-xl-6 col-lg-12">
                        <div className="tp-quote-box pl-80 pt-60 pb-60">
                            <div className="tp-section-box cta-map-section p-relative">
                                <span className="tp-section-subtitle right-white d-inline-block mb-10">get a quote</span>
                                <h2 className="tp-section-title mb-30">
                                     {title}
                                </h2>
                            </div>
                            <div className="tp-cta-main d-flex" style={{width:'700px'}}>
                                {contact_info.map((item, i)  => 
                                   <div key={i} className="tp-cta-box d-flex align-items-center">
                                        <div className="tp-cta-icon">
                                        <a href={item.link}><i className={item.icon}></i></a>
                                        </div>
                                        <div className="tp-cta-content">
                                        <label>{item.socile}</label>
                                        <a href={item.link}>
                                             {item.contact}
                                        </a>
                                        </div>
                                    </div>
                                )} 
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CtaArea;