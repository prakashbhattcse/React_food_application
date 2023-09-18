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



import React, { Suspense, lazy } from 'react'
import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
// import About from './Components/About/About ';
import Error from './Components/Error';
import Contact from './Components/Contact';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import RestaurantMenu from './Components/RestaurantMenu';
import ReactLifeCycle from "../src/Components/ReactLifeCycle"


const About = lazy(() => import('./Components/About '));

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
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
          element:  <Suspense fallback={<h1>LOADING</h1>}><About /></Suspense>,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/",
          element:<Body />,
        },
        {
          path: "/restaurants/:resId",
          element: <RestaurantMenu />,
        },
        {
          path: "/reactlifecycle",
          element: <ReactLifeCycle />,
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

