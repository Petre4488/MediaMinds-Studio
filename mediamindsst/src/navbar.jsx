import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './style.scss'

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary bg-purple" style ={{zIndex: 100, }}>
      <Container style= {{backgroundColor: 'darkgray'}} className='rounded'>
        <Navbar.Brand href="#home">MediaMindsStudio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Photo/Video Editing</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Web-Engineering
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Copywriting
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;



