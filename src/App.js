import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Button from 'react-bootstrap/Button';
import { useRef } from "react";
import { useInView } from "framer-motion";

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
         <div className="sec1 d-flex justify-content-between">
           <h1 className='icons p-3 fs-5  '><FontAwesomeIcon icon={faDumbbell} /> HangwelaniN <div className='px-4 mx-2'>Fitness</div> </h1>
           <ul className=' d-flex p-3 fs-2'>
            <li><FontAwesomeIcon icon={faFacebook} className=" mx-2"/></li>
            <li><FontAwesomeIcon icon={faInstagram}  className=" mx-2"/></li>
            <li><FontAwesomeIcon icon={faXTwitter} className=" mx-2"/></li>
           </ul>
            </div>
      <Section >
        <p>Transform Your Body Today</p>
        <p1>Unlock your potential with Johannesburg's elite fitness training
            at HangwelaniN Fitness
      </p1>
            <div className="d-grid gap-2 px-4 p-5">
            <Button variant="light" size="lg">Join Now</Button>
            </div>
             
      </Section> 
      
      <Section>
        <p2>
          Introducing HangwelaniN Fitness, your ultimate fitness destination in
          Johannesburg, GP. We are dedicated to helping individuals achieve their
          health and wellness goals through personalized training programs and
          state-of-the-art facilities. Our experienced team of fitness experts
          is committed to providing top-notch guidance, motivation, and support
          to ensure you reach your full potential. Whether you're a beginner or
          a seasoned athlete, we offer a wide range of fitness classes and equipment 
          to cater to all levels and preferences. Join HangwelaniN Fitness today and 
          let us help you transform your body and elevate your fitness journey to new 
          heights.
       </p2>
      </Section>
        <h1>Our Services</h1>
      <Section>
  
      </Section>
  
    </div>
   
  );
}

