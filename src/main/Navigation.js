import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
function Navigation() {
  return (
    <div style={{padding: "0px"}}>
      <nav className = "Navi base">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a href = "#home">home</a>
          </li>
          <li className="nav-item" style={{marginLeft:"50px"}}>
            <a href="#contact">contact</a>
          </li>
          <li className="nav-item" style={{marginLeft:"50px"}}>
            <a href="#projects">projects</a>
          </li>
          <li className="nav-item" style={{marginLeft:"50px"}}>
            <a href="#stack">stack</a>
          </li>
          <li className="nav-item" style={{marginLeft:"50px"}}>
            <a href="#resume">resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
