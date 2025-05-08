const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: true,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Products",
    link: "/services",
    sub_menus: [ 
      { link: "/product/steripro", title: "Steripro" }, 
      { link: "/product/steripro+", title: "Steripro+" },
      { link: "/product/steritower", title: "Steritower" },
      { link: "/product/sterifix", title: "Sterifix" }, 
      { link: "/product/steribox", title: "Steribox" },
      { link: "/product/steripower", title: "Steripower" }, 
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Service",
    link: "/services",
  }, 
  {
    id: 6,
    mega_menu: false,
    has_dropdown: true,
    title: "Blog",
    link: "/blog",
    // sub_menus: [
    //   { link: "/blog", title: "Blog" },
    //   { link: "/blog-details", title: "Blog Details" },
    // ],
  },
  
  {
    id: 7,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
  },
  
];
export default menu_data;
