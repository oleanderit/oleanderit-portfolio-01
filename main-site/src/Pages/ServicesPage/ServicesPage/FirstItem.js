import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


const FirstItem = () => {
    let navigate = useNavigate();


    return (
        <div style={{ backgroundImage: `url(https://tbslawpa.com/wp-content/uploads/2013/01/blue-gradient-bg-update.jpg)` }}>
            <Container>
                <Row>
                    <Col xs={12} md={6}>

                        <div style={{ color: 'white', marginTop: '110px', }}>
                            <h1>Information Technology <br /> Solution and Support</h1>
                            <h5>Get Your Business and IT Strategies Aligned</h5>
                            <p>Information technology (IT) consulting services help you shape a winning IT strategy. In IT consulting since 1989, ScienceSoft can expertly guide your IT and digital transformation initiatives from strategy to implementation.</p>
                        </div>
                        <div style={{ textAlign: 'center', padding: '20px', marginTop: '50px', marginBottom: '50px' }}>
                            <HashLink smooth to="/contactUs#home">
                                <Button variant="light"><b>Contact US</b> <FontAwesomeIcon style={{ color: 'blue' }} icon={faRightLong} /> </Button>
                            </HashLink>

                        </div>

                    </Col>
                    <Col xs={12} md={6} style={{ marginTop: '30px' }}>
                        <img src="https://www.scnsoft.com/application-development/web-dev-services/cover-pic-web-development-new.svg" alt="" />
                    </Col>

                </Row>
            </Container>


        </div>
    );
};

export default FirstItem;