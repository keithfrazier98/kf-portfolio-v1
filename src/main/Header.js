import React from "react";
import "./Header.css";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="row NavScroll">
        <div className="col" style={{padding:"0"}}>
        <header className="Header base">Keith Frazier</header>
        <Navigation />
        </div>
    </div>
  );
}

export default Header;
