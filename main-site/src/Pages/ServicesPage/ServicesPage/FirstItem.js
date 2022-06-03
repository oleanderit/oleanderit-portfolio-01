import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {faRightLong} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FirstItem = () => {
    return (
        <div style={{backgroundImage:`url(https://tbslawpa.com/wp-content/uploads/2013/01/blue-gradient-bg-update.jpg)`}}>
            <Row>
                <Col xs={12} md={6}>
                <Container>
                
                 <div style={{color:'white', marginTop:'110px', textAlign:'center'}}>
                 <h1>Web Development Services</h1>
                    <h5>Contemporary web design and clean coding</h5>
                    <p>Web development services help create all <br />
                        types of web-based software and ensure <br />
                        great experience for web users. At ScienceSoft,<br />
                         we professionally design, redesign and continuously <br />
                         support customer-facing and enterprise web apps to <br />
                         achieve high conversion and adoption rates.</p>
                 </div>
                 <Button  variant="light" >Request Web Development Services <FontAwesomeIcon style={{color:'blue'}} icon={faRightLong}/> </Button>
                </Container>
                </Col>
  <Col  xs={12} md={6} style={{marginTop:'30px'}}>
            <img src="https://www.scnsoft.com/application-development/web-dev-services/cover-pic-web-development-new.svg" alt="" />
            </Col>
   
        </Row>
                          
        </div>
    );
};

export default FirstItem;