import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./about.css";

function Skill() {
  const [phonemenu, setphonemenu] = useState(false);
  function navclick() {
    setphonemenu(!phonemenu);
  }

  const [hard, sethard] = useState(0);
  const [com, setcom] = useState(0);
  const [time, settime] = useState(0);
  const [project, setproject] = useState(0);
  const [problem, setproblem] = useState(0);
  const [create, setcreate] = useState(0);

  useEffect(() => {
    let hardworking = 90;
    if (hard < hardworking) {
      const interval = setInterval(() => {
        sethard(hard + 1);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [hard]);

  useEffect(() => {
    let Communication = 75;
    if (com < Communication) {
      const interval = setInterval(() => {
        setcom(com + 1);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [com]);

  useEffect(() => {
    let timemanagement = 80;
    if (time < timemanagement) {
      const interval = setInterval(() => {
        settime(time + 1);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [time]);

  useEffect(() => {
    let projectmanagement = 60;
    if (project < projectmanagement) {
      const interval = setInterval(() => {
        setproject(project + 1);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [project]);

  useEffect(() => {
    let problemsolving = 50;
    if (problem < problemsolving) {
      const interval = setInterval(() => {
        setproblem(problem + 1);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [problem]);

  useEffect(() => {
    let creative = 75;
    if (create < creative) {
      const interval = setInterval(() => {
        setcreate(create + 1);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [create]);

  const [html, sethtml] = useState(0);
  const [css, setcss] = useState(0);
  const [js, setjs] = useState(0);
  const [react, setreact] = useState(0);
  const [blender, setblender] = useState(0);
  const [ms, setms] = useState(0);

  useEffect(() => {
    let htmlpercent = 90;
    if (html < htmlpercent) {
      const interval = setInterval(() => {
        sethtml(html + 1);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [html]);

  useEffect(() => {
    let csspercent = 90;
    if (css < csspercent) {
      const interval = setInterval(() => {
        setcss(css + 1);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [css]);

  useEffect(() => {
    let jspercent = 80;
    if (js < jspercent) {
      const interval = setInterval(() => {
        setjs(js + 1);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [js]);

  useEffect(() => {
    let reactpercent = 80;
    if (react < reactpercent) {
      const interval = setInterval(() => {
        setreact(react + 1);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [react]);

  useEffect(() => {
    let blenderpercent = 75;
    if (blender < blenderpercent) {
      const interval = setInterval(() => {
        setblender(blender + 1);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [blender]);

  useEffect(() => {
    let mspercent = 50;
    if (ms < mspercent) {
      const interval = setInterval(() => {
        setms(ms + 1);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [ms]);

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
      <div id="skill">
        <div className={"tech"}>
          <h2>Technical Skills</h2>

          <div className={"program"}>
            <div className={"info"}>
              <p>Html</p>
              <span>{html}%</span>
            </div>
            <div className={"bar"}>
              <span className={"html"}></span>
            </div>

            <div className={"info"}>
              <p>Css</p>
              <span>{css}%</span>
            </div>
            <div className={"bar"}>
              <span className={"css"}></span>
            </div>

            <div className={"info"}>
              <p>Java Script</p>
              <span>{js}%</span>
            </div>
            <div className={"bar"}>
              <span className={"java"}></span>
            </div>

            <div className={"info"}>
              <p>React Js</p>
              <span>{react}%</span>
            </div>
            <div className={"bar"}>
              <span className={"react"}></span>
            </div>

            <div className={"info"}>
              <p>Blender</p>
              <span>{blender}%</span>
            </div>
            <div className={"bar"}>
              <span className={"blend"}></span>
            </div>

            <div className={"info"}>
              <p>Ms Office</p>
              <span>{ms}%</span>
            </div>
            <div className={"bar"}>
              <span className={"ms"}></span>
            </div>
          </div>
        </div>

        <div className={"prof"}>
          <h2>Professional Skills</h2>

          <div className={"prof1"}>
            <div className={"ability"}>
              <div
                className={"outer"}
                style={{
                  background: `conic-gradient(yellow ${
                    hard * 3.6
                  }deg, rgb(152, 152, 74) 0deg)`,
                }}
              >
                <span className="inner">{hard}%</span>
              </div>
              <p>Hardworking</p>
            </div>

            <div className={"ability"}>
              <div
                className={"outer"}
                style={{
                  background: `conic-gradient(yellow ${
                    com * 3.6
                  }deg, rgb(152, 152, 74) 0deg)`,
                }}
              >
                <span className="inner">{com}%</span>
              </div>
              <p>Communication</p>
            </div>
          </div>
          <div className={"prof2"}>
            <div className={"ability"}>
              <div
                className={"outer"}
                style={{
                  background: `conic-gradient(yellow ${
                    time * 3.6
                  }deg, rgb(152, 152, 74) 0deg)`,
                }}
              >
                <span className="inner">{time}%</span>
              </div>
              <p>Time Management</p>
            </div>
            <div className={"ability"}>
              <div
                className={"outer"}
                style={{
                  background: `conic-gradient(yellow ${
                    project * 3.6
                  }deg, rgb(152, 152, 74) 0deg)`,
                }}
              >
                <span className="inner">{project}%</span>
              </div>
              <p>Project Management</p>
            </div>
          </div>
          <div className={"prof3"}>
            <div className={"ability"}>
              <div
                className={"outer"}
                style={{
                  background: `conic-gradient(yellow ${
                    problem * 3.6
                  }deg, rgb(152, 152, 74) 0deg)`,
                }}
              >
                <span className="inner">{problem}%</span>
              </div>
              <p>Problem Solving</p>
            </div>
            <div className={"ability"}>
              <div
                className={"outer"}
                style={{
                  background: `conic-gradient(yellow ${
                    create * 3.6
                  }deg, rgb(152, 152, 74) 0deg)`,
                }}
              >
                <span className="inner">{create}%</span>
              </div>
              <p>Creative Thinking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
