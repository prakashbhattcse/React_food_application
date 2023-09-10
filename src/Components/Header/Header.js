import React, { useState } from 'react'
import "./Header.css"
import { LOGO_URL } from '../../utils/constants'
import { Link } from 'react-router-dom'

const Header = () => {

    const [login, setLogin] = useState(false)
    return (
        <div className="header">
            <div className='logo-container'>
                <img src={LOGO_URL} alt="" className='logo' />

            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About Us</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact Us</Link>
                    </li>
                    {/* <li>Cart</li> */}
                    <button className='login_btn' onClick={() => { setLogin(!login) }}>{login ? "Login" : "Logout"}</button>
                </ul>
            </div>
        </div>
    )
}



export default Header
