import React from "react";
import "./style.css";

function NavBar() {

    return (
        <header id="header" className="sticky-top d-flex align-items-center justify-content-center">
        <div className="container d-flex align-items-center justify-content-between mx-0">
          <a href="#hero" className="logo mr-auto"><img src="" alt="" /></a>
          <nav id="navbar" className="navbar">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#languages">Languages</a></li>
  
              <li className="dropdown">
                <a href="#project"
                  ><span>Projects</span> <i className="bi bi-chevron-down"></i
                ></a>
                <ul>
                  <li><a href="#">Searchify</a></li>
                  <li><a href="#">Hendrix</a></li>
                  {/* <li><a href="#"></a></li> */}
                </ul>
              </li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="fas fa-bars mobile-nav-toggle"></i>
          </nav>
          </div>
          {/* <!-- .navbar --> */}
      </header>
    )
}

export default NavBar