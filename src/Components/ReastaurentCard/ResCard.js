import React from 'react'
import { CDN_URL } from '../../utils/constants';
import "./ResCard.css";

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
        sla,
    } = info;

    const { deliveryTime } = sla;


    return (
        <div className='cardLayout'>
            <img
                className="card-img"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h4>{name}</h4>
            {/* <h4>{cuisines}</h4> */}
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo} </h5>
            <h5>{deliveryTime} minutes</h5>
            {/* <h4>User : {loggedInUser} </h4> */}
        </div>
    )
}

export default ResCard