import React from 'react'
import Shimmer from './Shimmer/Shimmer';
import { useParams } from 'react-router';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import ItemList from './ItemList';


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

    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)



    // here if i want to cover all categores and nested categories i need to comapre for both of them
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.
        cards.filter(c =>
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
            c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        )
    console.log(categories)

    return (
        <>

            <div className="flex justify-center text-center w-6/12 m-auto flex-col">
                {/* // ## itemCards` was `undefined` during the first render of the component. 
            This happened because data fetching is asynchronous, which means that the component 
            renders before the data is fetched. So during the first render, `itemCards` is 
            `undefined`, and trying to call `map` on it results in an error. */}

                <div className="">
                    <h1 className="font-semibold text-2xl">{name}</h1>
                    <p className="">{cuisines.join(", ")}</p>
                    <h1 className="">hello</h1>
                </div>

                <div className="">
                    {categories.map((category) => (
                        <RestaurantCategory data={category.card?.card} />
                    ))}
                    {/* {categories.map((category) => (
                        <ItemList data={category.card?.card.itemCards?.card} />
                    ))} */}
                </div>

                {/* {itemCards.map((item) => (
                    <li>
                        {item.card.info.name || "hell"} - {" "}
                        {item.card.info.price / 100}
                    </li>
                ))} */}

            </div>
        </>
    )
}

export default RestaurantMenu

