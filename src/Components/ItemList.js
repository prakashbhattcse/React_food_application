import React, { useState } from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'
import { removeItem } from '../utils/cartSlice'

// const ItemList = React.memo(({ items }) => {
const ItemList = ({ items }) => {


    const dispatch = useDispatch();

    const handleAddItems = (item) => {
        //dispatch an action
        dispatch(addItem(item))
    }

    const handleRemoveItems = (item) => {
        //dispatch an action
        dispatch(removeItem(item))
    }

    // const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="">
                {
                    items?.map(item => {
                        {console.log(item.card.info)}
                        const { name, price, defaultPrice, description, imageId,quantity } = item?.card?.info;


                        return (
                            <div key={item?.card?.info?.id} className='flex justify-between mb-15 p-4 text-left border-b-2 font-sans'>

                                <div className="flex flex-col w-8/12">
                                    <div className="flex flex-row py-5">

                                        <span className='font-bold'>{name} </span>
                                        <span> - ₹ {price / 100 || defaultPrice / 100}</span>

                                    </div>
                                    <p className="mb-5 text-sm">{description}</p>
                                </div>

                                <div className="w-3/12 object-cover h-[96px]  relative">
                                    {imageId && (
                                        <img className='w-full h-[96px] object-cover rounded-md' src={CDN_URL + imageId} alt="" />)
                                    }
                                    <div className="absolute flex justify-center items-start inset-0  ">

                                        <button className="bg-white p-1 px-4 text-black flex gap-2 rounded-sm" >

                                            <div onClick={() => handleRemoveItems(item)}> -</div>
                                            {quantity}
                                            <div onClick={() => handleAddItems(item)}>+</div>

                                        </button>

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




export default ItemList;




