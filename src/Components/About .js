import React from 'react'
import UserFcn from './UserFcn'
import UserClass from './UserClass'
import ReactLifeCycle from "./ReactLifeCycle"
import userContext from '../utils/UserContext'

const About = () => {


  return (
    <div className='layout'>

      {/* <div className="aboutCard"> */}
      {/* <UserFcn name="amit" /> */}
      <UserClass name="amit" />


      <div>
        <userContext.Consumer>
          {({ loggedInUser }) => 
           <h1 className="text-xl font-bold">{loggedInUser}</h1>
          }
        </userContext.Consumer>
      </div>

      {/* <ReactLifeCycle /> */}
    </div>


    // </div>
  )
}

export default About
