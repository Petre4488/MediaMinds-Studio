import React from 'react'
import ReactDOM from 'react-dom/client'
import AboutPage from './Pages/AboutPage/AboutPage'
import HomePage from './Pages/HomePage/HomePage'
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage.jsx'
import ServicesPage from './Pages/ServicesPage/ServicesPage'
import AppRouter from './AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
      <HomePage/>
      <AboutPage/>
      <PortfolioPage/>
      <ServicesPage/>
      <AppRouter/>
  </React.StrictMode>,
)
