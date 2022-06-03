import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import './CountUpSec.css'
import CountUp from 'react-countup';
const CountUpSec = () => {
    return (
        <Container>
            <Row className='py-4'>
                <Col sm="12" md="4" className='py-3'>
                    <div className='p-4 BoxOnHover'>

                        <h4><b><CountUp start={100} end={200} suffix="+" /></b></h4>
                        <h3>Project Done</h3>
                    </div>
                </Col>
                <Col sm="12" md="4" className='py-3 '>
                    <div className='p-4 BoxOnHover'>
                        <h4><b><CountUp start={100} end={200} suffix="+" /></b></h4>
                        <h3>Happy Clint</h3>
                    </div>


                </Col>
                <Col sm="12" md="4" className='py-3'>
                    <div className='p-4 BoxOnHover'>
                        <h4><b><CountUp start={1} end={20} suffix="+" /></b></h4>
                        <h3>Running Project</h3>
                    </div>

                </Col>
            </Row>
        </Container>
    );
};

export default CountUpSec;