import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
const NavigationBar = () => {
    return (
        <> <Container>
            <div className='topNav'> <div style={{ display: 'flex', flexDirection: 'row', }}><p className='px-1 my-auto'>Email: info.oleanderit@gmail.com</p> <p className='px-1 my-auto'>Mobile:+123456789</p></div> <div><p className='px-1 my-auto'>Facebook</p></div></div>
        </Container>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Oleander IT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/" className='navBtn px-4 p-1' >Home</Link>
                            <Link to="/services" className='navBtn px-4 p-1' >Services</Link>
                            <Link to="/about" className='navBtn px-4 p-1'>About</Link>
                            <Link to="/myOi" className='navBtn px-4 p-1'>My OI</Link>
                            <Link style={{ backgroundColor: "#0b61b3", color: 'white', }} className="px-3 p-2 navBtn" to="/contactUs">LET'S TALK</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;