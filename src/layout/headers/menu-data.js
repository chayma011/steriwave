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
    link: "/#about",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Products",
    link: "/#products",
    sub_menus: [ 
      { link: "/products/sterifix", title: "Sterifix" }, 
      { link: "/products/steripro", title: "Steripro" },
      { link: "/products/steritower", title: "Steritower" },
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Service",
    link: "/#services",
  }, 
  {
    id: 6,
    mega_menu: false,
    has_dropdown: true,
    title: "Blog",
    link: "/#blog",
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
    link: "/#contact",
  },
  
];
export default menu_data;
