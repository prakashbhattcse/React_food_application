import React , {useState} from 'react'
import "./Header.css"
import { LOGO_URL } from '../../utils/constants'

const Header = () => {

    const [login, setLogin] = useState(false)
    return (
        <div className="header">
            <div className='logo-container'>
                <img src={LOGO_URL} alt="" className='logo' />
               
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button onClick={()=>{setLogin(!login)}}>{login ? "Login" : "Logout"}</button>
                </ul>
            </div>
        </div>
    )
}



export default Header
