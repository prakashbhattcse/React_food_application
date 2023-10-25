import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../utils/cartSlice'

const ItemList = React.memo(({ items },props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);



    const handleAddItems = (item) => {
        dispatch(addItem(item))
    }

    const handleRemoveItems = (id) => {
        dispatch(removeItem(id));
    }

    return (
        <>
            <div className="">
                {items?.map((item,i) => {
                    const { id, name, price, defaultPrice, description, imageId, isVeg, isBestseller } = item?.card?.info;


                    // Check if the item is in the cart
                    const cartItem = cartItems.find((cartItem) => cartItem.card.info.id === item.card.info.id);
                    const quantity = cartItem ? cartItem.quantity : 0;
                    if (!imageId) {
                        return null;
                    }
                    return (
                        <div key={item?.card?.info?.id} className={`border border-transparent hover:border-blue-500 mt-3 backdrop-filter backdrop-blur-lg flex justify-between p-4 text-left font-sans items-center bg-primary shadow-lg transition-all duration-300 rounded-md  ${i < items.length - 1 ? 'mb-4' : ''} w-full md:min-w-[700px]` }>
                            <div className="flex flex-col w-8/12">
                                <div className="flex flex-col py-5">
                                    <div className="flex flex-row gap-4 mb-2">
                                        {isVeg ? (
                                            <span className="text-[0.55rem] border-2 border-green-500 p-0.5 w-fit ">🟢</span>
                                        ) : (
                                            <span className="text-[0.55rem] border-2 border-red-500 p-0.5 w-fit ">🔴</span>
                                        )}
                                        {isBestseller && <p className='text-yellow-300'>⭐Bestseller</p>}
                                    </div>
                                    <span className='font-bold text-secondary'>{name} </span>
                                    <span  className='font-bold text-secondary'> ₹ {price / 100 || defaultPrice / 100}</span>
                                </div>
                                <p className="mb-5 text-xs text-gray-500">{description}</p>
                            </div>
                            <div className="w-3/12 object-cover h-[96px]  relative">
                                {imageId ? (
                                    <img className='w-full h-[96px] object-cover rounded-md' src={CDN_URL + imageId} alt="" />
                                ) : (
                                    <img className='w-full h-[96px] object-cover rounded-md' src={process.env.PUBLIC_URL + '/default1.jpg'} alt="" />
                                )}
                                <div className="absolute flex justify-center items-start inset-0 ">
                                    {quantity > 0 ? (
                                        <div className="bg-green-500  p-1 text-white flex gap-2 rounded-md font-bold">
                                            <button className="px-2" onClick={() => handleRemoveItems(id)}>-</button>
                                            <span className="px-2">{quantity}</span>
                                            <button className="px-2" onClick={() => handleAddItems(item)}>+</button>
                                        </div>
                                    ) : (
                                        <button className="bg-white p-1 px-4 text-black flex gap-2 rounded-sm" onClick={() => handleAddItems(item)}> Add + </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
});

export default ItemList;



















// import { CDN_URL } from '../utils/constants'
// import { useDispatch, useSelector } from 'react-redux'
// import { addItem } from '../utils/cartSlice'
// import { removeItem } from '../utils/cartSlice'



// // const ItemList = ({ items }) => {
// const ItemList = React.memo(({ items }) => {
//     const dispatch = useDispatch();

//     const cartItems = useSelector((store) => store.cart.items)     // access the items array in the cart slice of your Redux store. This array represents the items currently in your cart.


//     const handleAddItems = (item) => {
//         dispatch(addItem(item))
//     }

//     const handleRemoveItems = (id) => {
//         // const item = cartItems.find(el => el.card.info.id === id);
//         // item && dispatch(removeItem(item));
//         dispatch(removeItem(id));
//     }

//     // Helper function to check for duplicates
//     const isFirstOccurrence = (item, index, self) => {
//         return self.findIndex(el => el.card.info.id === item.card.info.id) === index;
//     }

//     // Use the helper function in filter
//     const filteredItem = items?.filter(isFirstOccurrence);

//     return (
//         <>
//             <div className="">
//                 {
//                     filteredItem?.map(item => {

//                         const { id, name, price, defaultPrice, description, imageId, isVeg, isBestseller } = item?.card?.info;

//                         return (
//                             <div key={item?.card?.info?.id} className='flex justify-between mb-15 p-4 text-left border-b-2 font-sans items-center bg-white rounded-md mb-2'>

//                                 <div className="flex flex-col w-8/12">
//                                     <div className="flex flex-col py-5">


//                                         <div className="flex flex-row gap-4 mb-2">
//                                             {isVeg ? (<span className=" text-[0.55rem] border-2 border-green-500 p-0.5 w-fit ">
//                                                 🟢
//                                             </span>
//                                             ) : (
//                                                 <span className=" text-[0.55rem] border-2 border-red-500 p-0.5 w-fit ">
//                                                     🔴
//                                                 </span>
//                                             )}

//                                             {isBestseller && <p>⭐Bestseller</p>}
//                                         </div>
//                                         <span className='font-bold'>{name} </span>
//                                         <span> ₹ {price / 100 || defaultPrice / 100}</span>
//                                     </div>
//                                     <p className="mb-5 text-xs text-gray-500">{description}</p>
//                                 </div>

//                                 <div className="w-3/12 object-cover h-[96px]  relative">
//                                     {imageId ? (
//                                         <img className='w-full h-[96px] object-cover rounded-md' src={CDN_URL + imageId} alt="" />) :
//                                         (<img className='w-full h-[96px] object-cover rounded-md' src={process.env.PUBLIC_URL + '/default1.jpg'} alt="" />)

//                                     }
//                                     <div className="absolute flex justify-center items-start inset-0 ">

//                                         {
//                                             cartItems.find((el) => el.card.info.id === item.card.info.id) ?

//                                                 <div className="bg-white  p-1 px-4 text-black flex gap-2 rounded-lg">

//                                                     <button className="px-2" onClick={() => handleRemoveItems(id)}>-</button>
//                                                     <span className="px-2">{cartItems.filter(el => el.card.info.id === item.card.info.id).length}</span>
//                                                     <button className="px-2" onClick={() => handleAddItems(item)}>+</button>
//                                                 </div>
//                                                 :
//                                                 <button className="bg-white p-1 px-4 text-black flex gap-2 rounded-sm"
//                                                     onClick={() => handleAddItems(item)}>
//                                                     Add +
//                                                 </button>
//                                         }
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }
// )


// export default ItemList;