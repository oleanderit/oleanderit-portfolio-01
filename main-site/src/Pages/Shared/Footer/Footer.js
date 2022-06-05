import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { ImLocation, ImPhone } from "react-icons/im";
import { IoMail, IoLogoLinkedin, IoLogoTwitter, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5";
import './Footer.css'


const Footer = () => {
    return (
        <div style={{ background: '#0B3155' }}>
            <Container>
                <div className='pt-3' >
                    <Row>
                        <Col sm="12" md="6" lg="3" className='pt-3' style={{ display: 'flex', justifyContent: 'center' }}>
                            <div> <img src="/asset/logo.jpeg" alt="" width="100" /></div>
                        </Col>
                        <Col sm="12" md="6" lg="2" className='pt-3'>
                            <div style={{ color: 'white', display: 'flex', flexDirection: "row", }}>
                                <div>
                                    <ImLocation style={{ margin: '10px' }} />
                                </div>
                                <div>
                                    <p>Oleander IT,144, East Tejturi Bazar, Tejgaon,
                                        Dhaka-1208</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm="12" md="6" lg="2" className='pt-3' >
                            <div style={{ color: 'white', display: 'flex', flexDirection: "row", }}>
                                <div>
                                    <ImPhone style={{ margin: '10px' }} />
                                </div>
                                <div>
                                    <p style={{ margin: '5px' }}>+880 1928 407091</p>
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
                                        <p style={{ margin: '5px' }}>info.oleanderit@gmail.com</p>
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
                            <Col sm="12" lg="2"><p>About Oleander IT</p></Col>
                            <Col sm="12" lg="2"><p>Become Our Agent</p></Col>
                            <Col sm="12" lg="2"><p>Join Our Affiliate Programme</p></Col>
                            <Col sm="12" lg="2"><p>Privacy Policy</p></Col>
                            <Col sm="12" lg="2"><p>Terms of Use</p></Col>
                        </Row>
                    </Col>
                    <Col sm="12" lg="2">
                        <Row>
                            <Col sm="12" lg="12"><p>Book a meeting with Us</p></Col>
                        </Row>
                    </Col>
                </Row>
                <div class="content">
                    <h2 style={{ color: 'white' }}>SUBSCRIBE TO OUR NEWSLETTER</h2>
                    <div class="input-group">
                        <input type="email" class="form-control" placeholder=" email@example.com" />
                        <span class="input-group-btn">
                            <button class="btn" type="submit">Subscribe Now</button>
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