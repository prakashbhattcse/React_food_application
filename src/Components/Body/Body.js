import React, { useContext, useEffect, useState } from 'react'
import ResCard, { withPrmotedLabel } from '../ResCard'
import "./Body.css";
import Shimmer from '../Shimmer/Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';
import userContext from '../../utils/UserContext';
import Hero from '../Hero';
import { colors } from '../../utils/constants';



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
                // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5961279&lng=77.1587375&collection=83645&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
                "https://prakashbhattcse.github.io/food_website_api/food_api.json"

                // "https://github.com/aditya1819/data/mockhotels.json"

            );
            const json = await data.json();

            const restaurants = json.data.cards.slice(3).map(card => card.card?.card);

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

                <div className={`body-layout bg-background }`}>

                    <div className={`filter flex flex-col gap-4 p-4  rounded-md ${colors.textColor} mt-4`}>
                        <div className="search flex">
                            <input type="text" className={`inputSearch  p-2 rounded-md rounded-r-nonebg-red text-secondary font-medium placeholder-gray-500`} value={inputText} placeholder='search reastro' onChange={(e) => { setInputText(e.target.value) }} />
                            <button className={`searchBtn p-2 rounded-md rounded-l-none bg-red text-white`} onClick={
                                () => {
                                    const filterd = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(inputText.toLowerCase()))
                                    setFilterdlistOfRestaurants(filterd);
                                }
                            }>Search</button>
                        </div>
                        <button className={`filter-btn p-2 rounded-md  bg-red text-white`} onClick={() => {
                            const filterdList = listOfRestaurants.filter((res) => res.info.avgRating > 4)
                            setFilterdlistOfRestaurants(filterdList);
                        }}>Top Rated Restaurants</button>
                        {/* <input type="text" className={`inputSearch p-2 rounded-md ${colors.inputBackground} ${colors.textColor} placeholder-gray-500`} value={loggedInUser} onChange={(e) => { setUser(e.target.value) }} /> */}
                    </div>
                    <div className="res-container grid grid-cols-3 gap-4 p-4">
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
                );


            </div>
            )
            }
        </>
    )
}

export default Body


