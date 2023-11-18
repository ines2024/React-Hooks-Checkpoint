import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap";

function NavBar() {
    return (
        <div>
              <Navbar bg="dark" variant="dark">
              <Container>
              <Navbar.Brand href="#home">Cinemay</Navbar.Brand>
              <Nav className="me-auto">
              <Nav.Link href="#home">Movies</Nav.Link>
              <Nav.Link href="#features">Series</Nav.Link>
             <Nav.Link href="#pricing">Kid's</Nav.Link>
             </Nav>
             </Container>
             </Navbar>
        </div>
    )
}

export default NavBar