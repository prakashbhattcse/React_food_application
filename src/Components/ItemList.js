import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

// const ItemList = React.memo(({ items }) => {
const ItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItems = (item) => {
        //dispatch an action
        dispatch(addItem(item))
    }



    // const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="">
                {
                    items?.map(item => {

                        const { name, price, defaultPrice, description, imageId } = item?.card?.info;
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
                                        <button className="bg-black p-1 px-4 text-white" onClick={() => handleAddItems(item)}>Add +</button>
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
// })

export default ItemList