import React from 'react';


const footter_counter ={
    logo: "/assets/img/logo/4.png",
    counter_info: [
        {id: 1, cls: "text-md-right", count: 6, info: <> Log Reduction <br /> in 20 minutes for E.Colis</>,},
        {id: 2, cls: "", count: 25, info: <> hospitals equiped <br /> with our Sterilizers</>,},
        {id: 3, cls: "", count: 18000, info: <> sterilization  <br /> per lamp</>,},
    ]
}
const {logo, counter_info}  = footter_counter
const FooterCounter = () => {
    return (
        <> 
            <style jsx global>{`
                .tp-counter-logo {
                    display: flex;
                    align-items: center;
                    height: 100%;
                }
                .tp-counter-logo img {
                    max-width: 100px;
                    height: auto;
                    margin-bottom: 19px;
                }
            `}</style>
            <div className="tp-footer-counter-area theme-bg pt-25">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-6 col-md-6  text-lg-start">
                        <div className="tp-counter-logo">
                            <img src={logo} alt="theme-pure" />
                        </div>
                        </div>
                        {counter_info.map((item, i)  => 
                            <div key={i} className={`col-xl-3 col-lg-6 col-md-6 ${item.cls}`}>
                                <div className="footer-counter-content d-md-flex align-items-center mb-30">
                                    <h2>{item.count}</h2>
                                    <div className="counter-text">
                                        <h3>{item.info}</h3>
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

export default FooterCounter;