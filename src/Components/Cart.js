import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import ItemList from './ItemList';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);  // This variable holds the current items in the cart. It uses the useSelector to select the items from the Redux store.

    const dispatch = useDispatch();   // This function allows you to dispatch actions to the Redux store.


    // Calculate the total quantity of items in the cart
    // const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const findTotal = () => {
        let totalSum = 0
        // cartItems.map((el) => {
        //     return (
        //         totalSum += el.card.info.price ? el.card.info.price / 100 : el.card.info.defaultPrice / 100
        //     )
        // })

        cartItems.forEach((item) => {
            totalSum += (item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100) * item.quantity;
        });
        return totalSum;

    }



    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <>
            <div className="text-center p-4 bg-background h-screen overflow-auto">
                <h1 className="text-6xl font-bold text-center text-secondary mb-5">Cart</h1>

                {/* <p>Total items in cart: {totalQuantity}</p> Display the total quantity */}
                <div className="w-6/12 m-auto ">

                    {cartItems.length === 0 && (
                        <h1>🛒 Cart is empty</h1>
                    )}
                    <div className=" flex border-gray-500 rounded-lg justify-between gap-3 mt-5">
                    <ItemList items={cartItems}/>

                    </div>
                    <div className="border-b border-dashed my-4" />
                    <div className="flex flex-row justify-between mb-10"> 
                        <button className="bg-white p-2 rounded-md text-black" onClick={handleClearCart}>
                            Clear Cart
                        </button>
                        <h1 className="font-bold text-xl text-green-500">Total : ₹{findTotal()}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart












