import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import cr1 from './assets/cr1.jpeg'
import cr2 from './assets/cr2.jpeg'
import cr3 from './assets/cr3.jpeg'

function CarouselItem() {
  const textOutlineStyle = {
    color: '#fff',
    textShadow: '1px 1px 0px rgba(0, 0, 0, 1)',
    h3: {
      WebkitTextStroke: '1px black',
    },
    p: {
      fontSize: '15px',
      WebkitTextStroke: '0.5px black'
    } 
  };

  return (
    <Container style={{ maxWidth: '80%', zIndex: '80' }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cr1}
            alt="First slide"
          />
          <Carousel.Caption style={textOutlineStyle}>
            <h3>Grow your business with us!</h3>
            <p>Elevating your online presence through web, SEO, media, and wordsmith wizardry.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cr3}
            alt="Second slide"
          />
          <Carousel.Caption style={textOutlineStyle}>
            <h3>Join us today!</h3>
            <p>Crafting digital success with web, SEO, editing, and writing expertise.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cr2}
            alt="Third slide"
          />
          <Carousel.Caption style={textOutlineStyle}>
            <h3>Get high-quality services!</h3>
            <p>Digital Artisans: Transforming your online world with web, SEO, editing, and copy brilliance.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CarouselItem;
