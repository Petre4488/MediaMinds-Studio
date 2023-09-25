import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './navbar.jsx'
import CarouselItem from './carousel.jsx'
// eslint-disable-next-line no-unused-vars
import DisplayImg from './display-img.jsx'
import Background from './Background/animated-bg.jsx'
import './style.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar className='NavBar' />
    <DisplayImg className='Holder' />
    <CarouselItem className='Carousel' />
    <Background className="background" /> 

  </React.StrictMode>,
)
