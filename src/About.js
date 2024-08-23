import React from "react";
import './About.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { faCarrot } from '@fortawesome/free-solid-svg-icons'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react";
import { useInView } from "framer-motion";
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

export default function About() {

    return(
        <div className="about">
            <Section>
            <h1 className="us ">About Us</h1>
            <h2 className="vision">Our Vision</h2>
            <p className="goals">We empower individuals to achieve their fitness goals.</p>
      <Container>
          <Row>
           <Col sm={2}><FontAwesomeIcon icon={faDumbbell} className="nutr"/></Col>
           <Col sm={4}>
            <div className="plan">Customized Fitness Plans</div>
            <p1 className="time">
                Our fitness plans are tailored to meet your unique needs and goals, 
                ensuring maximum results in minimum time.
            </p1>
           </Col>
         </Row>
         <Row>
           <Col sm={2}><FontAwesomeIcon icon={faCarrot} className="nutr"/></Col>
           <Col sm={4}>
           <div className="plan">Personalized Nutrition Plans</div>
        <p1 className="time">
            Our nutrition plans are designed to complement your fitness regimen, 
            providing essential nutrients for peak performance.
        </p1>
           </Col>
         </Row>
         <Row>
           <Col  sm={2}><FontAwesomeIcon icon={faPeopleGroup} className="nutr" /></Col>
           <Col sm={4}>
           <div className="plan">
               Expert Coaching and Support
            </div>
            <p1 className="time">
            Our experienced coaches and trainers provide expert guidance and support 
            throughout your fitness journey, 
            ensuring you stay on track and achieve your goals.
            </p1>
           </Col>
         </Row>
      </Container>
      </Section>
      <br />
      <br />
      <br />
    <div className="cols">
    <Section>
        <Container >
            <Row >
            <Col > <img src={require('./imgs/pic11.jpg')} alt='Group workout' className='guid' /></Col>
           <Col  >
           <h2 className="visions">Who We Are</h2>
           <div className="plans">
           MEET THE TEAM AT HANGWELANIN FITNESS.
            </div>
            <div className="times">
            <p1 >
            At HangwelaniN Fitness, we’re passionate about fitness and helping you achieve your goals. Our team of dedicated professionals 
            has years of experience in the fitness industry and is committed to providing customized fitness and nutrition 
            solutions that work for you.
            </p1>
            </div>
           </Col>
            </Row>
        </Container>
    </Section>
    <Section>
        <Container>
            <Row >
           <Col  >
           <h2 className="visions">Our Skills</h2>
           <div className="plans">
           Our Main Services
            </div>
            <div className="times">
            <p1 >
            Our services include user registration, subscription plans, 
            account management, personalized fitness plans, personalized 
            nutrition plans, and expert coaching and support.
            </p1>
            </div>
           </Col>
           <Col > <img src={require('./imgs/pic9.jpg')} alt='Group workout' className='guid' /></Col>
            </Row>
        </Container>
    </Section>
      </div>
       <Footer />
        </div>
    )
};