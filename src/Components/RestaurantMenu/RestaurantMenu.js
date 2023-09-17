import React from 'react'
import "./RestaurantMenu.css";
import Shimmer from '../Shimmer/Shimmer';
import { useParams } from 'react-router';
import useRestaurantMenu from '../../utils/useRestaurantMenu';

const RestaurantMenu = () => {

    const { resId } = useParams();


    const { resInfo, loading } = useRestaurantMenu(resId);
    // useEffect(() => {
    //     fetchMenu();
    // }, []);



    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId);

    //     const json = await data.json();
    //     console.log(json)
    //     setResinfo(json.data);
    //     setLoading(false);
    // }


    // ### 2 > Sometimes code works but when i reload the page it shows me errors

    // It is due to the asynchronous nature of data fetching in JS. When you reload the page, your React component renders before your data fetch (**`fetchMenu`**) completes. It means  **`resinfo`**  is  **`null`**  during the 1st render, & it doesn’t get updated with the fetched data until after the first render.

    // To handle this, you can add a loading state to your component.



    if (loading) {
        return <Shimmer />;
    }

    const { name, costForTwo, cuisines, city, cloudinaryImageId } = resInfo?.cards[0]?.card?.card?.info || {};

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"]== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || {};
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)


    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.
        cards.filter(c =>
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        )

    console.log(categories)
    return (
        <>

            <h1>{name}</h1>
            <h3>{costForTwo}</h3>
            <h3>{cuisines}</h3>
            <h3>{city}</h3>
            <img src="cloudinaryImageId" alt="" />
            <h1>Menu</h1>
            <ul>
                {/* // ## itemCards` was `undefined` during the first render of the component. 
            This happened because data fetching is asynchronous, which means that the component 
            renders before the data is fetched. So during the first render, `itemCards` is 
            `undefined`, and trying to call `map` on it results in an error. */}


                <ul>

                    {categories.map((cat) => (
                        <li>
                            {cat.card?.card?.title}
                        </li>
                    ))}

                </ul>

                {/* {itemCards.map((item) => (
                    <li>
                        {item.card.info.name || "hell"} - {" "}
                        {item.card.info.price / 100}
                    </li>
                ))} */}
            </ul>

        </>
    )
}

export default RestaurantMenu

