import React from 'react'
import "../Components/Body/Body.css"
import pizzabg from "../utils/images/pizzabg.png"
import { contactData } from "../utils/constants"


const Contact = () => {
  return (
    <div className="bg-[#1D1D1D] text-white h-screen relative">
      <div className='before-tomato ' ></div>

      <div className='before-leavesbg'></div>
      <div className='before-bg2'></div>


      <div className="flex justify-between items-center h-full w-[100%]">
        <div className='flex flex-col items-center px-36 justify-center gap-8 scale-animation w-[50%]'>
          <h1 className='text-6xl font-funky'>Get in Touch</h1>
          <p className='text-justify'>
            We are an ambitious multimedia effort founded in 2011 to examine how technology will change life in the future for massive mainstream audience.Contact us today to find out how we can help you.
          </p>

            {contactData.map((data, index) => (
              <div key={index} className="flex justify-between md:flex-row items-center mb-4 w-1/2 mr-auto">
                <div className="w-1/3 text-center md:mb-0 ">

                  <img src={data.icon} alt={data.title} className='w-12' />
                </div>
                <div className='w-2/3'>
                  <h2 className="text-lg font-semibold">{data.title}</h2>
                  <p className="text-gray-600">{data.phone}</p>
                </div>
              </div>
            ))}
       

         
        </div>

        <div className=" w-[50%]">
          <div className=" p-14 w-2/3 m-auto scale-animation">
            <h1 className='text-3xl text-center font-funky'>Message Us</h1>
            <form className=' mt-3'>
              <div className="mb-4">
                <label htmlFor="name" className="block text-secondary font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 rounded-md bg-bg-secondary border-none"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-secondary font-bold mb-2">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 rounded-md bg-bg-secondary"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-secondary font-bold mb-2">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 rounded-md bg-bg-secondary"
                  required
                ></textarea>
              </div>

              {/* <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Send
              </button> */}
               <button className="cursor-pointer text-white text-left bg-red flex items-start justify-start px-8 py-2 rounded-lg mr-auto hover:shadow-lg hover:bg-opacity-70 transition-all duration-300">Send</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact



