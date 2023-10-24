import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({ data, showItems, setShowIndex, i }) => {
    // const [OpenItemList, setOpenItemList] = useState(false);

    const handleItems = () => {
        // setOpenItemList(!OpenItemList)
        setShowIndex();
    }

    // console.log(data)

    return (
        <>
            <div className="flex flex-col bg-slate-200 mb-3 p-4 rounded-sm shadow-md ">
                <div className="flex justify-between items-center">
                    <div className='flex text-center font-bold  px-4'>
                        {data.title} {""}
                        ({data?.itemCards?.length} {data?.categories?.length})
                    </div>
                    {/* <button className="bg-gray-200" onClick={() => setOpenItemList(!OpenItemList)}>⬇️</button> */}
                    <button className="bg-gray-200" onClick={handleItems} >{showItems ? "🔼" : "🔽"}</button>
                </div>

                {/* Accordian Body */}
                {/* {console.log(data.categories.itemCards)}
                {showItems &&
                
                    <ItemList items={data?.itemCards} />
                
} */}

                {showItems &&
                    <>
                        <ItemList items={data?.itemCards} />
                        {console.log(data.categories)}
                        {data?.categories?.map(category => (
                            <>
                                <h2 className='mt-3 mb-3 flex items-start ml-4 font-semibold text-green-700'>{category.title}({category.itemCards.length})</h2>
                                <ItemList items={category.itemCards} />
                            </>
                        ))}
                    </>
                }



            </div>
        </>
    )
}


export default RestaurantCategory