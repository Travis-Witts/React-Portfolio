import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Navigation() {

    return (
        <Navbar className="sticky-top d-flex align-items-center justify-content-center" bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#languages">Languages</Nav.Link>
          <Nav.Link href="#project">Projects</Nav.Link>
          <Nav.Link href="#history">Experience</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default Navigation