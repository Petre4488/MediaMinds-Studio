import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  Outlet,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './Pages/HomePage/HomePage'
import ServicesPage from './Pages/ServicesPage/ServicesPage'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import './style.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/contacts",
    element: <ServicesPage />,
  },
  {
    path: "*",
    element: <ErrorPage/>
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
      <RouterProvider router={router}>
      <Route
        path="/"
        element={
          <>
            <Outlet /> {/* This renders the matched route's element */}
            <ErrorPage /> {/* This renders the error page for all routes */}
          </>
        }
      />
      </RouterProvider>
  </React.StrictMode>,
)
