import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
         <div className='wrap1'>
          <div className="sec1 d-flex justify-content-between">
           <h1 className='fs-5 p-3'><FontAwesomeIcon icon={faDumbbell} /> HangwelaniN Fitness</h1>
           <ul className='d-flex p-3 fs-2'>
            <li><FontAwesomeIcon icon={faFacebook} className=" mx-2"/></li>
            <li><FontAwesomeIcon icon={faInstagram}  className=" mx-2"/></li>
            <li><FontAwesomeIcon icon={faXTwitter} className=" mx-2"/></li>
           </ul>
            </div>
            <p>Transform Your Body Today</p>
           <p1>Unlock your potential with Johannesburg's elite fitness training
            at HangwelaniN Fitness
           </p1>
           <br />
           <br />
           
            <Button variant="light" className='button'>Join Now</Button>
        
         </div>
    </div>
  );
}

export default App;
