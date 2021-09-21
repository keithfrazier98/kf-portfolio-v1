import React from "react";
import Contact from "../content/Contact";
import "./Header.css";

function Navigation() {
  //redirect to home page if pathname includes "resume"
  let contact = "#contact";
  let projects = "#projects";
  let stack = "#stack";
  let home = "/home";

  if (window.location.pathname.includes("resume")) {
    contact = "/home#contact";
    projects = "/home#projects";
    stack = "/home#stack";
  }

  return (
    <div style={{ padding: "0px" }}>
      <nav className="Navi base">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a
              href={home}
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
            <a href={contact}>contact</a>
          </li>
          <li className="nav-item">
            <a href={projects}>projects</a>
          </li>
          <li className="nav-item">
            <a href={stack}>stack</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;

/*<li className="nav-item">
            <a href="#showoff"> Check this out!</a>
            Check this out!
          </li>*/