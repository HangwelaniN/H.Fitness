import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer(){
return (
<div className="footer pt-5">
<Container>
<Row>
<Col>
 <h2 className="na"> HangwelaniN Fitness</h2>
 <FontAwesomeIcon icon={faFacebook} size='xl' className='mx-3'/>
 <FontAwesomeIcon icon={faXTwitter} size='xl' className="mx-3"/>
 <FontAwesomeIcon icon={faYoutube} size='xl' className='mx-3'/>
</Col>
<Col>
<h3>Services</h3>
<ul > 
  <li>
    <a href='/' className='a'>Wellness experts</a>
  </li>
  <li>
    <a href='/' className='a'>VR Gym</a>
  </li>
  <li>
    <a href='/' className='a'>Leran to swim</a>
  </li>
  <li>
    <a href='/' className='a'>Workplace wellness</a>
  </li>
  <li>
    <a href='/' className='a'>Club-V kids gym</a>
  </li>
  <li>
    <a href='/' className='a'>Personal trainer</a>
  </li>
  <li>
    <a href='/' className='a'>memberships</a>
  </li>
</ul>
</Col>
<Col>
<h3>Company</h3>
<ul>
  <li>
    <a href='/' className='a'>Contact Us</a>
  </li>
  <li>
    <a href='/' className='a'>Member FAQs</a>
  </li>
  <li>
    <a href='/' className='a'>Careers</a>
  </li>
  <li>
    <a href='/' className='a'>Work as a PT</a>
  </li>
</ul>
</Col>
</Row>
</Container>
</div>
 );
};