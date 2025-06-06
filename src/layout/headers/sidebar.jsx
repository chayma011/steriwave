import SocialLinks from '@/src/common/social-links';
import Link from 'next/link';
import React from 'react';
import MobileMenus from './mobile-menus';

const Sidebar = ({isOpen, setIsOpen}) => {
    return (
        <> 
            <div className={`tp-sidebar-menu ${isOpen && "sidebar-opened"}`}>
                <button className="sidebar-close"><i className="fal fa-times"></i></button>
                <div onClick={() => setIsOpen(false)} className="side-logo mb-20">
                    <Link href="/"><img src="/assets/img/logo/5.png" alt="logo" /></Link>
                </div>
                <div className="mobile-menu mean-container">
                    <MobileMenus />
                    <div className="sidebar-title">
                        <h3>CONTACT US</h3>
                    </div>
                    <ul className="sidebar-list">
                        <li>Khzema, Sousse, Tunisia</li>
                        <li>+216 51 488 801</li>
                        <li>contact@steriwave-uv.com</li>
                    </ul>
                    <div className="tp-sidebar-social">
                        <SocialLinks />  
                    </div>
                </div>
            </div>
            <div onClick={() => setIsOpen(false)} className={`body-overlay ${isOpen && "opened"}`}></div>
        </>
    );
};

export default Sidebar;