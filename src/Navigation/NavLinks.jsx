import React from 'react';
import { Nav } from 'react-bootstrap';

const NavLinks = () => {
  return (
    <Nav className="mx-auto gap-2">
        <Nav.Link href="#service" className='active'>Service</Nav.Link>
        <Nav.Link href="#cars">Cars</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
    </Nav>
  )
}

export default NavLinks