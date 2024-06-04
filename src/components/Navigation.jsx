import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import NavLinks from '../Navigation/NavLinks';

const Navigation = () => {
  return (
    <Container>
      <Navbar expand='lg'>
        <Container>
          <Navbar.Brand href="#home">
            TRUCK.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <NavLinks />
            <Nav className='nav-auth'>
              <Nav.Link href="#" className='text-orange border-right'>Log in </Nav.Link>
              <Nav.Link href="#" className='btn btn-orange'>Sign up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  )
}

export default Navigation