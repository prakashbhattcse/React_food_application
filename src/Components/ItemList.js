import React from 'react'

const ItemList = ({ items }) => {

    console.log(items)
    return (
        <>
            <div className="">
                {
                    items?.map(item =>
                        <div key={item.card.info.id} className='flex flex-col mb-5 text-left border-b-2'>
                            <div className="flex flex-col">
                                <span className='font-semibold'> {item.card.info.name}</span>
                                <span> Rs  {item.card.info.price/100  ||item.card.info.defaultPrice/100 }</span>
                            </div>
                            <p className="mb-5 text-sm">{item.card.info.description}</p>
                           
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default ItemList