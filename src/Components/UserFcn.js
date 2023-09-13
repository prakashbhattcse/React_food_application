import React, { useState } from 'react'
import "../../src/App.css"

const UserFcn = (props) => {

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(1)

    return (
        <div className="aboutCard">
            <h2>Name : {props.name}</h2>
            <h3>{count}</h3>
            <h3>{count1}</h3>
            
        </div>
    )
}

export default UserFcn