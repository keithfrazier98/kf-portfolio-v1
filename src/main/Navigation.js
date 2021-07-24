import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
function Navigation() {
  return (
    <div style={{ padding: "0px" }}>
      <nav className="Navi base">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a href=""
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              home
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact">contact</a>
          </li>
          <li className="nav-item">
            <a href="#projects">projects</a>
          </li>
          <li className="nav-item">
            <a href="#stack">stack</a>
          </li>
          <li className="nav-item">
            <a href="/resume">resume</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
