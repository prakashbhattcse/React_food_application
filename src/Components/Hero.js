// import React from 'react'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import { CDN_URL } from '../utils/constants'

// const Hero = () => {

//     const [title, settitle] = useState()

//     useEffect(() => {

//         fetchData();
//     }, [])

//     const fetchData = async () => {

//         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5961279&lng=77.1587375&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
//         const json = await data.json();

//         // const title = json?.data?.cards[1]?.card?.card.imageGridCards.info
//         const title = json?.data?.cards[1]?.card?.card
//         settitle(title)
//         console.log(title)
//     }

//     return (<>

//         <h1>{title?.header?.title}</h1>

//         <div className='flex flex-row'>
//         {
//             title?.imageGridCards?.info?.map((item, i) =>

//                 <div key={i}>
//                     <div className="flex flex-col">
//                         <img src={CDN_URL + item.imageId} alt="" className='w-[9rem]' />
//                         <p>{item.action.text}</p>
//                     </div>
//                 </div>
//             )
//         }
//         </div>


//     </>
//     )
// }

// export default Hero






import React, { useState, useEffect } from 'react';
import { CDN_URL } from '../utils/constants';

const Hero = () => {
    const [title, setTitle] = useState();
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5961279&lng=77.1587375&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const title = json?.data?.cards[1]?.card?.card;
        setTitle(title);
    };

    const handleNext = () => {
        setActiveIndex((activeIndex + 1) % title.imageGridCards.info.length);
    };

    const handlePrev = () => {
        setActiveIndex((activeIndex - 1 + title.imageGridCards.info.length) % title.imageGridCards.info.length);
    };

    return (
        <>
        <div className="flex w-[90%] m-auto flex-col">
            <h1>{title?.header?.title}</h1>
            <div className='flex justify-end'>
                <button onClick={handlePrev} className='mr-2'>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
            <div className='flex flex-row'>
                {title?.imageGridCards?.info?.map((item, i) =>
                    <div key={i} className={`flex flex-col ${i >= activeIndex && i < activeIndex + 9 ? 'block' : 'hidden'}`}>
                        <img src={CDN_URL + item.imageId} alt="" className='w-[10rem]' />
                        {/* <p className='text-center'>{item.action.text}</p> */}
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

