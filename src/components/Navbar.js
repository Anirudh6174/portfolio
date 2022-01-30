import React from "react";
import logo from "../logo.png";
import { Link } from "react-scroll";
// React FontAwesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
    <div className="container">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo..."/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}} />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <Link smooth={true} to="home" className="nav-link" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="aboutme" offset={-140} className="nav-link" href="#">aboutme</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="services" offset={-150} className="nav-link" href="#">services</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="experience" offset={-140} className="nav-link" href="#">experience</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="portfolio" offset={-137} className="nav-link" href="#">portfolio</Link>
          </li>
          <li className="nav-item">
            <Link smooth={true} to="testimonials" offset={-140} className="nav-link" href="#">testimonials</Link>
          </li>

          
          <li className="nav-item">
            <Link smooth={true} to="contact" offset={-50} className="nav-link" href="#">contact</Link>
          </li>
        </ul>
        
      </div>
    </div>
   </div> 
  </nav>
  )
}

export default Navbar;
