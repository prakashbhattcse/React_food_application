import React, { useEffect, useState } from 'react'
import ResCard from '../ReastaurentCard/ResCard'
import { resObj } from '../../utils/constants'
import "./Body.css";
import Shimmer from '../Shimmer/Shimmer';



const Body = () => {
    // const [listOfRestaurants, setlistOfRestaurants] = useState(resObj)
    const [listOfRestaurants, setlistOfRestaurants] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        try {
            const data = await fetch(
                // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5961279&lng=77.1587375&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5961279&lng=77.1587375&collection=83645&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
            );
            const json = await data.json();
            console.log(json);

            const restaurants = json.data.cards.slice(3).map(card => card.card?.card);
            setlistOfRestaurants(restaurants);
            setLoading(false);
            //   setlistOfRestaurants(json.cards[5].card.card.gridElements.infoWithStyle.restaurants)
            //   setlistOfRestaurants(json.data.cards.slice(3))
        } catch (error) {
            console.log(error);
        }
    };

    // if (loading) {
    //     return <div><Shimmer/></div>;    // another way to show laoding
    // }

    return (
        <>{loading ? (<Shimmer />) : (<div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filterdList = listOfRestaurants.filter((res) => res.info.avgRating > 4)

                    setlistOfRestaurants(filterdList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant, i) => (
                    <ResCard key={i} resData={restaurant} />
                ))}
            </div>
        </div>)


        }
        </>
    )
}

export default Body


