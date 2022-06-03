import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import ImportantPart from './ImportantPart';
import Accordion from './ImportantPart';
import './SecondItem.css'

const SecondItem = () => {
    return (
        <div>
           

<Row>
<Col xs={12} md={5} >
<ImportantPart></ImportantPart>
</Col>
<Col xs={12} md={7} >
                <h2>The Scope of a Common Web Development Project by ScienceSoft</h2>
<Row >
                <Col xs={12} md={5} >
       
                <Card style={{ width: '26rem', marginTop:'20px' }}>
      <Card.Body className="first">
      <Card.Img variant="top" style={{width:'50px', height:'50px'}} src="https://www.scnsoft.com/icons-linear-with-color-shape/analytics.svg" />
        <Card.Title style={{marginTop:'10px', marginBottom:'10px'}}> <b>Business analysis</b> </Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text style={{textAlign:'justify'}}>
        Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution. They also bridge the gap between business stakeholders and an IT team to keep all the involved parties aligned.
        </Card.Text>
      </Card.Body>
    </Card>
    
    
    
         
    </Col>
                <Col xs={12} md={5}>
                <Card style={{ width: '26rem' , marginTop:'20px' }}>
      <Card.Body className="first">
      <Card.Img variant="top" style={{width:'50px', height:'50px'}} src="https://www.scnsoft.com/icons-linear-with-color-shape/design.svg" />
        <Card.Title style={{marginTop:'10px', marginBottom:'10px'}}> <b>Business analysis</b> </Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text style={{textAlign:'justify'}}>
        Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution. They also bridge the gap between business stakeholders and an IT team to keep all the involved parties aligned.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    <Row>
    
                <Col xs={12} md={5}>
                <Card style={{ width: '26rem' , marginTop:'20px' }}>
      <Card.Body className="first">
      <Card.Img variant="top" style={{width:'50px', height:'50px'}} src="https://www.scnsoft.com/icons-linear-with-color-shape/back-end.svg" />
        <Card.Title style={{marginTop:'10px', marginBottom:'10px'}}> <b>Business analysis</b> </Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text style={{textAlign:'justify'}}>
        Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution. They also bridge the gap between business stakeholders and an IT team to keep all the involved parties aligned.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    
    
                <Col xs={12} md={4}>
                <Card style={{ width: '26rem' , marginTop:'20px' }}>
      <Card.Body className="first">
      <Card.Img variant="top" style={{width:'50px', height:'50px'}} src="https://www.scnsoft.com/icons-linear-with-color-shape/integrations.svg" />
        <Card.Title style={{marginTop:'10px', marginBottom:'10px'}}> <b>Business analysis</b> </Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text style={{textAlign:'justify'}}>
        Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution. They also bridge the gap between business stakeholders and an IT team to keep all the involved parties aligned.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    <Row>
                <Col xs={12} md={5}>
                <Card style={{ width: '26rem' , marginTop:'20px' }}>
      <Card.Body className="first">
      <Card.Img variant="top" style={{width:'50px', height:'50px'}} src="https://www.scnsoft.com/icons-linear-with-color-shape/help-desk.svg" />
        <Card.Title style={{marginTop:'10px', marginBottom:'10px'}}> <b>Business analysis</b> </Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text style={{textAlign:'justify'}}>
        Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution. They also bridge the gap between business stakeholders and an IT team to keep all the involved parties aligned.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    
    
                <Col xs={12} md={4}>
                <Card style={{ width: '26rem' , marginTop:'20px' }}>
      <Card.Body className="first">
      <Card.Img variant="top" style={{width:'50px', height:'50px'}} src="https://www.scnsoft.com/icons-linear-with-color-shape/maintenance.svg" />
        <Card.Title style={{marginTop:'10px', marginBottom:'10px'}}> <b>Business analysis</b> </Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text style={{textAlign:'justify'}}>
        Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution. They also bridge the gap between business stakeholders and an IT team to keep all the involved parties aligned.
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    </Row>
</Col>
</Row>

                 
    
    

        </div>
    );
};

export default SecondItem;