import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage'
//import ErrorPage from './Pages/ErrorPage/ErrorPage'
/*import AboutPage from './Pages/AboutPage/AboutPage'
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage.jsx'
import ServicesPage from './Pages/ServicesPage/ServicesPage'*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
      <HomePage/>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
