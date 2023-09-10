// import React from 'react';
// import './App.css';
// import Body from './Components/Body/Body';
// import Header from './Components/Header/Header';
// import About from './Components/About/About ';
// import Error from './Components/Error';
// import Contact from './Components/Contact/Contact';
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



import React from 'react';
import './App.css';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import About from './Components/About/About ';
import Error from './Components/Error';
import Contact from './Components/Contact/Contact';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

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
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/",
          element: <Body />,
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

