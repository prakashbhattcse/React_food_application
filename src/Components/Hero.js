import React, { useState, useEffect } from 'react';
import { CDN_URL } from '../utils/constants';

const Hero = () => {
    const [title, setTitle] = useState();
    const [activeIndex, setActiveIndex] = useState(0);
    const [bannerActiveIndex, setBannerActiveIndex] = useState(0);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5961279&lng=77.1587375&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch("https://prakashbhattcse.github.io/food_website_api/hero_api.json");
        const json = await data.json();
        setTitle(json.data.cards);
    };
    


    const banner = title?.[0]?.card?.card?.imageGridCards?.info;
    const foodItems = title?.[1]?.card?.card;


    const handleNext = () => {
        if (activeIndex < foodItems.imageGridCards.info.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    return (
        <>
            <div className="flex w-[90%] m-auto mt-7 flex-col">

                {/* BANNER SECTION */}

                <div className="flex flex-row gap-2 mt-5 mb-9">
                    {banner?.map((item, i) =>
                        <div key={i} className={`flex flex-col ${i >= bannerActiveIndex && i < bannerActiveIndex + 4 ? 'block' : 'hidden'}`}>
                            <img src={CDN_URL + item.imageId} alt="" />
                        </div>
                    )}
                </div>


                {/* FOOD ITEMS CATEGORY SECTION */}
                <h1 className='font-bold text-xl text-red-600'>{foodItems?.header?.title}</h1>
                <div className='flex justify-end'>
                    <button onClick={handlePrev} className='mr-2 text-3xl'>◀️</button>
                    <button onClick={handleNext} className='mr-2 text-3xl'>▶️</button>
                </div>
                <div className='flex flex-row'>
                    {foodItems?.imageGridCards?.info?.map((item, i) =>
                        <div key={i} className={`flex flex-col ${i >= activeIndex && i < activeIndex + 9 ? 'block' : 'hidden'}`}>
                            <img src={CDN_URL + item.imageId} alt="" className='w-[10rem]' />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Hero;










// {
//     "imageGridCards": {
//         "info": [
//             {
//                 "id": "762797",
//                 "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
//                 "action": {
//                     "link": "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
//                     "text": "Burgers",
//                     "type": "WEBLINK"
//                 },
//                 "entityType": "BANNER",
//                 "accessibility": {
//                     "altText": "restaurants curated for burger",
//                     "altTextCta": "open"
//                 },
//                 "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
//                 "frequencyCapping": {}
//             },
//             {
//                 "id": "750582",
//                 "imageId": "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
//                 "action": {
//                     "link": "https://www.swiggy.com/collections/83645?collection_id=83645&tags=layout_CCS_NorthIndian&type=rcv2",
//                     "text": "North Indian",
//                     "type": "WEBLINK"
//                 },
//                 "entityType": "BANNER",
//                 "accessibility": {
//                     "altText": "restaurants curated for north indian",
//                     "altTextCta": "open"
//                 },
//                 "entityId": "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian",
//                 "frequencyCapping": {}
//             },

//         ],
// }

// }

