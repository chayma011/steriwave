import SocialLinks, { CopyRight } from '@/src/common/social-links';
import React, { useState } from 'react';
import emailjs from "emailjs-com";

const FooterSubscribe = () => {
    const [message, setMessage] = useState("");
    const [responseMessage, setResponseMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send(
            "service_mqcurss", 
            "template_8l2q2ff", 
            { user_message: message }, 
            "18aw1zMtqxomhpU1E"
        ).then(() => {
            setResponseMessage("Message sent successfully!");
            setMessage("");
        }).catch((err) => {
            console.error(err);
            setResponseMessage("Failed to send message.");
        });
    };

    return (
        <div className="footer-subscribe">
            {/* <form onSubmit={sendEmail}>
                <textarea 
                    placeholder="Write your message here..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <button type="submit"> 
                    <i className="far fa-paper-plane"></i>
                </button>
            </form>
            {responseMessage && <p>{responseMessage}</p>} */}
        </div>
    );
};

const footer_content = {
    about: "About Us",
    about_des: <>STERIWAVE is a Tunisian startup specializing in advanced sterilization and disinfection. Our mission is to provide safe, effective, and accessible disinfection solutions for the medical and industrial sectors.</>,
    get_in_touch: "Get In Touch",
    location: <>Khzema, Sousse, <br /> 4030, TUNISIA</>,
    office_time: <>Mon – Fri: 8.00 – 17.00 </>,
    phone: <>+216 50 055 899 <br /> +216 51 488 801</>,
    pages_title: "Main Pages",
    pages: [
        { title: "About Us", link: "/about" },
        { title: "Customer", link: "#" },
        { title: "Service", link: "/service" },
        { title: "Products", link: "#" },
        { title: "Best Seller", link: "#" },
        { title: "Careers", link: "#" },
        { title: "Privacy", link: "#" },
        { title: "Location", link: "#" },
        { title: "Our Expert", link: "#" },
    ]
};

const { about, about_des, get_in_touch, location, office_time, phone, pages_title, pages } = footer_content;

const Footer = ({ style_2 }) => {
    return (
        <footer>
            <div className={`footer-widget-area pt-90 pb-50 ${style_2 ? "footer-area-white" : "footer-bg "}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className={`${style_2 ? "footer-widget-2" : "footer-widget"} footer-col-1 mb-50`}>
                                <h3 className="footer-widget-title">{about}</h3>
                                <p>{about_des}</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className={`${style_2 ? "footer-widget-2" : "footer-widget"} footer-col-2 mb-50`}>
                                <h3 className="footer-widget-title">{get_in_touch}</h3>
                                <div className="footer-contact">
                                    <div className="footer-contact-item">
                                        <p>{location}</p>
                                    </div>
                                    <div className="footer-contact-item">
                                        <p>{office_time}</p>
                                    </div>
                                    <div className="footer-contact-item">
                                        <p>{phone}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className={`footer-widget ${style_2 ? "footer-widget-2" : ""} footer-col-3 mb-50`}>
                                <h3 className="footer-widget-title">{pages_title}</h3>
                                <ul>
                                    {pages.map((item, i) =>
                                        <li key={i}><a href={item.link}>{item.title}</a></li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className={`footer-widget ${style_2 ? "footer-widget-2 footer-col-3" : "footer-col-4"} mb-50`}>
                                {/* <h3 className="footer-widget-title">Get Newsletter</h3>
                                <p>Sign up today for hints, tips & the latest product news</p> */}
                                <FooterSubscribe />
                                <h3 className="footer-widget-title">Social Links</h3>

                                <div className="footer-social mt-20">
                                    <SocialLinks />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area theme-bg pt-20 pb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-7 text-lg-start col-12 text-center ">
                            <div className="copyright-text">
                                <p><CopyRight /> </p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 text-lg-end col-12 text-center ">
                            <div className="footer-menu">
                                <ul>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms of Use</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
