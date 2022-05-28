import React from 'react';
// boot strap item
import {Nav , Navbar , Container , Offcanvas , NavDropdown , Form ,FormControl , Button} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
// img item
import Logo from "./img/logo.png";







const nav = () =>{
  return (
    <div>
      <Navbar className='Navbar' bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#"><img src={Logo} /></Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          
          <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
            <Nav className="ml-auto my-2 my-lg-0">
              <Nav.Link href="About_Us">Home</Nav.Link>  
              <Nav.Link href="#action2">About Us</Nav.Link>  
              <Nav.Link href="#action3">Explore Foods</Nav.Link>  
              <Nav.Link href="#action4">Reviews</Nav.Link>  
              <Nav.Link href="#action5">FAQ</Nav.Link>
              <Nav.Link href='tel:"+123456789"' className="btn btn-outline-primary">+123-456-789</Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default nav;
