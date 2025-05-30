import React from 'react';

// contact info data
const contact_info_data = [
    {
        id: 1, 
        icon: "fas fa-phone-alt",
        title: "Call Us Here",
        info_1: "(216) 51 488 801",
        info_2: "+216 51 488 801",
        link_1: "tel:(216)51488801,+21651488801",
        link_2: "tel:1234162442",
    },
    {
        id: 2, 
        icon: "fas fa-envelope",
        title: "Email Address",
        info_1: "contact@steriwave-uv.com",
        info_2: "jobs.webexample.com",
        link_1: "mailto:contact@steriwave-uv.comjobs.webexample.com",
        link_2: "mailto:jobs.webexample.com",
    },
    {
        id: 3, 
        icon: "fas fa-map-marker-alt",
        title: "Call Us Here",
        info_1: "Sousse,Tunisia,",
        info_2: "KSA, Qatar, Tunisia",
        link_1: "#",
        link_2: "#",
    },
    {
        id: 4, 
        icon: "fal fa-share-alt",
        title: "Social Connect",
        info_1: "skype.com/humble.cclinkdin.com",
        info_2: "",
        link_1: "",
        link_2: "",
    },

]

const ContactInfo = () => {
    return (
        <>
           <div className="tp-contact-info pb-90">
                <div className="container">
                    <div className="row contact-last-child">
                        {contact_info_data.map((item, i) => 
                            <div key={i} className="col-xl-3 col-lg-3 col-md-6">
                                <div className="contact-info-item text-center mb-30">
                                    <i className={item.icon}></i>
                                    <h5>{item.title}</h5>
                                    <a href={item.link_1}>{item.info_1}<br /></a>
                                    <a href={item.link_2}>{item.info_2}</a>
                                </div>
                             </div>
                        )} 
                    </div>
                </div>
            </div> 
        </>
    );
};

export default ContactInfo;