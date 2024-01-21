import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className={"bodyhome"}>
      <div className={"welcome"}>
        <div className="head">
        <div className={"intro"}>
          <p>Hello I'm</p>
          <h1>Jayasurya</h1>
          <h3>Front End Developer</h3>
        </div>
        <div className="social">
          <Link to={""}>
            <img className="number" src={require("./images/call.png")} alt="contact" />
          </Link>
          <Link to={"mailto:jayasuryaparasu@gmail.com"}>
            <img className="mail" src={require("./images/mail.png")} alt="mail" />
          </Link>
        </div>
        </div>
        <div className={"link"}>
          <a
            className={"click"}
            href="resume.pdf"
            download={"Jayasurya resume"}
          >
            Download
          </a>

          <nav>
            <Link className={"click"} to="/about">
              Click Here
            </Link>
          </nav>
        </div>
      </div>

      <div className={"bubble"}>
        <img src={require("./images/bubble.png")} alt="bubble" />
        <img src={require("./images/bubble.png")} alt="bubble" />
        <img src={require("./images/bubble.png")} alt="bubble" />
        <img src={require("./images/bubble.png")} alt="bubble" />
        <img src={require("./images/bubble.png")} alt="bubble" />
        <img src={require("./images/bubble.png")} alt="bubble" />
        <img src={require("./images/bubble.png")} alt="bubble" />
      </div>
    </div>
  );
}

export default Home;
