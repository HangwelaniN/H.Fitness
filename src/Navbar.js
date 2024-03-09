import { Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './About.css'

export default function Navbar() {
  const activeState = ({ isActive }) => {
    return {
      color: isActive ? "rgb(136,127,130)" : "",
      backgroundColor: isActive ? "rgb(248,249,250)" : "",
      fontWeight: isActive ? "bold" : ""
    };
  };
  return (
    <>
      <nav className="navbar">
        <div className="brand"><FontAwesomeIcon icon={faDumbbell} />  HangwelaniN <div className='px-4'>Fitness</div></div>
          <ul >
            <li >
              <NavLink to="/"  style={activeState}>Home</NavLink>
            </li>
            <li>
              <NavLink to="About" style={activeState}>About us</NavLink>
            </li>
            <li>
              <NavLink to="Pricing" style={activeState}>Pricing</NavLink>
            </li>
          </ul>
        </nav>
      <Outlet />
    </>
  );
}