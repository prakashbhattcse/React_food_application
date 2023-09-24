import React, { useState } from 'react'
import Shimmer from './Shimmer/Shimmer';
import { useParams } from 'react-router';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';


const RestaurantMenu = React.memo( () => {

    const { resId } = useParams();

    const [showIndex, setShowIndex] = useState(1)
    // I have transfered the data to other file to make custom hook and short this code
    const { resInfo, loading } = useRestaurantMenu(resId);



    // ### 2 > Sometimes code works but when i reload the page it shows me errors
    // It is due to the asynchronous nature of data fetching in JS. When you reload the page, your React component renders before your data fetch (**`fetchMenu`**) completes. It means  **`resinfo`**  is  **`null`**  during the 1st render, & it doesn’t get updated with the fetched data until after the first render.
    // To handle this, you can add a loading state to your component.

    if (loading) {
        return <Shimmer />;
    }

    const { name, costForTwo, cuisines, city, cloudinaryImageId } = resInfo?.cards[0]?.card?.card?.info || {};

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};


    // here if i want to cover all categores and nested categories i need to comapre for both of them
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.
        cards.filter(c =>
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        )


    return (
        <>
            <div className="flex justify-center text-center w-6/12 m-auto flex-col">
                {/* // ## itemCards` was `undefined` during the first render of the component. 
            This happened because data fetching is asynchronous, which means that the component 
            renders before the data is fetched. So during the first render, `itemCards` is 
            `undefined`, and trying to call `map` on it results in an error. */}

                <div className=" my-4">
                    <h1 className="font-semibold text-2xl">{name}</h1>
                    <p className="">{cuisines.join(", ")}</p>
                    <p>{costForTwo}</p>
                    <p>{city}</p>
                  
                </div>

                <div className="">
                    {categories.map((category, i) => (
                        <RestaurantCategory
                            data={category.card?.card}
                            showItems={i === showIndex ? true : false}
                            setShowIndex={() => setShowIndex(i)}
                        />
                    ))}
                </div>

            </div>
        </>
    )
}
)

export default RestaurantMenu

