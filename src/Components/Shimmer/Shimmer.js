import React from 'react'
import "./Shimmer.css"


// const Shimmer = () => {
//     return (
//         <div className="shimmer-container">
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//             <div className="shimmer-card"></div>
//         </div>
//     )
// }

// export default Shimmer



const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {Array(10).fill().map((_, i) => (
                <div key={i} className="shimmer-card"></div>
            ))}
        </div>
    )
}

export default Shimmer



