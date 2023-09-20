import React, { useContext } from 'react'
import { CDN_URL } from '../utils/constants';
import UserContext from '../utils/UserContext';

const ResCard = (props) => {

    const { resData } = props;
    const { loggedInUser } = useContext(UserContext);
    console.log(loggedInUser)

    const { info } = resData;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla, id, promoted
    } = info;

    const { deliveryTime } = sla;



    return (
        <div className='relative z-0 flex flex-col justify-center  w-[250px] h-[390px] m-3 p-3 rounded-md shadow-custom-light transition-all duration-300 bg-gradient-to-b from-c1 via-c2 to-c3 text-white'>
            <img
                className="w-[250px] h-[200px] object-cover rounded-lg"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <div className="pl-2 mt-1.5">
                <h3 className='my-2.5 font-bold text-yellow-400'>{name}</h3>
                {/* <h4>{cuisines}</h4> */}
                <h5 className='text-sm'>{avgRating} ⭐</h5>
                <h5 className='text-sm'>{costForTwo} </h5>
                <h5 className='text-sm'>{deliveryTime} minutes</h5>
                <h4 className='text-sm'>User : {loggedInUser} </h4>
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