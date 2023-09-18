import React from 'react'
import { CDN_URL } from '../utils/constants'

const ItemList = React.memo(({ items }) => {

    console.log(items)
    // console.log(items.map)

    // console.log(items?.card?.info)
    return (

        <>
            <div className="">
                {
                    items?.map(item => {

                        const { name, price, defaultPrice, description, imageId } = item?.card?.info;
                        return (
                            <div key={item?.card?.info?.id} className='flex justify-between mb-15 p-4 text-left border-b-2 font-sans'>

                                <div className="flex flex-col w-8/12">
                                    <div className="flex flex-row py-3">
                                        <span className='font-bold'>{name } </span>
                                        <span> - ₹ {price / 100 || defaultPrice / 100}</span>
                                    </div>
                                    <p className="mb-5 text-sm">{description}</p>
                                </div>
                                <div className="w-3/12 object-cover h-[96px]">
                                    <img className='w-full h-[96px] object-cover rounded-md' src={CDN_URL + imageId} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
})

export default ItemList