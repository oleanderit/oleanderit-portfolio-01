import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import {faRightLong} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThirdItem = () => {
    return (
        <div>

        
          <Row>
              <Col xs={12} md={5}>dfassdfg</Col>
              <Col xs={12} md={7}>

              <h2>Web Solutions ScienceSoft Creates</h2>
              <Row >
                <Col xs={12} md={5} >
       
                <Card style={{ width: '26rem', marginTop:'20px' }}>
      <Card.Body className="first">
      <Card.Img variant="top" style={{width:'50px', height:'50px'}} src="https://www.scnsoft.com/icons-linear-with-color-shape/website.svg" />
        <Card.Title style={{marginTop:'10px', marginBottom:'10px'}}> <b>Websites</b> </Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text style={{textAlign:'justify'}}>
        250+ businesses, governmental and non-profit organizations use the websites we’ve created for corporate presentation and brand building. We make sure our websites have an easy-to-use page editor for dynamic content management.
        </Card.Text>
        <Card.Link href="#" style={{textDecoration:'none'}}>CHECK OUR WEBSITE DEVELOPMENT SERVICES <FontAwesomeIcon icon={faRightLong}/> </Card.Link>

      </Card.Body>
    </Card>
    </Col>
                <Col xs={12} md={6} >
       
                <Card style={{ width: '26rem', marginTop:'20px' }}>
      <Card.Body className="first">
      <Card.Img variant="top" style={{width:'50px', height:'50px'}} src="https://www.scnsoft.com/icons-linear-with-color-shape/web-portal.svg" />
        <Card.Title style={{marginTop:'10px', marginBottom:'10px'}}> <b>Websites</b> </Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text style={{textAlign:'justify'}}>
        Since 2005, ScienceSoft has created web portals for different audiences: customers, business partners, ecommerce users, patients, vendors, interest-based communities.
        </Card.Text>
        <Card.Link href="#" style={{textDecoration:'none'}}>CHECK OUR WEBSITE DEVELOPMENT SERVICES <FontAwesomeIcon icon={faRightLong}/> </Card.Link>

      </Card.Body>
    </Card>
    </Col>
                <Col xs={12} md={5} >
       
                <Card style={{ width: '26rem', marginTop:'20px' }}>
      <Card.Body className="first">
      <Card.Img variant="top" style={{width:'50px', height:'50px'}} src="https://www.scnsoft.com/icons-linear-with-color-shape/website.svg" />
        <Card.Title style={{marginTop:'10px', marginBottom:'10px'}}> <b>Websites</b> </Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text style={{textAlign:'justify'}}>
        250+ businesses, governmental and non-profit organizations use the websites we’ve created for corporate presentation and brand building. We make sure our websites have an easy-to-use page editor for dynamic content management.
        </Card.Text>
        <Card.Link href="#" style={{textDecoration:'none'}}>CHECK OUR WEBSITE DEVELOPMENT SERVICES <FontAwesomeIcon icon={faRightLong}/> </Card.Link>

      </Card.Body>
    </Card>
    </Col>
                <Col xs={12} md={6} >
       
                <Card style={{ width: '26rem', marginTop:'20px' }}>
      <Card.Body className="first">
      <Card.Img variant="top" style={{width:'50px', height:'50px'}} src="https://www.scnsoft.com/icons-linear-with-color-shape/website.svg" />
        <Card.Title style={{marginTop:'10px', marginBottom:'10px'}}> <b>Websites</b> </Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text style={{textAlign:'justify'}}>
        250+ businesses, governmental and non-profit organizations use the websites we’ve created for corporate presentation and brand building. We make sure our websites have an easy-to-use page editor for dynamic content management.
        </Card.Text>
        <Card.Link href="#" style={{textDecoration:'none'}}>CHECK OUR WEBSITE DEVELOPMENT SERVICES <FontAwesomeIcon icon={faRightLong}/> </Card.Link>

      </Card.Body>
    </Card>
    </Col>
    </Row>



              </Col>
          </Row>
    
    
       
        </div>
    );
};

export default ThirdItem;