import React, { useState, useEffect, Suspense, lazy, useContext } from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import userContext from '../utils/UserContext'
import { useSelector } from 'react-redux/es/hooks/useSelector';


const Header = () => {

    const [login, setLogin] = useState(false)
    const { loggedInUser } = useContext(userContext);


    const onlineStatus = useOnlineStatus();

    // subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items)
    return (
        <div className="flex justify-between items-center bg-gradient-to-h from-gray-900 to-gray-700 text-white p-3">
            <div className='logo-container'>
                <img src={LOGO_URL} alt="" className='w-28' />

            </div>


            <div className="flex justify-between items-center space-x-4">
                <ul className='flex list-none'>
                    <li className='mr-4 text-lg font-semibold'>
                        Online Status : {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className='mr-4 text-lg font-semibold'>
                        <Link className='text-white no-underline hover:text-red-500' to="/">Home</Link>
                    </li>
                    <li className='mr-4 text-lg font-semibold'>
                        <Link className='text-white no-underline hover:text-red-500' to="/About">About Us</Link>
                    </li>
                    <li className='mr-4 text-lg font-semibold'>
                        <Link to="/Contact">Contact Us</Link>
                    </li>
                    <li className='mr-4 text-lg font-semibold'>{loggedInUser}</li>
                    <li className='mr-4 text-lg font-semibold'>
                        <Link className='text-white no-underline hover:text-red-500' to="/reactlifecycle">React Life Cycle</Link>
                    </li>

                    <li className='mr-4 text-lg font-semibold'>
                        <Link className='text-white no-underline hover:text-red-500' to="/cart">Cart - ({cartItems.length})</Link>
                    </li>

                    <button className='bg-white text-black rounded-md px-4 py-0' onClick={() => { setLogin(!login) }}>{login ? "Login" : "Logout"}</button>
                </ul>
            </div>
        </div >
    )
}



export default Header
