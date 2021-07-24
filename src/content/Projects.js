import React from "react";
import "./Projects.css";
import grubdash from "../images/grubdash.png";
import pomodoro from "../images/pomodoro.png";
import periodicTables from "../images/periodic-tables.png";

function Projects() {
  return (
    <div className="projectsDiv" id="projects">
      <div className="row justify-content-center">
        <h2 className="projectsH2">projects</h2>
      </div>
      <div className="row justify-content-center">
        <div className="card cardDiv">
          <img
            className="card-img-top cardImg"
            src={periodicTables}
            alt="Periodic-Tables screenshot"
          />
          <div className="card-body">
            <h3 className="card-title">Periodic Tables</h3>
            <h5
              class="card-subtitle mb-2 text-muted"
              style={{ fontSize: "1rem" }}
            >
              A restaurant reservation application.
            </h5>
             <p classNamev="card-text">
                This applicaiton is for creating and managing tables and
                reservations for a hypothetical restaurant. It is a full-stack
                project completed as part of Thinkful's software engineering
                cirriculum.
              </p>
            <div className="cardLinks">
              <a className ="btn btn-primary" href="https://periodic-tables-frontend-three.vercel.app/dashboard">
                Periodic Tables live application ..
              </a>
            </div>
            <div>
              <a className ="btn btn-secondary" href="https://github.com/keithfrazier98/periodic-tables-monorepo">
                Check it out on GitHub!
              </a>
            </div>
          </div>
        </div>
        <div className="card cardDiv">
          <img
            className="card-img-top cardImg"
            src={pomodoro}
            alt="Pomodoro Screenshot"
          />
          <div className="card-body">
            <h3 className="card-title">Pomodoro Timer</h3>
            <h5
              class="card-subtitle mb-2 text-muted"
              style={{ fontSize: "1rem" }}
            >
              A timer for work an break sessions.
            </h5>
              <p classNamev="card-text">
                With this application a user can set a duration for work
                sessions and break sessions to optimize productivity. It is a
                front-end project completed as part of Thinkful's software
                engineering cirriculum.
              </p>
            <a className ="btn btn-secondary" href="https://github.com/keithfrazier98/Pomodoro-Timer">
              Check it out on GitHub!
            </a>
          </div>
        </div>
        <div className="card cardDiv">
          <img
            className="card-img-top cardImg"
            src={grubdash}
            alt="GrubDash screenshot"
          />
          <div className="card-body">
            <h3 className="card-title">GrubDash</h3>
            <h5
              class="card-subtitle mb-2 text-muted"
              style={{ fontSize: "1rem" }}
            >
              A food delivery service.
            </h5>
              <p classNamev="card-text">
                This is a hypothetical food delivery service application. This
                was completed as a back-end project for Thinkful's software
                engineering cirriculum.
              </p>
            <a className ="btn btn-secondary" href="https://github.com/keithfrazier98/GrubDash">
              Check out the API on GitHub!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
