import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { faEnvelope, faMapMarked, faPhone, faPaperPlane  } from '@fortawesome/free-solid-svg-icons';
import {faHandshakeSimple} from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import '../AboutPage/AboutPage.css'


const AboutPage = () => {
    



    return (
        <div>
            <Container>
                <Row>
                <Col  xs={12} md={4} style={{marginTop:'30px'}}>
                <Card style={{ width: '18rem', height:'23rem', marginLeft:'45px' }} >
  <Card.Body>
  <FontAwesomeIcon icon={faHandshakeSimple} size="4x" style={{marginTop:'30px'}} className="item1"/>

    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}

<Dropdown.Divider style={{marginTop:'30px', width:'55%' , marginLeft:'50px', marginBottom:'30px'}}  />
<Card.Title className='item2'> <b>Card Title</b> </Card.Title>
    <Card.Text className='item3'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>

                </Col>
                <Col  xs={12} md={4} style={{marginTop:'30px'}}>
                <Card style={{ width: '18rem', height:'23rem' , marginLeft:'45px' }} >
  <Card.Body>
  <FontAwesomeIcon icon={faHandshakeSimple} size="4x" style={{marginTop:'30px'}} className="item1"/>

    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}

<Dropdown.Divider style={{marginTop:'30px', width:'55%' , marginLeft:'50px', marginBottom:'30px'}}  />
<Card.Title className='item2'> <b>Card Title</b> </Card.Title>
    <Card.Text className='item3'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>

                </Col>
                <Col  xs={12} md={4} style={{marginTop:'30px'}}>
                <Card style={{ width: '18rem', height:'23rem' , marginLeft:'45px' }} >
  <Card.Body>
  <FontAwesomeIcon icon={faHandshakeSimple} size="4x" style={{marginTop:'30px'}} className="item1"/>

    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}

<Dropdown.Divider style={{marginTop:'30px', width:'55%' , marginLeft:'50px', marginBottom:'30px'}}  />
<Card.Title className='item2'> <b>Card Title</b> </Card.Title>
    <Card.Text className='item3'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>

                </Col>
                <Col  xs={12} md={4} style={{marginTop:'30px'}}>
                <Card style={{ width: '18rem', height:'23rem' , marginLeft:'45px' }} >
  <Card.Body>
  <FontAwesomeIcon icon={faHandshakeSimple} size="4x" style={{marginTop:'30px'}} className="item1"/>

    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}

<Dropdown.Divider style={{marginTop:'30px', width:'55%' , marginLeft:'50px', marginBottom:'30px'}}  />
<Card.Title className='item2'> <b>Card Title</b> </Card.Title>
    <Card.Text className='item3'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>

                </Col>
                <Col  xs={12} md={4} style={{marginTop:'30px'}}>
                <Card style={{ width: '18rem', height:'23rem' , marginLeft:'45px'}} >
  <Card.Body>
  <FontAwesomeIcon icon={faHandshakeSimple} size="4x" style={{marginTop:'30px'}} className="item1"/>

    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}

<Dropdown.Divider style={{marginTop:'30px', width:'55%' , marginLeft:'50px', marginBottom:'30px'}}  />
<Card.Title className='item2'> <b>Card Title</b> </Card.Title>
    <Card.Text className='item3'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>

                </Col>
                <Col  xs={12} md={2} style={{marginTop:'30px'}}>
                <Card style={{ width: '18rem', height:'23rem' , marginLeft:'45px'}} >
  <Card.Body>
  <FontAwesomeIcon icon={faHandshakeSimple} size="4x" style={{marginTop:'30px'}} className="item1"/>

    {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}

<Dropdown.Divider style={{marginTop:'30px', width:'55%' , marginLeft:'50px', marginBottom:'30px'}}  />
<Card.Title className='item2'> <b>Card Title</b> </Card.Title>
    <Card.Text className='item3'>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
</Card>

                </Col>
                </Row>


                <div className='progressBackground'  >
    <h4 style={{paddingTop:'50px' ,marginBottom:'50px', color:'white'}}> 
You can check out our work. Are you ready for a better, more productive business?  </h4>
    <Container style={{ marginBottom:'100px', marginRight:'190px'}}>
 <Row style={{marginTop:'30px', marginBottom:'20px'}}>
    <Col xs={6} md={3} style={{paddingRight:'50px'}}>
    <div className="box">
    <div className="percent">
      <svg >
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>
      <div className="num" >
        <h2>80<span>%</span></h2>
      </div>
    </div>
    <h2 className="text">

  </h2>
  </div>
    </Col>
    <Col xs={6} md={3} >
    <div className="box2" >
    <div className="percent" >
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>
      <div className="num">
        <h2>75<span>%</span></h2>
      </div>
    </div>
    <h2 className="text">

      </h2>
  </div>
    </Col>
    <Col xs={6} md={3}>
    <div className="box3">
    <div className="percent">
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>
      <div className="num">
        <h2>70<span>%</span></h2>
      </div>
    </div>
    <h2 className="text">

      </h2>
  </div>
    </Col>
    <Col xs={6} md={2}>
    <div className="box4">
    <div className="percent">
      <svg>
        <circle cx="70" cy="70" r="70"></circle>
        <circle cx="70" cy="70" r="70"></circle>
      </svg>
      <div className="num">
        <h2>85<span>%</span></h2>
      </div>
    </div>
    <h2 className="text">
</h2>
  </div>
    </Col>
    
  </Row>

  </Container>

  
                </div>
 
</Container>
        </div>
    );
};

export default AboutPage; 