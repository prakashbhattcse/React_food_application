

import React, { Suspense, useState, useEffect, lazy } from 'react'
import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
// import About from './Components/About/About ';
import Error from './Components/Error';
import Contact from './Components/Contact';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './Components/RestaurantMenu';
import ReactLifeCycle from "../src/Components/ReactLifeCycle"
import userContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from "./utils/appStore"
import Cart from './Components/Cart';



const About = lazy(() => import('./Components/About '));

const App = () => {


  const [User, setUser] = useState()
  useEffect(() => {

    const data = {
      name: "Amit"
    }

    setUser(data.name)
  }, [])



  return (
    <>
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: User,setUser }}>
        <Header />
        <Outlet />
      </userContext.Provider>
      </Provider>
    </>
  );
};

const Root = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/about",
          element: <Suspense fallback={<h1>LOADING</h1>}><About /></Suspense>,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/restaurants/:resId",
          element: <RestaurantMenu />,
        },
        {
          path: "/reactlifecycle",
          element: <ReactLifeCycle />,
        },
        {
          path: "/cart",
          element: <Cart/>
        },
      ],
      errorElement: <Error />
    },


  ]);

  return (
    <RouterProvider router={router}>
      <Header />
    </RouterProvider>
  );
};

export default Root;








// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// const App = () => {
//   return (
//     <>
//       <Header />
//       <Body />
//     </>
//   );
// };

// const Root = () => {
//   return (
//     <Router>
//     <Header/>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<Error />}  />
//       </Routes>
//     </Router>
//   );
// };

// export default Root;

