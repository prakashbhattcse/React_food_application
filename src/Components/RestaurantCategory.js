import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({ data, showItems, setShowIndex, i }) => {
    // const [OpenItemList, setOpenItemList] = useState(false);

    const handleItems=()=>{
        // setOpenItemList(!OpenItemList)
       setShowIndex(); 
    }

    return (
        <>
            <div className="flex flex-col bg-slate-200 mb-3 p-4 rounded-sm shadow-md">
                <div className="flex justify-between">
                    <div className='flex text-center font-bold mb-3 px-4'>
                        {data.title} {" "}
                        ({data?.itemCards?.length}  {data?.categories?.length})
                    </div>
                    {/* <button className="bg-gray-200" onClick={() => setOpenItemList(!OpenItemList)}>⬇️</button> */}
                    <button className="bg-gray-200" onClick={handleItems} >{showItems ? "🔼" : "🔽"}</button>
                </div>
                
                {/* Accordian Body */}
                {showItems &&
                    <ItemList items={data?.itemCards} />
                }
            </div>
        </>
    )
}


export default RestaurantCategory