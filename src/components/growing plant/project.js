import React, { useState } from "react";
import "./about.css";
import { Link } from "react-router-dom";

function Project() {
  const [phonemenu, setphonemenu] = useState(false);
  function navclick() {
    setphonemenu(!phonemenu);
  }
  return (
    <div>
      <nav className={"top"}>
        <div className="bar">
          <h1>Jayasurya</h1>

          <ul className={phonemenu ? "top-of-link" : ""}>
            <Link className={"toplink"} to="/">
              Home
            </Link>
            <Link className={"toplink"} to="/about">
              About
            </Link>
            <Link className={"toplink"} to="/skill">
              Skills
            </Link>
            <Link className={"toplink"} to="/project">
              Project
            </Link>
            <Link className={"toplink"} to="/contact">
              Contact
            </Link>
          </ul>
        </div>

        <div className={"menu"} onClick={navclick}>
          <p className={"menu-line"}></p>
          <p className={"menu-line"}></p>
          <p className={"menu-line"}></p>
        </div>
      </nav>

      <div
        className="project"
        style={{ display: `flex`, flexDirection: `row`, justifyContent:`space-around`,alignItems:`center`}}
      >
        <div>hi</div>
        <div>hello</div>
        <div>welcome</div>
      </div>
    </div>
  );
}

export default Project;
