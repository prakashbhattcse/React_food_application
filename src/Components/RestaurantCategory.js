import React, { useState } from 'react'
import ItemList from './ItemList'
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi';



const RestaurantCategory = ({ data, showItems, setShowIndex, i }) => {

    const handleItems = () => {
        setShowIndex();
    }


    return (

        <div className="flex flex-col bg-bg-secondary mb-3 p-4 rounded-sm shadow-md border-2 border-custom  bg-foodbg">
            <div className="flex justify-between items-center ">
                <div className='flex text-center font-bold px-4 text-white'>
                    {data.title} {""}
                    ({data?.itemCards?.length} {data?.categories?.length})
                </div>

                <button className="" onClick={handleItems} >
                    {showItems ?
                        <FiArrowUpCircle size={32} className='text-green-500 ' />
                        :
                        <FiArrowDownCircle size={32} className='text-green-500' />}
                </button>
            </div>

            {/* Accordian Body */}

            {showItems &&
                <>
                    <ItemList items={data?.itemCards} />
                    {data?.categories?.map(category => (
                        <>
                            <h2 className='my-3  flex items-start ml-4  font-semibold text-green-700'>{category.title}({category.itemCards.length})</h2>
                            <ItemList items={category.itemCards} />
                        </>
                    ))}
                </>
            }
        </div>

    )
}


export default RestaurantCategory