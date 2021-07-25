import React from "react";
import "./Stack.css";
import css3 from "../images/css3.png"
import bootstrap from "../images/Bootstrap_logo.svg.png"
import dbeaver from "../images/DBeaver.png"
import expressjs from "../images/ExpressJS.png"
import git from "../images/git.png"
import github from "../images/github.png"
import heroku from "../images/heroku.png"
import html5 from "../images/html5.png"
import nodejs from "../images/nodejs.png"
import postgressql from "../images/postgressql.png"
import postman from "../images/postman.png"
import reactlogo from "../images/react.svg"
import sql from "../images/sql.png"
import vercel from "../images/vercel.png"
import vscode from "../images/vscode.png"

function Stack() {
  return (
    <div id="stack" className="stackDiv">
      <div className="row justify-content-center">
        <h2 className="stackH2">developer stack</h2>
      </div>
      <div className="marquee">
        <img src={css3} className="stackImg" alt="css3"></img>
        <img src={bootstrap} className="stackImg" alt="css3"></img>
        <img src={dbeaver} className="stackImg" alt="css3"></img>
        <img src={expressjs} className="stackImg" alt="css3"></img>
        <img src={git} className="stackImg" alt="css3"></img>
        <img src={github} className="stackImg" alt="css3"></img>
        <img src={heroku} className="stackImg" alt="css3"></img>
        <img src={html5} className="stackImg" alt="css3"></img>
        <img src={nodejs} className="stackImg" alt="css3"></img>
        <img src={postgressql} className="stackImg" alt="css3"></img>
        <img src={postman} className="stackImg" alt="css3"></img>
        <img src={reactlogo} className="stackImg" alt="css3"></img>
        <img src={sql} className="stackImg" alt="css3"></img>
        <img src={vercel} className="stackImg" alt="css3"></img>
        <img src={vscode} className="stackImg" alt="css3"></img>
        <img src={css3} className="stackImg" alt="css3"></img>
        <img src={bootstrap} className="stackImg" alt="css3"></img>
        <img src={dbeaver} className="stackImg" alt="css3"></img>
        <img src={expressjs} className="stackImg" alt="css3"></img>
        <img src={git} className="stackImg" alt="css3"></img>
        <img src={github} className="stackImg" alt="css3"></img>
        <img src={heroku} className="stackImg" alt="css3"></img>
        <img src={html5} className="stackImg" alt="css3"></img>
        <img src={nodejs} className="stackImg" alt="css3"></img>
        <img src={postgressql} className="stackImg" alt="css3"></img>
        <img src={postman} className="stackImg" alt="css3"></img>
        <img src={reactlogo} className="stackImg" alt="css3"></img>
        <img src={sql} className="stackImg" alt="css3"></img>
        <img src={vercel} className="stackImg" alt="css3"></img>
        
        
      </div>
      <div className="row justify-content-center tableDiv">
        <div className="col-9 col-lg-3">
          <table className="table ">
            <thead>
              <th className="text-center" scope="col">
                Front-End
              </th>
            </thead>
            <tbody>
              <tr>
                <td>JavaScript</td>
              </tr>
              <tr>
                <td>React</td>
              </tr>
              <tr>
                <td>HTML5</td>
              </tr>
              <tr>
                <td>CSS</td>
              </tr>
              <tr>
                <td>Twitter-Bootstrap</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-9 col-lg-3">
          <table className="table">
            <thead>
              <th className="text-center" scope="col">
                Back-End
              </th>
            </thead>
            <tbody>
              <tr>
                <td>Node.js</td>
              </tr>
              <tr>
                <td>Express.js</td>
              </tr>
              <tr>
                <td>Mocha / Chai</td>
              </tr>
              <tr>
                <td>PostgreSQL</td>
              </tr>
              <tr>
                <td>SQL</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-9 col-lg-3">
          <table className="table ">
            <thead>
              <th className="text-center" scope="col">
                Tools
              </th>
            </thead>
            <tbody>
              <tr>
                <td>Git / GitHub</td>
              </tr>
              <tr>
                <td>Vercel</td>
              </tr>
              <tr>
                <td>Heroku</td>
              </tr>
              <tr>
                <td>DBeaver</td>
              </tr>
              <tr>
                <td>Postman</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-9 col-lg-3">
          <table className="table ">
            <thead>
              <th className="text-center" scope="col">
                Conceptual Understanding
              </th>
            </thead>
            <tbody>
              <tr>
                <td>Test-Driven Development</td>
              </tr>
              <tr>
                <td>Feature Branch Workflow</td>
              </tr>
              <tr>
                <td>RESTful API / CRUDL</td>
              </tr>
              <tr>
                <td>Mobile-First Development</td>
              </tr>
              <tr>
                <td>Full-Stack Application Workflow</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Stack;
