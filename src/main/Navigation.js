import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
function Navigation() {
  return (
    <div style={{padding: "0px"}}>
      <nav className = "Navi base">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link>home</Link>
          </li>
          <li className="nav-item" style={{marginLeft:"50px"}}>
            <Link>contact</Link>
          </li>
          <li className="nav-item" style={{marginLeft:"50px"}}>
            <Link>projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
