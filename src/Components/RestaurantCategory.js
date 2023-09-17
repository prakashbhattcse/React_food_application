import React from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({ data }) => {

    return (
        <>
            <div className="flex flex-col bg-slate-300 mb-3 p-4 rounded-md">
            <div className="flex justify-between">
                <div className='flex text-center font-bold'>
                    {data.title} {" "}
                    ({data.itemCards?.length}  {data.categories?.length})
                </div>
                <span className="">⬇️</span>
</div>
                <ItemList items={data.itemCards} />
            </div>
        </>
    )
}

export default RestaurantCategory