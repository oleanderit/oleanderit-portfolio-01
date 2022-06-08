import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import "./Service.css"

const Services = () => {
    let navigate = useNavigate();
    const gotoWebDesignPage = () => {
        navigate('/web-designPage')
    }
    return (
        <div style={{ backgroundColor: '#0B3155' }}>
            <Container>
                <div className='mt-5'>
                    <h1 style={{ fontSize: '4rem', color: 'white', textAlign: 'center' }}>Solutions We Deliver</h1>
                    <h6 style={{ fontSize: '20px', color: 'white', textAlign: 'center' }}>We IT-enable all kinds of B2B, B2C interactions and internal operations</h6>
                </div>
                <div className='mt-5'>
                    <Row>
                        <Col md="3" sm="12">
                            <div onClick={gotoWebDesignPage} className="boxDesign">
                                <div className='mx-5 my-3 pt-3'>
                                    <h3>Professional </h3>
                                    <h5>Website Designing</h5>
                                </div>
                            </div>
                        </Col>
                        <Col md="3" sm="12">
                            <div onClick={gotoWebDesignPage} className="boxDesign">
                                <div className='mx-5 my-3 pt-3'>
                                    <h3>Professional </h3>
                                    <h5>Website Development</h5>

                                </div>
                            </div>
                        </Col>
                        <Col md="3" sm="12">
                            <div onClick={gotoWebDesignPage} className="boxDesign">
                                <div className='mx-5 my-3 pt-3'>
                                    <h3>Website </h3>
                                    <h5>Maintenance & Update</h5>

                                </div>
                            </div>

                        </Col>
                        <Col md="3" sm="12">
                            <div onClick={gotoWebDesignPage} className="boxDesign">
                                <div className='mx-5 my-3 pt-3' >
                                    <h4>Domain & Hosting </h4>
                                    <h5>Solution & Support</h5>

                                </div>
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col md="3" sm="12">
                            <div onClick={gotoWebDesignPage} className="boxDesign">
                                <div className='mx-5 my-3 pt-3'>
                                    <h3>Search Engine</h3>
                                    <h5>Optimization (SEO)</h5>
                                </div>
                            </div>

                        </Col>
                        <Col md="3" sm="12">
                            <div onClick={gotoWebDesignPage} className="boxDesign">
                                <div className='mx-5 my-3 pt-3'>
                                    <h3>Social</h3>
                                    <h5>Media Marketing</h5>
                                </div>
                            </div>

                        </Col>
                        <Col md="3" sm="12">
                            <div onClick={gotoWebDesignPage} className="boxDesign">
                                <div className='mx-5 my-3 pt-3 '>
                                    <h3>Attractive</h3>
                                    <h5>Graphic Designing</h5>
                                </div>
                            </div>
                        </Col>
                        <Col md="3" sm="12">
                            <div onClick={gotoWebDesignPage} className="boxDesign">
                                <div className='mx-5 my-3 pt-3'>
                                    <h3>Engaging</h3>
                                    <h5>Content Writing</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3" sm="12">
                            <div onClick={gotoWebDesignPage} className="boxDesign">
                                <div className='mx-5 my-3 pt-3'>
                                    <h3>GPS</h3>
                                    <h5>Tracking System</h5>

                                </div>
                            </div>

                        </Col >
                        <Col md="3" sm="12">
                            <div onClick={gotoWebDesignPage} className="boxDesign">
                                <div className='mx-5 my-3 pt-3'>
                                    <h3>Virtual</h3>
                                    <h5>Card Solutions</h5>
                                </div>

                            </div>

                        </Col>
                        <Col md="3" sm="12">
                            <div onClick={gotoWebDesignPage} className="boxDesign">
                                <div className='mx-5 my-3 pt-3'>
                                    <h3>MS Excel </h3>
                                    <h5>Solution</h5>
                                </div>
                            </div>
                        </Col>
                        <Col md="3" sm="12">
                            <div onClick={gotoWebDesignPage} className="boxDesign">
                                <div className='mx-5 my-3 pt-3'>
                                    <h3>24/7</h3>
                                    <h5>Support</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container >
        </div>
    );
};

export default Services;