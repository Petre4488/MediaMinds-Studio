import {NavBar} from './Components/navbar.jsx'
import {CarouselItem} from './Components/carousel.jsx'
import {Welcome} from './Components/display-img.jsx'
import './Components/style.css'

function HomePage() {
    return (
      <>
        <NavBar className='NavBar' />
        <Welcome className='Welcome' />
        <CarouselItem className='Carousel' />

      </>
    );
  }
  
  export default HomePage;
  