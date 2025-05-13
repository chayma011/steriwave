const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
    // sub_menus: [ 
    //   { link: "/product/steripro", title: "About" }, 
    //   { link: "/product/steripro+", title: "Mission" },
    //   { link: "/product/steritower", title: "Vision" },
       
    // ],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Products",
    link: "/services",
    sub_menus: [ 
      { link: "/products/steripro", title: "Steripro" }, 
      { link: "/products/steripro+", title: "Steripro+" },
      { link: "/products/steritower", title: "Steritower" },
      { link: "/products/sterifix", title: "Sterifix" }, 
      { link: "/products/steribox", title: "Steribox" },
      { link: "/products/steripower", title: "Steripower" }, 
    ],
  },
  // {
  //   id: 4,
  //   mega_menu: false,
  //   has_dropdown: false,
  //   title: "Service",
  //   link: "/services",
  // }, 
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
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
