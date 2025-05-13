const service_data = [
    // home 01
    // {
    //     id: 1,
    //     img: "/assets/img/services/x.jpg",
    //     icon:"flaticon-cctv-1",
    //     title:"Commercial CCTV System",
    //     description: <>Teachings of the great explorer of the truth, the master-builder of human happiness.</>,
    // },
    // {
    //     id: 2,
    //     img: "/assets/img/services/x1.jpg",
    //     icon:"flaticon-cctv",
    //     title:"Office & Industrial Security",
    //     description: <>Teachings of the great explorer of the truth, the master-builder of human happiness.</>,
    // },
    // {
    //     id: 3,
    //     img: "/assets/img/services/x.jpg",
    //     icon:"flaticon-cctv-9",
    //     title:"School & Hospital Security",
    //     description: <>Teachings of the great explorer of the truth, the master-builder of human happiness.</>,
    // },
    // home 02
    {
        id: "sterifix",
        sirial: "01",
        img: "/assets/img/services/x9.jpg",
        //icon:"flaticon-web-security",
        title:"SteriFix",
        description: "The SteriFix is our flagship fixed UVC disinfection solution, designed for continuous sterilization of spaces. Perfect for hospitals, clinics, and high-traffic areas requiring constant sanitization.",
        features: [
            "24/7 Continuous Operation",
            "Motion Sensor Safety System",
            "99.9% Pathogen Elimination",
            "Low Maintenance Requirements",
            "Energy Efficient Design",
            "Remote Monitoring Capability"
        ],
        specifications: {
            coverage: "Up to 400 sq ft",
            power: "110-240V AC",
            lifetime: "9000 hours",
            warranty: "2 years"
        }
    },
    {
        id: "steripro",
        sirial: "02",
        img: "/assets/img/services/A06.jpg",
        //icon:"flaticon-hospital",
        title:"SteriPro+",
        description: "SteriPro+ is our professional-grade mobile UVC sterilization unit, offering versatile disinfection solutions for various environments. Ideal for medical facilities, laboratories, and industrial settings.",
        features: [
            "Mobile Design for Flexibility",
            "360° Coverage",
            "Smart Programming Interface",
            "Multiple Safety Sensors",
            "Quick Disinfection Cycles",
            "Data Logging & Analytics"
        ],
        specifications: {
            coverage: "Up to 600 sq ft",
            power: "220V AC",
            lifetime: "12000 hours",
            warranty: "3 years"
        }
    },
    {
        id: "steritower",
        sirial: "03",
        img: "/assets/img/services/x8.jpg",
        //icon:"flaticon-school",
        title:"SteriTower",
        description: "The SteriTower is our high-capacity UVC disinfection tower, engineered for large-scale sterilization needs. Perfect for warehouses, manufacturing facilities, and large public spaces.",
        features: [
            "High-Power UVC Output",
            "Extended Range Coverage",
            "Industrial-Grade Construction",
            "Advanced Safety Features",
            "Programmable Operation Modes",
            "Real-time Monitoring System"
        ],
        specifications: {
            coverage: "Up to 1000 sq ft",
            power: "380V AC",
            lifetime: "15000 hours",
            warranty: "5 years"
        }
    },
    {
        id: "steripro+",
        sirial: "04",
        img: "/assets/img/services/x5.jpg",
        //icon:"flaticon-school",
        title:"SteriTower",
        description: "The Steripro+ is our high-capacity UVC disinfection tower, engineered for large-scale sterilization needs. Perfect for warehouses, manufacturing facilities, and large public spaces.",
        features: [
            "High-Power UVC Output",
            "Extended Range Coverage",
            "Industrial-Grade Construction",
            "Advanced Safety Features",
            "Programmable Operation Modes",
            "Real-time Monitoring System"
        ],
        specifications: {
            coverage: "Up to 1000 sq ft",
            power: "380V AC",
            lifetime: "15000 hours",
            warranty: "5 years"
        }
    },
    {
        id: "steribox",
        sirial: "05",
        img: "/assets/img/services/x7.jpg",
        //icon:"flaticon-school",
        title:"SteriTower",
        description: "The SteriBox is our high-capacity UVC disinfection tower, engineered for large-scale sterilization needs. Perfect for warehouses, manufacturing facilities, and large public spaces.",
        features: [
            "High-Power UVC Output",
            "Extended Range Coverage",
            "Industrial-Grade Construction",
            "Advanced Safety Features",
            "Programmable Operation Modes",
            "Real-time Monitoring System"
        ],
        specifications: {
            coverage: "Up to 1000 sq ft",
            power: "380V AC",
            lifetime: "15000 hours",
            warranty: "5 years"
        }
    },
    {
        id: "steripower",
        sirial: "06",
        img: "/assets/img/services/x5.jpg",
        //icon:"flaticon-school",
        title:"SteriTower",
        description: "The SteriPower is our high-capacity UVC disinfection tower, engineered for large-scale sterilization needs. Perfect for warehouses, manufacturing facilities, and large public spaces.",
        features: [
            "High-Power UVC Output",
            "Extended Range Coverage",
            "Industrial-Grade Construction",
            "Advanced Safety Features",
            "Programmable Operation Modes",
            "Real-time Monitoring System"
        ],
        specifications: {
            coverage: "Up to 1000 sq ft",
            power: "380V AC",
            lifetime: "15000 hours",
            warranty: "5 years"
        }
    },
    

    // home 02 features 
    {
        id: 7,
        sirial: "01",
        img: "/assets/img/services/x.jpg",
        //icon:"flaticon-wifi-router",
        title:"SteriTower",
    //     description: <>Advanced monitoring systems to track disinfection cycles, usage history, and performance metrics in real-time.</>,
    },
    {
        id: 8,
        sirial: "02",
        img: "/assets/img/services/x.jpg",
        //icon:"flaticon-cctv-camera-1",
        title:"SteriPro+",
        // description: <>Development of tailored disinfection schedules and protocols based on the specific needs of the facility.</>,
    },
    {
        id: 9,
        sirial: "03",
        img: "/assets/img/services/x5.jpg",
        //icon:"flaticon-approval",
        title:"SteriPower",
        // description: <>Guidance on transitioning to eco-friendly disinfection practices using UVC technology.</>,
    },
    {
        id: 10,
        sirial: "04",
        img: "/assets/img/services/x7.jpg",
        //icon:"flaticon-drone-3",
        title:"SteriBot",
        // description: <>Custom disinfection solutions for sensitive medical equipment, laboratory tools, and industrial machinery.</>,
    },

    // products page
    {
        id: 10,
        sirial: "00",
        img: "/assets/img/services/x.jpg",
        // icon:"flaticon-cctv-1",
        title:"STERI-BOX",
        // description: <>Teachings of the great explorer of the truth, the master-builder of human happiness.</>,
    },
    {
        id: 11,
        sirial: "00",
        img: "/assets/img/services/x.jpg",
        // icon:"tpservices__content",
        title:"STERI-FIX",
        // description: <>Teachings of the great explorer of the truth, the master-builder of human happiness.</>,
    },
    {
        id: 12,
        sirial: "00",
        img: "/assets/img/services/x9.jpg",
        //icon:"flaticon-wifi-router",
        title:"STERI-FIX",
        // description: <>Teachings of the great explorer of the truth, the master-builder of human happiness.</>,
    },
    {
        id: 13,
        sirial: "00",
        img: "/assets/img/services/x8.jpg",
        //icon:"flaticon-cloud",
        title:"STERI-PRO",
        // description: <>Teachings of the great explorer of the truth, the master-builder of human happiness.</>,
    },
    {
        id: 14,
        sirial: "00",
        img: "/assets/img/services/x5.jpg",
        //icon:"flaticon-cyber-security",
        title:"STERI-PRO +",
        // description: <>Teachings of the great explorer of the truth, the master-builder of human happiness.</>,
    },
    {
        id: 15,
        sirial: "00",
        img: "/assets/img/services/x7.jpg",
        //icon:"flaticon-shield",
        title:"STERI-POWER +",
        // description: <>Teachings of the great explorer of the truth, the master-builder of human happiness.</>,
    },


]
export default service_data