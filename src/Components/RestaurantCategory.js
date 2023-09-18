import React from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({ data }) => {
//   const items = [...(data?.itemCards || []), ...(data?.categories || [])];
    return (
        <>
            <div className="flex flex-col bg-slate-300 mb-3 p-4 rounded-md">
                <div className="flex justify-between">
                    <div className='flex text-center font-bold mb-3'>
                        {data.title} {" "}
                        ({data?.itemCards?.length}  {data?.categories?.length})
                    </div>
                    <span className="">⬇️</span>
                </div>
              
                {/* <ItemList items={items} /> */}

                <ItemList items={data?.itemCards} />
                {/* <ItemList items={data?.itemCards || data?.categories || []} /> */}
            </div>
        </>
    )
}

export default RestaurantCategory