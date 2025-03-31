import React from 'react';


const service_data = [
    {
        id: 1, 
        icon: "flaticon-secure",
        title: "Eco-Friendly Disinfection Consulting",
        description: <>Guidance on transitioning to eco-friendly disinfection practices using UVC technology.</>,
    },
    {
        id: 2, 
        icon: "flaticon-security-camera",
        title: "Custom Disinfection Protocols",
        description: <>Development of tailored disinfection schedules and protocols based on the specific needs of the facility.</>,
    },
    {
        id: 3, 
        icon: "flaticon-settings",
        title: "UVC Sterilization for Specialized Equipment",
        description: <>Custom disinfection solutions for sensitive medical equipment, laboratory tools, and industrial machinery.</>,
    },
    {
        id: 4, 
        icon: "flaticon-star-1",
        title: "Remote Monitoring and Data Analytics",
        description: <>Advanced monitoring systems to track disinfection cycles, usage history, and performance metrics in real-time.</>,
    },
]

const ServiceArea = () => {
    return (
        <>
            <div className="tp-process-area grey-bg pt-115 pb-90 ">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-xl-12">
                        <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                            <span className="tp-section-subtitle d-inline-block pre mb-10">Services</span>
                            <h2 className="tp-section-title">
                                What We Provide
                            </h2>
                        </div>
                        </div>
                    </div>
                    <div className="row counter-row">
                        {service_data.map((item, i)  => 
                            <div key={i} className=" col-xxl-3 col-xl-3 col-lg-6 col-md-6 mb-30">
                                <div className="tpprocess-hm-4 p-relative">
                                    <div className="process-content"></div>
                                    <span className="flaticon-secure"><i className={item.icon}></i></span>
                                    <div className="tp-process-contnt-4">
                                        <h6>{item.title}</h6>
                                        <p className="m-0">{item.description}</p>
                                    </div>
                                </div>
                            </div>                        
                        )} 
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceArea;