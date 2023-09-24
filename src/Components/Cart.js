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
        cartItems.map((el) => {
            totalSum += el.card.info.price ? el.card.info.price / 100 : el.card.info.defaultPrice / 100
        })
        return totalSum
    }



    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <>
            <div className="text-centerm-4 p-4">
                <h1 className="text-2xl font bold">Cart</h1>

                {/* <p>Total items in cart: {totalQuantity}</p> Display the total quantity */}
                <div className="w-6/12 m-auto">
                    <button className="bg-black" onClick={handleClearCart}>
                        Clear Cart
                    </button>
                    {cartItems.length === 0 && (
                        <h1>🛒 Cart is empty</h1>
                    )}
                    <ItemList items={cartItems} />
                    <div className="border-b border-dashed my-4" />
                    <div className="flex flex-row-reverse mb-10">
                        <h1 className="font-bold text-xl">Total : ₹{findTotal()}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart












