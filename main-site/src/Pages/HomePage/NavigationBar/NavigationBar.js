import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css';
const NavigationBar = () => {

    const [show, setShow] = useState(false);
    const showDropdown = (e) => {
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
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
                            <Link style={{ textDecoration: "none", display: 'flex', alignItems: 'center' }} to="">Home</Link>
                            <NavDropdown title="Services" id="basic-nav-dropdown"
                                show={show}
                                onClick={showDropdown}
                                onBlur={hideDropdown}
                                >
                                <NavDropdown.Item href="#action/3.1">Web Development</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.2">Web Design(UI/UX)</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Tracking System</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Graphic Design</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Social Marketing</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">MS Excel Solution</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.3">Virtual Card Solution</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Link style={{ textDecoration: "none", display: 'flex', alignItems: 'center', marginRight: "10px" }} to="/about">About</Link>
                            <Link style={{ textDecoration: "none", display: 'flex', alignItems: 'center', marginRight: "10px" }} to="/myOi">My OI</Link>
                            <Link style={{ textDecoration: "none", display: 'flex', alignItems: 'center', marginRight: "10px" }} to="/contactUs">Contact Us</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;