import React from "react";
import { Link } from "react-router-dom";
import "./Bio.css";

function Bio() {
  const contacts = <Link className="bioLink">contact</Link>;

  const bioParagraph = `Greetings! I am a full-stack developer who graduated from 
    Thinkful's software engineering course as of July 2021. With a long-time interest
    in learning all things computer, web development has been a natural interest of mine.
    Check out my projects and stack below, and feel free to reach out via my `;

  return (
    <div className="row justify-content-center bioDiv">
      <div className="col-6 bioPgraph">
        {bioParagraph}
        {contacts}
        {` links.`}
      </div>
    </div>
  );
}

export default Bio;
