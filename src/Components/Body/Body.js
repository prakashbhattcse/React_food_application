import React, { useEffect, useState } from 'react'
import ResCard from '../ReastaurentCard/ResCard'
import "./Body.css";
import Shimmer from '../Shimmer/Shimmer';



const Body = () => {
    // const [listOfRestaurants, setlistOfRestaurants] = useState(resObj)
    const [listOfRestaurants, setlistOfRestaurants] = useState([])
    const [filterdlistOfRestaurants, setFilterdlistOfRestaurants] = useState([])
    const [loading, setLoading] = useState(true);
    const [inputText, setInputText] = useState();

    console.log(inputText)
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5961279&lng=77.1587375&collection=83645&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
            );
            const json = await data.json();
            // console.log(json);

            const restaurants = json.data.cards.slice(3).map(card => card.card?.card);
            setlistOfRestaurants(restaurants);
            setFilterdlistOfRestaurants(restaurants);
            setLoading(false);
            //   setlistOfRestaurants(json.cards[5].card.card.gridElements.infoWithStyle.restaurants)
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>{loading ? (<Shimmer />) : (<div className="body">
            <div className="filter">

                <div className="search">
                    <input type="text" className="inputSearch" value={inputText} onChange={(e) => { setInputText(e.target.value) }} />

                    <button className="searchBtn" onClick={
                        () => {
                            const filterd = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(inputText.toLowerCase()))
                            setFilterdlistOfRestaurants(filterd);
                        }
                    }>Search</button>
                </div>

                <button className="filter-btn" onClick={() => {
                    const filterdList = listOfRestaurants.filter((res) => res.info.avgRating > 4)

                    setlistOfRestaurants(filterdList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filterdlistOfRestaurants.map((restaurant, i) => (
                    <ResCard key={i} resData={restaurant} />
                ))}
            </div>
        </div>)


        }
        </>
    )
}

export default Body


