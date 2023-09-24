import React, { useContext, useEffect, useState } from 'react'
import ResCard, { withPrmotedLabel } from '../ResCard'
import "./Body.css";
import Shimmer from '../Shimmer/Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';
import userContext from '../../utils/UserContext';
import Hero from '../Hero';




const Body = () => {
    // const [listOfRestaurants, setlistOfRestaurants] = useState(resObj)
    const [listOfRestaurants, setlistOfRestaurants] = useState([])
    const [filterdlistOfRestaurants, setFilterdlistOfRestaurants] = useState([])
    const [loading, setLoading] = useState(true);
    const [inputText, setInputText] = useState();


    const { loggedInUser, setUser } = useContext(userContext)

    const RestaurantCardPromoted = withPrmotedLabel(ResCard);

    console.log(inputText)
    useEffect(() => {
        fetchData();
    }, []);


    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return <h1>Looks like you are offline!. Please connect to the internet</h1>

    const fetchData = async () => {
        try {
            const data = await fetch(
                // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5961279&lng=77.1587375&collection=83645&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5961279&lng=77.1587375&collection=83645&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
            );
            const json = await data.json();

            // console.log(json)
            const restaurants = json.data.cards.slice(3).map(card => card.card?.card);

            console.log(restaurants)
            setlistOfRestaurants(restaurants);
            setFilterdlistOfRestaurants(restaurants);
            setLoading(false);

        } catch (error) {
            console.log(error);
        }
    };

    return (


        <>
            <Hero />
            {loading ? (<Shimmer />) : (<div className="body">
                <div className="body-layout">
                    <div className="filter">

                        <div className="search">
                            <input type="text" className="inputSearch text-black" value={inputText} onChange={(e) => { setInputText(e.target.value) }} />

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


                        <input type="text" className="inputSearch text-black" value={loggedInUser} onChange={(e) => { setUser(e.target.value) }} />
                    </div>

                    <div className="res-container">
                        {filterdlistOfRestaurants.map((restaurant) => (
                            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>

                                {restaurant.info.promoted ? (<RestaurantCardPromoted resData={restaurant} />) :
                                    (
                                        <ResCard resData={restaurant} />
                                    )
                                }
                            </Link>
                        ))}
                    </div>
                </div>
            </div>)
            }
        </>
    )
}

export default Body


