import React, { useEffect } from 'react'
import UserFcn from './UserFcn'
import UserClass from './UserClass'
import ReactLifeCycle from "./ReactLifeCycle"
import userContext from '../utils/UserContext'
import "../Components/Body/Body.css"
import pizzabg from "../utils/images/pizzabg.png"

const About = () => {


    return (
        //     <div className='layout'>

        //       <div className="aboutCard">
        //       <UserFcn name="amit" />
        //       <UserClass name="amit" />


        //       <div>
        //         <userContext.Consumer>
        //           {({ loggedInUser }) => 
        //            <h1 className="text-xl font-bold">{loggedInUser}</h1>
        //           }
        //         </userContext.Consumer>
        //       </div>

        //       <ReactLifeCycle />
        //     </div>

        //  </div>
        // <div className="p-10 bg-opacity-60 backdrop-blur rounded-xl">

        <div className="bg-[#1D1D1D] text-white h-screen relative">
            <div className='before-tomato ' ></div>

            <div className='before-div'></div>
            <div className='before-bg2'></div>
            <div className="flex justify-between items-center h-full">
                <div className='flex flex-col items-center px-36 justify-center gap-8 scale-animation'>
                    <h1 className='text-6xl font-funky'>Serving You a Taste of Home</h1>
                    <p className=''>
                        A restaurant sometimes known as a diner is a place where cooked food is sold to the public, and where people sit down to eat it. It is also a place where people go to enjoy the time and to eat a meal. Some restaurants are a chain, meaning that there are restaurants which have the same name and serve is also a place where people go to enjoy the time and to eat a meal the same food.
                    </p>

                    <button className="cursor-pointer text-white text-left bg-red flex items-start justify-start p-4 rounded-lg mr-auto hover:shadow-lg hover:bg-opacity-70 transition-all duration-300">More About Us</button>
                </div>
                <img src={pizzabg} alt="" className='z-20 scale-animation' />
            </div>

        </div>

    )
}

export default About
