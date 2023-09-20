import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import ItemList from './ItemList';

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <>
            <div className="text-centerm-4 p-4">
                <h1 className="text-2xl font bold">Cart</h1>
                <div className="w-6/12 m-auto">
                    <button className="bg-black" onClick={handleClearCart}>
                        Clear Cart
                    </button>
                    {cartItems.length === 0 && (
                        <h1>Cart is empty</h1>
                    )}
                    <ItemList items={cartItems} />
                </div>
            </div>
        </>
    )
}

export default Cart

