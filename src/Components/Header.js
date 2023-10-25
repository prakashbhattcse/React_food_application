import React, { useState, useEffect, Suspense, lazy, useContext } from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link, useNavigate } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import userContext from '../utils/UserContext'
import { useDispatch, useSelector } from 'react-redux';
// import { getAuth } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { colors } from '../utils/constants'
import curve from "../utils/images/curve.png"
import "../Components/Body/Body.css"


const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [btnNameReact, setBtnNameReact] = useState("Login");
    const { loggedInUser } = useContext(userContext);
    const user = useSelector((state) => state.user);
    const onlineStatus = useOnlineStatus();
    const [loading, setLoading] = useState(true);
    const cartItems = useSelector((store) => store.cart.items);
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);       // Calculate the total quantity of items in the cart




    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in

                const { uid, displayName, email } = user;

                // Dispatch addUser action to add user data to Redux store
                dispatch(addUser({ uid: uid, displayName: displayName, email: email }))
                navigate("/")
            } else {
                removeUser();
                navigate("/login")
            }
            setLoading(false);
        });
    }, [])


    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(removeUser());
            navigate("/login");
        }).catch((error) => {
            // An error happened.
            console.error("Error signing out: ", error);
        });
    };
    if (loading) {
        return <div>Loading...</div>; // Or your custom loading component
    }

    return (
        <div className='relative'>

            {/* <img src={curve} alt="" className='overlay' /> */}
            <div className={`relative flex justify-between items-center p-3 shadow-lg transition-all duration-300 bg-primary ${colors.textColor} hover:shadow-xl`}>
                <div className='logo-container'>
                    <img src={LOGO_URL} alt="" className='w-20' />
                </div>
                <div className="flex justify-between items-center space-x-4">
                    <ul className='flex list-none'>

                        {/* USE CONTEXT */}
                        {/* <li className='mr-4 text-lg font-semibold'>{loggedInUser}</li> */}
                        {/* <li className='mr-4 text-lg font-semibold'>
                      <Link className='text-white no-underline hover:text-red-500' to="/reactlifecycle">Cycle</Link>
                    </li> */}

                        <li className='mr-4 text-lg font-semibold'>
                            {onlineStatus ? "🟢" : "🔴"}
                        </li>
                        <li className='mr-4 text-lg font-semibold'>
                            <Link className={`no-underline hover:${colors.buttonColor}`} to="/">Home</Link>
                        </li>
                        <li className='mr-4 text-lg font-semibold'>
                            <Link className={`no-underline hover:${colors.buttonColor}`} to="/About">About Us</Link>
                        </li>
                        <li className='mr-4 text-lg font-semibold'>
                            <Link className={`no-underline hover:${colors.buttonColor}`} to="/Contact">Contact Us</Link>
                        </li>
                        <li className='mr-4 text-lg font-semibold'>
                            {/* <Link className={`no-underline hover:${colors.buttonColor}`} to="/cart">🛒- ({totalQuantity})</Link> */}
                            <Link className={`relative no-underline hover:${colors.buttonColor}`} to="/cart">
                                🛒
                                <span className={`absolute -top-2 -right-1 inline-block w-5 h-5 ${colors.buttonColor} text-center rounded-full text-white text-xs`}>
                                    {totalQuantity}
                                </span>
                            </Link>


                        </li>
                        <li className='mr-4 text-lg font-semibold'> {user && <h1>{user.displayName}</h1>}</li>

                        <Link to="/login">
                            {loggedInUser && (
                                <button className="login" onClick={handleSignOut}>Logout</button>
                            )}
                        </Link>
                    </ul>
                </div>
            </div >
        </div>
    )
}



export default Header
