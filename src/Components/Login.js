import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, } from "firebase/auth";


import { auth } from "../utils/firebase"

import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Login = () => {

    const [isLogin, setisLogin] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // regesx auth
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleLogin = () => {
        setisLogin(!isLogin);
    };


    const handleButtonClick = () => {


        if (email.current && password.current) {
            // Extract email and password values
            const emailValue = email.current.value;
            const passwordValue = password.current.value;

            const message = checkValidData(emailValue, passwordValue);
            setErrorMessage(message);

            // If validation message exists, stop execution
            if (message) return;

            let action;
            if (!isLogin) {
                // If signing up, create a new user with email and password
                action = createUserWithEmailAndPassword(
                    auth,
                    emailValue,
                    passwordValue
                ).then((userCredential) => {
                    // After user is created, update their profile
                    const user = userCredential.user;

                    return updateProfile(user, {
                        displayName: name.current.value,
                    }).then(() => {
                        // Dispatch addUser action to add user data to Redux store
                        const { uid, displayName, email } = auth.currentUser;
                        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
                        navigate("/");
                    });
                });
            } else {
                // If logging in, sign in existing user with email and password
                action = signInWithEmailAndPassword(auth, emailValue, passwordValue);
            }

            action.catch((error) => {
                // If an error occurs during login/signup, set error message
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
            });
            
        }
    };


    return (
        <div className="relative min-h-screen flex flex-col bg-gray-900">

            {/* form */}
            <div className="mt-20 relative z-10 flex items-center justify-center m-auto bg-gray-800 max-w-2/3">
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="flex flex-col gap-9 text-gray-300 py-10 w-full mx-12"
                >
                    <h1 className="text-4xl text-white">
                        {isLogin ? "Sign In" : "Sign Up"}
                    </h1>
                    <div className="flex gap-4 flex-col w-80">
                        {isLogin ? (
                            ""
                        ) : (
                            <input ref={name}
                                type="text"
                                placeholder="Full Name"
                                className="p-4 bg-gray-700 rounded-md outline-none text-white placeholder-gray-500"
                            />
                        )}
                        <input
                            ref={email}
                            type="email"
                            placeholder="Email or phone number"
                            className="p-4 bg-gray-700 rounded-md outline-none text-white placeholder-gray-500"
                        />
                        <input
                            ref={password}
                            type="password"
                            placeholder="Password"
                            className="p-4 bg-gray-700 rounded-md outline-none text-white placeholder-gray-500"
                        />
                    </div>

                    <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
                    <button
                        className="bg-red-600 text-white p-3 rounded-md"
                        onClick={handleButtonClick}
                    >
                        {isLogin ? "Sign In" : "Sign Up"}
                    </button>

                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-2">
                            <input type="checkbox" />
                            <label for="checkbox">Remember me</label>
                        </div>
                        <p>Need help?</p>
                    </div>
                    <p>
                        {isLogin ? " New to Netflix? " : "Already Registered ? "}
                        <span className="text-white cursor-pointer" onClick={handleLogin}>
                            {isLogin ? "Sign up now." : "Sign In."}
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
