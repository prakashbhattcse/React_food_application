import React, { useContext } from 'react'
import { CDN_URL } from '../utils/constants';
import UserContext from '../utils/UserContext';
import { colors } from '../utils/constants';

const ResCard = (props) => {

    const { resData } = props;
    const { loggedInUser } = useContext(UserContext);

    const { info } = resData;

    //  console.log(info)
    //  console.log(resData)

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla, id, promoted, isOpen
    } = info;

    const { deliveryTime } = sla;



    return (
        <div className={`relative flex flex-col justify-center w-64 h-80 m-3 p-3 rounded-lg shadow-lg transition-all duration-300 bg-primary ${colors.textColor} border-2 border-transparent hover:shadow-xl hover:border-blue-500 backdrop-filter backdrop-blur-lg `}>
            <div className="w-full h-2/3 mb-2 overflow-hidden rounded-lg">
                <img
                    className="w-full h-full object-cover"
                    alt="res-logo"
                    src={CDN_URL + cloudinaryImageId}
                />
            </div>  
            <div className="mt-1.5 flex  gap-3 flex-col">
                <h3 className={`my-2.5 text-lg font-bold text-secondary`}>{name}</h3>
                <div className='flex justify-between items-center '>
                    <div>
                        {[...Array(5)].map((star, index) => {
                            const ratingValue = index + 1;
                            return (
                                <i
                                    key={index}
                                    className={`fas fa-star ${ratingValue <= Math.floor(avgRating)
                                        ? "text-yellow-500"
                                        : "text-gray-300"
                                        }`}
                                ></i>
                            );
                        })}
                    </div>

                    <h5 className='text-sm mb-2 '>{deliveryTime} minutes</h5>
                    {/* <h5 className='text-sm'>{avgRating} ⭐</h5> */}
               
                </div>
                <p>{cuisines.join(", ")}</p>

             
                {/* {isOpen ? (<p className="text-green-500 ">Open</p>) : (<p className="text-red-500">Close</p>)} */}
                <h5 className='text-sm'>{costForTwo} </h5>
            </div>
        </div>










    )
}



export const withPrmotedLabel = (ResCard) => {
    return (props) => {
        return (
            <>
                <div className="">
                    <label className='absolute z-10 ml-3 bg-white text-black rounded-r-lg rounded-tl-md p-1 px-2'>Promoted</label>
                    <ResCard {...props} />
                </div>
            </>
        )
    }
}
export default ResCard