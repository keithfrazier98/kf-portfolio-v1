import React from "react";
import { Link } from "react-router-dom";
import "./Bio.css";

function Bio() {
  const contacts = <a href="#contact" className="bioLink">contact</a>;

  const bioParagraph = `I am a developer with a long-time interest
    in learning all things computer; web development has been a natural interest of mine.
    I also like to work with graphic design, love to cook, and love spending time with my family. 
    Check out my projects and stack below, and feel free to reach out via my `;

  return (
    <div className="row justify-content-center bioDiv" id="home">
      <div className="col-8  col-xs-10 col-lg-6 bioPgraph">
        {bioParagraph}
        {contacts}
        {` links.`}
      </div>
    </div>
  );
}

export default Bio;
