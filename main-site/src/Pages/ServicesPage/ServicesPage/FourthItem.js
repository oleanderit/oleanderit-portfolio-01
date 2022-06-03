import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import {faHandPointRight} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FourthItem = () => {
    return (
        <div>
<Row>
<Col xs={12} md={5}>dfassdfg</Col>
              <Col xs={12} md={7}>

      <Row>
       
         <Col xs={12} md={5} >
              <Card style={{ width: '24rem',height:'41rem', marginTop:'20px' }}>
      <Card.Body className="first">
      <Card.Img variant="top" style={{width:'125px', height:'125px'}} src="https://www.scnsoft.com/application-development/web-dev-services/launch.svg" />
        <Card.Title style={{marginTop:'10px', marginBottom:'10px'}}> <b>Web development / launch of a web app</b> </Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text style={{textAlign:'justify'}}>
        We take a proactive approach to web development and elaborate on ways to uncover less obvious business requirements, save costs and envisage risks for your project.
        </Card.Text>
        <p style={{textAlign:'justify'}}> <b>Why choose ScienceSoft:</b> </p>
        <Card.Text style={{textAlign:'justify'}}>
     <FontAwesomeIcon style={{color:'blue'}} icon={faHandPointRight}/>   Skilled UX researchers. <br />
     <FontAwesomeIcon  style={{color:'blue'}} icon={faHandPointRight}/> Hands-on consulting expertise in 30+ industries including healthcare, finance, manufacturing, retail. <br />
     <FontAwesomeIcon  style={{color:'blue'}} icon={faHandPointRight}/> Experience with all the major app architecture types: microservices-based, traditional 3-layer, cloud native, event-driven, serverless, headless, service-oriented architectures. <br />
     <FontAwesomeIcon  style={{color:'blue'}} icon={faHandPointRight}/> Full-stack development of web apps
        </Card.Text>
       <Button style={{width:'350px'}}> Request The Service</Button> 

      </Card.Body>
    </Card>
</Col>
         <Col xs={12} md={5} >
              <Card style={{ width: '24rem',height:'41rem', marginTop:'20px' }}>
      <Card.Body className="first">
      <Card.Img variant="top" style={{width:'125px', height:'125px'}} src="https://www.scnsoft.com/application-development/web-dev-services/launch.svg" />
        <Card.Title style={{marginTop:'10px', marginBottom:'10px'}}> <b>Web development / launch of a web app</b> </Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text style={{textAlign:'justify'}}>
        We take a proactive approach to web development and elaborate on ways to uncover less obvious business requirements, save costs and envisage risks for your project.
        </Card.Text>
        <p style={{textAlign:'justify'}}> <b>Why choose ScienceSoft:</b> </p>
        <Card.Text style={{textAlign:'justify'}}>
     <FontAwesomeIcon style={{color:'blue'}} icon={faHandPointRight}/>   Skilled UX researchers. <br />
     <FontAwesomeIcon  style={{color:'blue'}} icon={faHandPointRight}/> Hands-on consulting expertise in 30+ industries including healthcare, finance, manufacturing, retail. <br />
     <FontAwesomeIcon  style={{color:'blue'}} icon={faHandPointRight}/> Experience with all the major app architecture types: microservices-based, traditional 3-layer, cloud native, event-driven, serverless, headless, service-oriented architectures. <br />
     <FontAwesomeIcon  style={{color:'blue'}} icon={faHandPointRight}/> Full-stack development of web apps
        </Card.Text>
       <Button style={{width:'350px'}}> Request The Service</Button> 

      </Card.Body>
    </Card>
</Col>
              </Row>
              </Col>
              </Row>
            
        </div>
    );
};

export default FourthItem;