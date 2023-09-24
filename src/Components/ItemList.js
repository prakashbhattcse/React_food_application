import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../utils/cartSlice'
import { removeItem } from '../utils/cartSlice'


// const ItemList = ({ items }) => {
const ItemList = React.memo(({ items }) => {
    const dispatch = useDispatch();

    const cartItems = useSelector((store) => store.cart.items)     // access the items array in the cart slice of your Redux store. This array represents the items currently in your cart.


    const handleAddItems = (item) => {
        //dispatch an action
        dispatch(addItem(item))
    }

    const handleRemoveItems = (id) => {
        const item = cartItems.find(el => el.card.info.id === id);
        item && dispatch(removeItem(item));
    }

    // Helper function to check for duplicates
    const isFirstOccurrence = (item, index, self) => {
        return self.findIndex(el => el.card.info.id === item.card.info.id) === index;
    }

    // Use the helper function in filter
    const filteredItem = items?.filter(isFirstOccurrence);

    return (
        <>
            <div className="">
                {
                    filteredItem?.map(item => {

                        const { id, name, price, defaultPrice, description, imageId, isVeg, isBestseller } = item?.card?.info;

                        { console.log(item.card.info) }
                        return (
                            <div key={item?.card?.info?.id} className='flex justify-between mb-15 p-4 text-left border-b-2 font-sans items-center'>

                                <div className="flex flex-col w-8/12">
                                    <div className="flex flex-col py-5">


                                        <div className="flex flex-row gap-4 mb-2">
                                            {isVeg ? (<span className=" text-[0.55rem] border-2 border-green-500 p-0.5 w-fit ">
                                                🟢
                                            </span>
                                            ) : (
                                                <span className=" text-[0.55rem] border-2 border-red-500 p-0.5 w-fit ">
                                                    🔴
                                                </span>
                                            )}

                                            {isBestseller && <p>⭐Bestseller</p>}
                                        </div>
                                        <span className='font-bold'>{name} </span>
                                        <span> ₹ {price / 100 || defaultPrice / 100}</span>
                                    </div>
                                    <p className="mb-5 text-xs text-gray-500">{description}</p>
                                </div>

                                <div className="w-3/12 object-cover h-[96px]  relative">
                                    {imageId && (
                                        <img className='w-full h-[96px] object-cover rounded-md' src={CDN_URL + imageId} alt="" />)
                                    }
                                    <div className="absolute flex justify-center items-start inset-0  ">

                                        {
                                            cartItems.find((el) => el.card.info.id === item.card.info.id) ?

                                                <div className="bg-white p-1 px-4 text-black flex gap-2 rounded-sm">

                                                    <button className="px-2" onClick={() => handleRemoveItems(id)}>-</button>
                                                    <span className="px-2">{cartItems.filter(el => el.card.info.id === item.card.info.id).length}</span>
                                                    <button className="px-2" onClick={() => handleAddItems(item)}>+</button>
                                                </div>
                                                :
                                                <button className="bg-white p-1 px-4 text-black flex gap-2 rounded-sm"
                                                    onClick={() => handleAddItems(item)}>
                                                    Add +
                                                </button>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
)


export default ItemList;