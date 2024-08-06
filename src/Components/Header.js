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
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in

                const { uid, displayName, email } = user;

                // Dispatch addUser action to add user data to Redux store
                dispatch(addUser({ uid: uid, displayName: displayName, email: email }))
                navigate("/home")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
            setLoading(false);
        });
        // unsubscribe when component unmount
        return () => unsubscribe();

    }, [])


    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // // Sign-out successful.
            // dispatch(removeUser());
            // navigate("/");
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
            <div className={`relative flex justify-between items-center p-3 px-9 shadow-lg transition-all duration-300 bg-primary ${colors.textColor} hover:shadow-xl`}>
                <div className='logo-container'>
                    <img src={LOGO_URL} alt="" className='w-20' />
                </div>


                <ul className='flex list-none gap-7'>
                <li className='mr-4 text-md font-semibold bg-white text-black rounded-2xl px-2 flex justify-between gap-3'>
                           
                            {onlineStatus ? "Active 🟢" : "Offline 🔴"}
                        </li>
                    <li className='mr-4 text-lg font-semibold'>
                        <Link className={`no-underline hover:${colors.buttonColor}`} to="/home">Home</Link>
                    </li>
                    <li className='mr-4 text-lg font-semibold'>
                        <Link className={`no-underline hover:${colors.buttonColor}`} to="/About">About Us</Link>
                    </li>
                    <li className='mr-4 text-lg font-semibold'>
                        <Link className={`no-underline hover:${colors.buttonColor}`} to="/Contact">Contact</Link>
                    </li>

                </ul>
                <div className="flex justify-between items-center space-x-4">



                    <ul className='flex list-none gap-5'>
                        <li className='mr-4 text-lg font-semibold'>

                            {/* <Link className={`no-underline hover:${colors.buttonColor}`} to="/cart">🛒- ({totalQuantity})</Link> */}
                            <Link className={`relative no-underline hover:${colors.buttonColor} bg-white rounded-full p-1`} to="/cart">
                                🛒
                                <span className={`absolute -top-2 -right-0 inline-block w-4 h-4 bg-red text-center rounded-full text-white text-xs`}>
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
