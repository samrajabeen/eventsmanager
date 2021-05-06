import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navi(props) {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Logged in as: Name</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
        <Nav.Link href="#events">Events</Nav.Link>
        <Nav.Link href="#admin">Admin</Nav.Link>
    </Nav>
    <Nav>
        <Nav.Link href="#contact">Contact</Nav.Link>
        <Nav.Link href="#logout">Logout</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
    )
}

export default Navi