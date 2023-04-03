import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = ({ handleCartOpen }) => {
  return (
    <Navbar bg="light" expand="lg" className="justify-content-between">
      <Container>
        <Navbar.Brand href="#home">Our Ecommerce Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link onClick={handleCartOpen}>My Cart</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
