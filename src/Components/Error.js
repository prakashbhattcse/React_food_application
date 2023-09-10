// import React from 'react'
// import { useRouteError } from 'react-router-dom'


// const Error = () => {

//   const err = useRouteError();
//   console.log(err)
//   return (
//     <div>
//         <h1>OOPS</h1>
//         <h1>Something went wrong</h1>
//         <h1>Error + {err}</h1>
//     </div>
//   )
// }

// export default Error

import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
  const err = useRouteError();
  console.log(err)
  return (
    <div>
        <h1>OOPS</h1>
        <h1>Something went wrong</h1>
        <h1>Error + {err.status} </h1>
    </div>
  )
}

export default Error
