import React from 'react';
import {faSquareFull} from '@fortawesome/free-solid-svg-icons';

// import { } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Dropdown } from 'react-bootstrap';

const PartTwo = () => {
    return (
    <Container>
         <div style={{textAlign:'justify'}}>
       <h2 > <b>Privacy Policy </b> 
       <Dropdown.Divider style={{width:'50px',height:'2px', backgroundColor:'#ed8b00'}}/>
       </h2>


<div style={{color:'gray'}}>
<p style={{marginTop:'20px'}}>This privacy statement explains what personal data ScienceSoft collects from you and how we use that data.</p>
 <p style={{marginTop:'20px',marginBottom:'60px'}}>Last updated on 11/17/2021.</p>

             </div> 
             </div>

             <div style={{textAlign:'justify'}}>
       <h2 > <b>Who We Are</b> 
       <Dropdown.Divider style={{width:'50px',height:'2px', backgroundColor:'#ed8b00'}}/>
       </h2>

<div style={{color:'gray'}}>

 <p style={{marginTop:'20px',marginBottom:'60px'}}>We are ScienceSoft, a US-headquartered provider of custom software development and IT consulting services with 700 IT professionals located internationally. As you read this document, you are currently visiting our website, which is a digital face of our company. We are strongly committed to deliver you great experience while you are surfing our website, to share the materials you might be interested in, to promptly clarify any questions that might pop up and to ensure uninterrupted functioning of the website so that you don’t feel annoyed. This won’t be possible without your kind assistance, which you render by sharing your personal data with us. At the same time, we understand that personal data is an extremely sensitive matter and we take your privacy very seriously. To avoid making you feel uneasy in this regard, we’ve developed this privacy policy, which dwells on every little detail that refers to our work with your personal data.</p>

             </div> 
             </div>

             <div style={{textAlign:'justify'}}>
       <h2 > <b>Who We Are</b> 
       <Dropdown.Divider style={{width:'50px',height:'2px', backgroundColor:'#ed8b00'}}/>
       </h2>

<div style={{color:'gray'}}>

 <p style={{marginTop:'20px'}}>ScienceSoft collects data to provide you with direct feedback in respect of our services. You provide some of this data directly, such as when you fill in the Contact us form, Contact form, Office 365 migration calculator, QLEAN download and Ask author forms to contact us for support or comment on our articles. We get some data using technologies like cookies, and receiving error reports or usage data from software running on your device.</p>
 <p style={{marginTop:'20px'}}>We also obtain data from third parties. We protect data obtained from third parties according to the practices described in this statement, plus any additional restrictions imposed by the source of the data. These third-party sources may vary over time, but currently include:</p>
 <p><FontAwesomeIcon icon={faSquareFull} className='point'/>Service providers that help us determine a location based on your IP address in order to customize certain products to your location.</p>
 <p><FontAwesomeIcon icon={faSquareFull} className='point'/>Partners with which we offer co-branded services or engage in joint marketing activities.</p>
 <p><FontAwesomeIcon icon={faSquareFull} className='point'/>Publicly-available sources such as open government databases or other data in the public domain.</p>

 <p style={{marginTop:'20px'}}>You have choices about the data we collect. When you are asked to provide personal data, you may decline. But if you choose not to provide data that is necessary to deliver a service or a feature or give feedback, you may not be able to use this service or feature or receive feedback.</p>
 <p style={{marginTop:'20px'}}>The data we collect can include the following:</p>
 <p style={{marginTop:'20px'}}> <b style={{color:'black'}}>Name and contact data.</b> We collect your first and last name, work email address, phone number, company name and other similar contact data.</p>
 <p style={{marginTop:'20px'}}> <b style={{color:'black'}}>Demographic data. </b>  We collect data about you such as your country and preferred language.</p>
 <p style={{marginTop:'20px'}}> <b style={{color:'black'}}>Website data. </b>We collect data about how you interact within ScienceSoft website. For example, we collect:</p>


             </div> 
            
             </div>



    </Container>
    );
};

export default PartTwo;