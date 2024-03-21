import React from "react";
import { useState } from "react";
import "./Nav.css";
import logo from "../assets/icons/Bacchus Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Top() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <div>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <h1>Bacchus Tech</h1>
          </div>
          <button className="menu-button" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
          </button>
          <ul
            className={`nav-links ${menuOpen ? "active" : ""}`}
            
          >
            <li className="fillLi">
              <Link href="/">Home</Link>
            </li>
            <li className="fillLi">
              <Link href="about">About Us</Link>
            </li>
            <li className="fillLi">
              <Link href="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
}

export default Top
