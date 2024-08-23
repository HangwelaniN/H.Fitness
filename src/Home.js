import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import { useRef } from "react";
import { useInView } from "framer-motion";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "./Footer";


function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
            <section ref={ref}>
             <span
               style={{
                transform: isInView ? "none" : "translateX(-200px)",
                 opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
             >
                {children}
              </span>
            </section>
  );
}

   export default function App() {
  return (
      <div className='App'>
      <Section >
        <h6 className="fs-5">Welcome To HangwelaniN Fitness</h6>
        <p>Your fitness journey starts here</p>
        <div className='box'>
        <p1>
        We are a premier online gym and fitness platform dedicated to helping 
        you achieve your fitness goals. Our platform is designed to give you 
        access to the best fitness resources and personalized training programs 
        that suit your unique lifestyle. Whether you’re just starting or 
        looking to take your fitness to the next level, we have everything you 
        need to succeed.
      </p1>
      </div>
            <div className="">
            <Button variant="outline-primary" size="lg" className='m-4 p-3'>Explore More</Button>
            <Button variant="outline-info" size="lg" className='p-3'>Get Started</Button>
            </div>
             
      </Section> 
      
      <Section>
        <div className='lgbox'>
    <Container>
      <Row>
        <Col>
        <div className="one">
            <div className='head'>Your Fitness Partner</div>
            <div className='no'>1.2M</div>
            <p5>WE ARE COMMITTED TO PROVIDING YOU WITH THE BEST FITNESS 
              EXPERIENCE. OUR PLATFORM IS DESIGNED TO HELP 
              YOU BECOME YOUR BEST SELF.
            </p5>
          </div>
        </Col>
        <Col>
        <br />
         <div className='two'>
            <h5 className='head'>Personalized Training Plans</h5>
            <div className='no'>98</div>
            <p5>Our fitness experts create personalized training plans tailored 
              to your fitness goals, needs, and lifestyle.
              </p5>
          </div>
        </Col>
        <Col>
        <br />
         <div className='three'>
            <h5 className='head'>24/7 Access To Resources</h5>
            <div className='no'>
              1.246
            </div>
            <p5>Our platform is accessible 24/7, giving you the freedom to work out anytime, anywhere.</p5>
          </div>
        </Col>
        <Col>
        <br />
        <br />
        <div className='four'>
            <h5 className='head'>Expert Tips and Advice</h5>
            <div className='no'>980</div>
            <p5>Our team of fitness experts provides you with expert tips and advice to help you stay on track and achieve your fitness goals.</p5>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
      </Section>
      <h5 className='head d-flex justify-content-center pt-3'>Services</h5>
        <h1 className='serv'>Our Services Include</h1>
    <Container>    
      <Row>
        <Col >
        <div className="pic">
        <img src={require('./imgs/pic11.jpg')} alt='Group workout' className='pics' />
        <h4>User Registration</h4>
        <p3>Our user registration process is simple and efficient, 
            allowing you to quickly create an account and get started 
            on your fitness journey.
        </p3>
          <br />
          <br />
          <a href='/' className='link'>MORE DETAILS  <FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
        </Col>
        <Col>
        <div className='pic  mt-3'>
        <img src={require('./imgs/pic6.jpg')} alt='Group classes' className='pics'/>
        <h4>Subscription Plans</h4>
        <p3>We offer flexible subscription plans that cater to your unique fitness needs. Whether you’re looking for a month-to-month option or
           a long-term commitment, we have a plan that fits your budget.
           </p3>
           <br />
           <br />
           <a href='/' className='link'>MORE DETAILS   <FontAwesomeIcon icon={faArrowRight} /></a>
        </div>
        </Col>
        <Col>
        <div className='pic mt-5'>
        <img src={require('./imgs/pic7.jpg')} alt='Group classes' className='pics'/>
        <h4>Account Management</h4>
        <p3>
        Our account management system makes it easy to track your progress, manage your subscription, 
        and stay up-to-date on our latest fitness tips and news.
        </p3>
        
        <br />
        <br />
        <a href='/' className='link'>MORE DETAILS  <FontAwesomeIcon icon={faArrowRight} /></a>
         </div>
        </Col>
      </Row>
    </Container>
      <Section>
        <Container>
          <Row>
            <Col>
            <img src={require('./imgs/pic1.jpg')} alt='Group classes' />
            </Col>
            <Col>
            <img src={require('./imgs/pic2.jpg')} alt='Group classes' />
            </Col>
            <Col>
            <img src={require('./imgs/pic3.jpg')} alt='Group classes' />
            </Col>
          </Row>
        </Container>
      </Section>
      <Section>
        <Container>
          <Row>
            <Col>
            <img src={require('./imgs/pic5.jpg')} alt='Group classes' />
            </Col>
            <Col>
            <img src={require('./imgs/pic8.jpg')} alt='Group classes' />
            </Col>
            <Col>
            <img src={require('./imgs/pic4.jpg')} alt='Group classes' />
            </Col>
          </Row>
        </Container>
      </Section>
        <div className="para mt-5">
          <h6 className="fs-4 pt-5 px-4 mx-3">FITNESS FOR EVERYONE</h6>
          <h4>Transform Your Life Today</h4>
          <p1 className="parag">
          At HangwelaniN Fitness, we believe that fitness should be 
          accessible to everyone. Our mission is to create an inclusive
           fitness community that supports and empowers individuals to 
           transform their lives. We strive to provide you with the 
           best fitness resources and personalized training plans to 
           help you achieve your goals, no matter where you are on your
            fitness journey.

          </p1>
        </div>
      <Footer />
    </div>
   
  );
}

