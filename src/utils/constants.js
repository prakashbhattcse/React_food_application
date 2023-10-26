import location from "../utils/images/location.png"
import mail from "../utils/images/mail.png"
import phone from "../utils/images/phone.png"


export const LOGO_URL = "https://imgs.search.brave.com/zpRqb0pUUyWgLHsGsasDu95wQ33nrvqxTaAYdVSFc6g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2NoaWxpcy1wbmct/bG9nby9zeW1ib2wt/cmVkLWhvdC1jaGls/aS1wZXBwZXJzLWxv/Z28tcG5nLTI3LnBu/Zw";


export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
// https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/                        
export const MENU_API =
    // " https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5961279&lng=77.1587375&restaurantId="
    // "https://prakashbhattcse.github.io/food_website_api/"
    "https://prakashbhattcse.github.io/food_website_api/"
export const resObj = [
    {
        "info": {
            "id": "50471",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.3,
            "sla": {
                "deliveryTime": 24,
            },

        },
    },
    {
        "info": {
            "id": "57500",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "xyqsylvpyqv4qoskwgmf",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.1,

            "sla": {
                "deliveryTime": 25,
            },
        }
    },
    {
        "info": {
            "id": "19045",
            "name": "Subway",
            "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,

            "sla": {
                "deliveryTime": 34,
            },
        }
    },
    {
        "info": {
            "id": "25806",
            "name": "Behrouz Biryani - Royal & Safe",
            "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Biryani",
                "Mughlai",
                "North Indian",
                "Lucknowi",
                "Hyderabadi",
                "Kebabs",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,

            "sla": {
                "deliveryTime": 34,
            },
        }
    },
    {
        "info": {
            "id": "25805",
            "name": "Faasos - Wraps & Rolls",
            "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Kebabs",
                "Fast Food",
                "Snacks",
                "North Indian",
                "American",
                "Healthy Food",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,

            "sla": {
                "deliveryTime": 34,
            },
        }
    },
    {
        "info": {
            "id": "25807",
            "name": "Oven Story Pizza",
            "cloudinaryImageId": "f986df6f1a1fcf2ff24d2eaf44d570a7",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.1,

            "sla": {
                "deliveryTime": 35,

            },
        }
    },
    {
        "info": {
            "id": "62960",
            "name": "LunchBox - Meals and Thalis",
            "cloudinaryImageId": "uqurt0jeyhdubr0laacn",
            "locality": "Sector 8",
            "areaName": "R K Puram",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Punjabi",
                "Healthy Food",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "62960",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 6500
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 6500
            },
            "parentId": "4925",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 6.8,
                "serviceability": "SERVICEABLE",
                "slaString": "36 mins",
                "lastMileTravelString": "6.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-09-08 03:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹399",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-sector-8-r-k-puram-delhi-62960",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "87906",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "Palate of Delhi",
            "areaName": "Chanakya Puri",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Ice Cream"
            ],
            "avgRating": 4.9,
            "veg": true,
            "feeDetails": {
                "restaurantId": "87906",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4900
            },
            "parentId": "5588",
            "avgRatingString": "4.9",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-09-07 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "ABOVE ₹1000",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-palate-of-chanakya-puri-delhi-87906",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "32288",
            "name": "Wow! Momo",
            "cloudinaryImageId": "0984acc0ed7b914206dbbcb90297becc",
            "locality": "Dhaula Kuan",
            "areaName": "Dhaula Kuan",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Tibetan",
                "Healthy Food",
                "Asian",
                "Chinese",
                "Snacks",
                "Continental",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "32288",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4900
            },
            "parentId": "1776",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-09-07 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/wow-momo-dhaula-kuan-delhi-32288",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "155436",
            "name": "The Good Bowl",
            "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
            "locality": "Sector 8",
            "areaName": "R K Puram",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "North Indian",
                "Pastas",
                "Punjabi",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "155436",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 6500
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 6500
            },
            "parentId": "7918",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 6.8,
                "serviceability": "SERVICEABLE",
                "slaString": "32 mins",
                "lastMileTravelString": "6.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-09-08 03:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-good-bowl-sector-8-r-k-puram-delhi-155436",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "69460",
            "name": "Starbucks Coffee",
            "cloudinaryImageId": "4df3497f1460dfd1ecd8125222f6d362",
            "locality": "Sangam Courtyard",
            "areaName": "RK Puram",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Beverages",
                "Cafe",
                "Snacks",
                "Desserts",
                "Bakery",
                "Ice Cream"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "69460",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 6500
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 6500
            },
            "parentId": "195515",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 6.4,
                "serviceability": "SERVICEABLE",
                "slaString": "32 mins",
                "lastMileTravelString": "6.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-09-07 23:59:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "ABOVE ₹800",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/starbucks-coffee-sangam-courtyard-rk-puram-delhi-69460",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "372110",
            "name": "MoonMoon - Juicy Crustwiches",
            "cloudinaryImageId": "gzd8fvmetzmlguxiqbvc",
            "locality": "Basant Lok",
            "areaName": "Mehrauli",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "American",
                "Snacks",
                "Beverages"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "372110",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 6500
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 6500
            },
            "parentId": "21959",
            "avgRatingString": "4.2",
            "totalRatingsString": "500+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 6.6,
                "serviceability": "SERVICEABLE",
                "slaString": "35 mins",
                "lastMileTravelString": "6.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-09-08 03:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/moonmoon-juicy-crustwiches-basant-lok-mehrauli-delhi-372110",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "395380",
            "name": "L'Opera",
            "cloudinaryImageId": "f60300943f5c60b3b888af6dbfb77ca3",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Bakery",
                "Cafe",
                "French",
                "Desserts",
                "Continental"
            ],
            "avgRating": 4.4,

            "sla": {
                "deliveryTime": 33,

            },
        }
    },
    {
        "info": {
            "id": "426668",
            "name": "Nirula's",
            "cloudinaryImageId": "94c82b9d46792c198fff64899ff05bd2",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Pizzas",
                "Burgers",
                "Ice Cream",
                "North Indian",
                "Fast Food",
                "Pastas",
                "Beverages"
            ],
            "avgRating": 4.3,

            "sla": {
                "deliveryTime": 33,
            },
        }
    },
    {
        "info": {
            "id": "396096",
            "name": "NOTO - Healthy Ice Cream",
            "cloudinaryImageId": "544f9e6dce1efb7054e4ac5d98aba049",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Ice Cream"
            ],
            "avgRating": 4.3,
            "sla": {
                "deliveryTime": 24,
            },
        }
    },
    {
        "info": {
            "id": "19436",
            "name": "34 Chowringhee Lane",
            "cloudinaryImageId": "zgg2ixzoe1rujcic0dr1",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Fast Food",
                "Snacks",
                "Chinese",
                "Tandoor",
                "Punjabi",
                "Seafood",
                "Beverages",
                "Desserts",
                "Barbecue",
                "Grill",
                "Mughlai",
                "Indian",
                "North Indian",
                "Continental"
            ],
            "avgRating": 3.7,
            "sla": {
                "deliveryTime": 34,
            },
        }
    },
    {
        "info": {
            "id": "21314",
            "name": "Barista Coffee",
            "cloudinaryImageId": "9374825cb68f0263bc11702df311f99d",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Beverages",
                "Snacks",
                "Desserts"
            ],
            "avgRating": 4.3,
            "sla": {
                "deliveryTime": 35,
            },

        }
    },
    {
        "info": {
            "id": "51191",
            "name": "Insta Pizza",
            "cloudinaryImageId": "fm431uudye8zh8lxnccp",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Beverages",
                "Desserts"
            ],
            "avgRating": 4.1,

            "sla": {
                "deliveryTime": 32,
            },
        }
    },
    {
        "info": {
            "id": "35884",
            "name": "Sweet Truth - Cake and Desserts",
            "cloudinaryImageId": "4a3b48488e3aa9bda13efd8cfcd95284",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "Snacks",
                "Bakery",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "4444",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 29,
            },

        }
    },
    {
        "info": {
            "id": "253709",
            "name": "McDonald's",
            "cloudinaryImageId": "6dc3ed2ca21d71acff7c2a51dfe4c720",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "American"
            ],
            "avgRating": 4.4,
            "sla": {
                "deliveryTime": 37,
            },

        }
    }
]


export const colors = {
    background: 'bg-gray-900',
    formBackground: 'bg-gray-800',
    inputBackground: 'bg-gray-700',
    textColor: 'text-white',
    buttonColor: 'bg-red-600',
};


export const contactData = [
    {
        id: 1,
        icon: location,
        title: 'We are Here',
        phone: 'New Delhi, India',
    },
    {
        id: 2,
        icon: mail,
        title: 'Mail Us',
        phone: 'foodie@mail.com',
    },
    {
        id: 3,
        icon: phone,
        title: 'Phone Us',
        phone: '+91 51245672677',
    },
];


