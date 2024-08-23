
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Pricing.css";
import  Form  from "./Form";
import Footer from "./Footer";


    export default function Pricing() {
    return(
       <div className="pricing">
        <h6 className="member">MEMBERSHIPS</h6>
        <h1 className="works">Choose a plan that works for you</h1>
        <Container>
            <Row>
                <Col className="gyms">
                 There is an affordable gym membership to suit everyone at HangwelaniN Fitness. Find yours…
                </Col>
            </Row>
        </Container>
        <h6 className="member">month to month plan</h6>
        <Container>
        <Row>
        <Col className="trainer">
        <h5 className="labels">BASIC</h5>
        <h1 className="price">R300</h1>
        <div className="health">
        <ul>
            <li className="list">
                Access to all areas
            </li>
            <li className="list">Access to  consultation</li>
            <li className="list">
                limited time each day
            </li>
            <li className="list">No personal trainer</li>
        </ul>
        </div>
        </Col>
        <Col className="trainer">
        <h5 className="labels">STANDARD</h5>
        <h1 className="price">R500</h1>
        <div className="health">
        <ul>
            <li className="list">
                Access to all areas
            </li>
            <li className="list">Access to  consultation</li>
            <li className="list">
                Unlimited time each day
            </li>
            <li className="list">No personal trainer</li>
        </ul>
        </div>
        </Col>
        <Col className="trainer">
        <h5 className="labels">BASIC</h5>
        <h1 className="price">R700</h1>
        <div className="health">
            <ul>
            <li className="list">
             Access to all areas
            </li>
            <li className="list">
                Access to  consultation</li>
            <li className="list">
                unlimited time each day
            </li>
            <li className="list">Access personal trainer</li>
            </ul>
            
        </div>
        
        </Col>
      </Row>
    </Container>
    <Form />
    <Footer />
       </div>
    )
};