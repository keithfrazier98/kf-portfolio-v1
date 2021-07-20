import React from "react";
import "./Projects.css";
import grubdash from "../images/grubdash.png"
import pomodoro from "../images/pomodoro.png"
import periodicTables from "../images/periodic-tables.png"


function Projects() {
  return (
    <div className="projectsDiv">
      <div className="row justify-content-center">
        <h2 className="projectsH2">projects</h2>
      </div>
      <div className="row justify-content-between">
        <div className="card cardDiv">
        <img className="card-img-top cardImg" src={periodicTables} alt="Periodic-Tables screenshot"/>
          <div className="card-body">
            <h3>Periodic Tables</h3>
          </div>
        </div>
        <div className="card cardDiv">
        <img className="card-img-top cardImg" src={pomodoro} alt="Pomodoro Screenshot"/>
          <div className="card-body">
            <h3>Pomodoro Timer</h3>
          </div>
        </div>
        <div className="card cardDiv">
          <img className="card-img-top cardImg" src={grubdash} alt="GrubDash screenshot"/>
          <div className="card-body">
            <h3>GrubDash</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
