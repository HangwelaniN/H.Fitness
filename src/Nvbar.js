
import { Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Nvbar.css'
import { useState } from "react";

export default function Nvbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeState = ({ isActive }) => isActive ? {
    color: "rgb(136,127,130)",
    backgroundColor: "rgb(248,249,250)",
    fontWeight: "bold"
  } : {};

  return (
    <>
      <nav className="navbar">
        <div className="brand">
          <FontAwesomeIcon icon={faDumbbell} />
          HangwelaniN
          <div className='px-4'>Fitness</div>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={`nav-scroll ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links d-block">
            <div className="nav-link">
            <li>
              <NavLink to="/" style={activeState} aria-label="Home">
                Home
              </NavLink>
            </li>
            </div>
            <div className="nav-link">
            <li>
              <NavLink to="About" style={activeState} aria-label="About us">
                About us
              </NavLink>
            </li>
            </div>
            <div className="nav-link">
            <li>
              <NavLink to="Pricing" style={activeState} aria-label="Pricing">
                Pricing
              </NavLink>
            </li>
            </div>
          </ul>
          </div>
          <div className="no-toggle ">
          <ul className="nlinks">
            <div className="nlink">
            <li>
              <NavLink to="/" style={activeState} aria-label="Home">
                Home
              </NavLink>
            </li>
            </div>
            <div className="nlink">
            <li>
              <NavLink to="About" style={activeState} aria-label="About us">
                About us
              </NavLink>
            </li>
            </div>
            <div className="nlink">
            <li>
              <NavLink to="Pricing" style={activeState} aria-label="Pricing">
                Pricing
              </NavLink>
            </li>
            </div>
          </ul>
          </div>
      </nav>
      <Outlet />
    </>
  );
};











