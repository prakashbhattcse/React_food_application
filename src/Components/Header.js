import React, { useState, useEffect, Suspense, lazy, useContext } from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link, useNavigate } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import userContext from '../utils/UserContext'
import { useDispatch, useSelector } from 'react-redux';
// import { getAuth } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";



const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const [btnNameReact, setBtnNameReact] = useState("Login");
    const { loggedInUser } = useContext(userContext);
    const user = useSelector((state) => state.user);
    const onlineStatus = useOnlineStatus();
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

                    {/* USE CONTEXT */}
                    {/* <li className='mr-4 text-lg font-semibold'>{loggedInUser}</li> */}



                    <li className='mr-4 text-lg font-semibold'>
                        <Link className='text-white no-underline hover:text-red-500' to="/reactlifecycle">Cycle</Link>
                    </li>

                    <li className='mr-4 text-lg font-semibold'>
                        <Link className='text-white no-underline hover:text-red-500' to="/cart">Cart - ({totalQuantity} items)</Link>
                    </li>
                    <li className='mr-4 text-lg font-semibold'> {user && <h1>Hello, {user.displayName}</h1>}</li>

                    <Link to="/login">
                        {/* <button
                            className="login"
                            to="/login"
                            onClick={() => {
                                btnNameReact === "Login"
                                    ? setBtnNameReact("Logout")
                                    : setBtnNameReact("Login");
                            }}
                        >
                            {btnNameReact}
                        </button> */}


                        {loggedInUser && (
                            <button className="login" onClick={handleSignOut}>Logout</button>
                        )}
                    </Link>
                    {/* <button className='bg-white text-black rounded-md px-4 py-0' onClick={() => { setLogin(!login) }}>{login ? "Login" : "Logout"}</button> */}
                </ul>
            </div>
        </div >
    )
}



export default Header
