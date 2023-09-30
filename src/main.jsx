import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './Pages/HomePage/HomePage'
/*import AboutPage from './Pages/AboutPage/AboutPage'
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage.jsx'
import ServicesPage from './Pages/ServicesPage/ServicesPage'*/
import AppRouter from './AppRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  
      <HomePage/>
      <AppRouter/>
  </React.StrictMode>,
)
