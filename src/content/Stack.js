import React from "react";
import "./Stack.css";

function Stack() {
  return (
    <div>
      <div className="row justify-content-center">
        <h1 className="stackH1">developer stack</h1>
      </div>
      <div className="row justify-content-center tableDiv">
        <div className="col">
          <table className="table table-hover">
            <thead>
                <th scope="col">Front-End</th>
            </thead>
            <tbody>
              <tr><td>Javascript</td></tr>
              <tr><td>React</td></tr>
              <tr><td>React Hooks</td></tr>
              <tr><td>React-router-dom</td></tr>
              <tr><td>HTML5</td></tr>
              <tr><td>CSS</td></tr>
              <tr><td>DOM Manipulation</td></tr>
              <tr><td>Twitter-Bootstrap</td></tr>
            </tbody>
          </table>
        </div>
        <div className="col">
          <table className="table table-hover">
            <thead>
              <th scope="col">Back-End</th>
            </thead>
            <tbody>
              <tr><td>Node.js</td></tr>
              <tr><td>Express.js</td></tr>
              <tr><td>Mocha</td></tr>
              <tr><td>Chai</td></tr>
              <tr><td>Heroku PostgreSQL</td></tr>
              <tr><td>PostgreSQL</td></tr>
              <tr><td>SQL</td></tr>
              <tr><td>Knex</td></tr>
            </tbody>
          </table>
        </div>
        <div className="col">
          <table className="table table-hover">
            <thead>
              <th scope="col">Tools</th>
            </thead>
            <tbody>
              <tr><td>VS Code</td></tr>
              <tr><td>Git / GitHub</td></tr>
              <tr><td>Vercel</td></tr>
              <tr><td>Heroku</td></tr>
              <tr><td>DBeaver</td></tr>
              <tr><td>Postman</td></tr>
              <tr><td>Markdown</td></tr>
              <tr><td>Kanban boards</td></tr>
            </tbody>
          </table>
        </div>
        <div className="col">
          <table className="table table-hover">
            <thead>
              <th scope="col">Conceptual Understanding</th>
            </thead>
            <tbody>
                <tr><td>Test-Driven Development</td></tr>
                <tr><td>Pair-Programming</td></tr>
                <tr><td>Feature Branch Workflow</td></tr>
                <tr><td>Asyncronous Programming</td></tr>
                <tr><td>RESTful API / CRUDL</td></tr>
                <tr><td>Asymptotic Analysis</td></tr>
                <tr><td>Data Structures and Algorithms</td></tr>
                <tr><td>Mobile-First Development</td></tr>
                <tr><td>Cross Origin Resource Sharing</td></tr>
                <tr><td>Full-Stack Application Workflow</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Stack;
