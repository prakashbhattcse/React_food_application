import React from 'react'
import { CDN_URL } from '../utils/constants';


const ResCard = (props) => {

    const { resData } = props;
    // const { loggedInUser } = useContext(UserContext);
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
        <div className='flex flex-col items-center justify-center w-[250px] h-[320px] m-3 p-3 rounded-md shadow-custom-light transition-all duration-300 bg-gradient-to-b from-c1 via-c2 to-c3 text-white'>
            <img
                className="w-[250px] h-[200px] object-cover round-md"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h4 className='mt-2.5'>{name}</h4>
            {/* <h4>{cuisines}</h4> */}
            <h5 className='mt-1.5'>{avgRating} stars</h5>
            <h5 className='mt-1.5'>{costForTwo} </h5>
            <h5 className='mt-1.5'>{deliveryTime} minutes</h5>
            {/* <h4>User : {loggedInUser} </h4> */}
        </div>
    )
}



export const withPrmotedLabel = (ResCard) => {
    return (props) => {
        return (
            <>
                <div className="">
                    <label>Promoted</label>
                    <ResCard {...props} />
                </div>
            </>
        )
    }
}
export default ResCard