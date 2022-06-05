import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ImLocation, ImPhone } from "react-icons/im";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoMail } from "react-icons/io5";
import './Footer.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div style={{ background: '#0B3155' }}>
            <Container>
                <div className='pt-3' >
                    <Row>
                        <Col sm="12" md="6" lg="3" className='pt-3' style={{ display: 'flex', justifyContent: 'center' }}>
                            <div> <Link to="/home#home"><img src="/asset/logo.jpeg" alt="" width="100" /></Link> </div>
                        </Col>
                        <Col sm="12" md="6" lg="2" className='pt-3'>
                            <div style={{ color: 'white', display: 'flex', flexDirection: "row", }}>
                                <div>
                                    <ImLocation style={{ margin: '10px' }} />
                                </div>
                                <div>
                                    <p > <a href="https://goo.gl/maps/gLUgfBkde8zhrwpV8" className='routeColor'>Oleander IT,144, East Tejturi Bazar, Tejgaon,
                                        Dhaka-1208</a></p>
                                </div>
                            </div>
                        </Col>
                        <Col sm="12" md="6" lg="2" className='pt-3  ' >
                            <div style={{ color: 'white', display: 'flex', flexDirection: "row", }}>
                                <div>
                                    <ImPhone style={{ margin: '10px' }} />
                                </div>
                                <div>

                                    <p style={{ margin: '5px' }}> <a className='routeColor' href="tel:+8801928407091">+880 1928 407091</a></p>
                                </div>
                            </div>
                        </Col>
                        <Col sm="12" md="6" lg="2" className='pt-3' >
                            <div style={{ color: 'white' }}>
                                <div style={{ color: 'white', display: 'flex', flexDirection: "row" }}>
                                    <div>
                                        <IoMail style={{ margin: '10px' }} />
                                    </div>
                                    <div>

                                        <p style={{ margin: '5px' }}><a className='routeColor' href="mailto:info.oleanderit@gmail.com">info.oleanderit@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm="12" md="6" lg="3" className='pt-3'>
                            <div style={{ color: 'white', fontSize: '35px', display: 'flex', justifyContent: 'space-around' }}>
                                <IoLogoLinkedin className="ms-lg-5  " />
                                <IoLogoTwitter />
                                <IoLogoFacebook />
                                <IoLogoInstagram />
                            </div>

                        </Col>
                    </Row>
                </div>
                <hr style={{ color: "white" }} />
                <Row style={{ color: 'white' }}>
                    <Col sm="12" lg="10">
                        <Row >
                            <Col sm="12" lg="2"> <HashLink
                                to="about#home"
                                className='routeColor'
                            >About Oleander IT</HashLink></Col>
                            <Col sm="12" lg="2">
                                <HashLink
                                    className='routeColor'
                                    to="becomeAgent#home"
                                >Become Our Agent</HashLink>
                            </Col>
                            <Col sm="12" lg="2">
                                <HashLink
                                    className='routeColor'
                                    to="affiliateProgramme#home"
                                >Join Our Affiliate Programme</HashLink></Col>
                            <Col sm="12" lg="2">
                                <HashLink
                                    className='routeColor'
                                    to="privacy-policy#home"
                                >Privacy Policy</HashLink>
                            </Col>
                            <Col sm="12" lg="2" >
                                <HashLink
                                    className='routeColor'
                                    to="trams-condition#home"
                                >Trams Condition</HashLink>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm="12" lg="2">
                        <Row>
                            <Col sm="12" lg="12"><HashLink
                                to="contactUs#home"
                                className='routeColor'
                            >Book a meeting with Us</HashLink></Col>
                        </Row>
                    </Col>
                </Row>
                <div className="content">
                    <h5 style={{ color: 'white' }}>SUBSCRIBE TO OUR NEWSLETTER</h5>
                    <div className="input-group">
                        <input type="email" className="form-control" placeholder=" email@example.com" />
                        <span className="input-group-btn">
                            <button className="btn" type="submit">Subscribe Now</button>
                        </span>
                    </div>
                </div>
                <div >
                    <Row style={{ color: "white" }} className="pt-3">
                        <Col sm="12" lg="6" className="pt-2" md={{ order: "last" }} >
                            <div style={{ textAlign: 'center' }}>
                                <img src="/asset/card.webp" alt="" />
                            </div>
                        </Col>
                        <Col sm="12" lg="6" className="pt-2" md={{ order: "first" }}>
                            <div style={{ textAlign: 'center' }}>
                                <p>© 2022 Oleander IT.
                                    All rights reserved.</p>
                            </div>

                        </Col>
                    </Row>
                </div>

            </Container>







        </div >
    );
};

export default Footer;