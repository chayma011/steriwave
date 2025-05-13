import Link from "next/link.js";
import React, { useEffect } from "react";
import menu_data from "./menu-data";
import { useRouter } from 'next/router';

const NavMenu = () => {
  const router = useRouter();

  const handleClick = async (e, link) => {
    // Check if the link is an internal anchor with the format "/#section"
    if (link.startsWith('/#')) {
      e.preventDefault();
      const sectionId = link.split('/#')[1];
      
      if (router.pathname !== '/') {
        // If we're not on the home page, navigate to home with the hash
        await router.push(`/${link}`);
      } else {
        // If we're already on the home page, just scroll
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Handle scroll when coming from another page
  useEffect(() => {
    if (router.asPath.startsWith('/#')) {
      const sectionId = router.asPath.split('/#')[1];
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [router.asPath]);

  return (
    <>
      <ul style={{display: 'flex', justifyContent: 'center', gap: '30px'}}>
        {menu_data.map((item) => (
          <li key={item.id} className={item.has_dropdown ? "has-dropdown" : ""}>
            <Link href={item.link} onClick={(e) => handleClick(e, item.link)}>{item.title}</Link>{" "}
            {item.sub_menus && 
            <ul className="submenu">
              {item.sub_menus.map((sub, i) => (
                <li key={i}>
                  <Link href={sub.link} onClick={(e) => handleClick(e, sub.link)}>{sub.title}</Link>
                </li>
              ))}
            </ul>
            }
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
