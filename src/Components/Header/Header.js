import React, { useState, useEffect, Suspense, lazy, useContext } from 'react'
import "./Header.css"
import { LOGO_URL } from '../../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../../utils/useOnlineStatus'
import userContext from '../../utils/UserContext'
import { useSelector } from 'react-redux/es/hooks/useSelector';


const Header = () => {

    const [login, setLogin] = useState(false)
    const { loggedInUser } = useContext(userContext);


    const onlineStatus = useOnlineStatus();

    // subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items)
    return (
        <div className="header">
            <div className='logo-container'>
                <img src={LOGO_URL} alt="" className='logo' />

            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status : {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About Us</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact Us</Link>
                    </li>
                    <li>{loggedInUser}</li>
                    <li>
                        <Link to="/reactlifecycle">React Life Cycle</Link>
                    </li>

                    <li className='font-bold'>Cart - ({cartItems.length})</li>
                    <button className='login_btn' onClick={() => { setLogin(!login) }}>{login ? "Login" : "Logout"}</button>
                </ul>
            </div>
        </div >
    )
}



export default Header
