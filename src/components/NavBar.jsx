import React, { useState } from 'react'
import { NavLink } from "react-router-dom";


const NavBar = () => {
    const [open, setIsOpen] = useState(false);
  return (
    <header>
      <nav>
        <img src="/assets/images/logo.png" alt="logo" />
        <ul>
          <li>
            <NavLink end to="/" className="nav-btn">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination" className="nav-btn">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew" className="nav-btn">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology" className="nav-button">
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div
          className={`burger ${open && "close"}`}
          onClick={() => setIsOpen(!open)}
        ></div>
      </nav>
      {open && (
        <div className="sideNav">
          <ul>
            <li>
              <NavLink end to="/" className="nav-btn">
                <span>00</span> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/destination" className="nav-btn">
                <span>01</span> Destinations
              </NavLink>
            </li>
            <li>
              <NavLink to="/crew" className="nav-btn">
                <span>02</span> Crew
              </NavLink>
            </li>
            <li>
              <NavLink to="/technology" className="nav-btn">
                <span>03</span> Technology
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default NavBar