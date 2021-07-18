import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
function Navigation() {
  return (
    <div style={{padding: "0px"}}>
      <nav className = "Navi base">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link>Home</Link>
          </li>
          <li className="nav-item" style={{marginLeft:"50px"}}>
            <Link>Contact</Link>
          </li>
          <li className="nav-item" style={{marginLeft:"50px"}}>
            <Link>Projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
