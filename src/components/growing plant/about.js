import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./about.css";

function About() {
  const [phonemenu, setphonemenu] = useState(false);
  function navclick() {
    setphonemenu(!phonemenu);
  }
  const[sslc,setsslc] = useState(0);
  const[hsc,sethsc] = useState(0);
  const[be,setbe] = useState(0);

  useEffect(()=>{
    let sslcpercent = 95.8;
    if (sslc < sslcpercent){
      const interval = setInterval(() => {
        setsslc(sslc+ 1)
      }, 40);
      return()=>clearInterval(interval);
    }
  },[sslc])
  useEffect(()=>{
    let hscpercent = 85.6;
    if (hsc < hscpercent){
      const interval = setInterval(() => {
        sethsc(hsc+ 1)
      }, 40);
      return()=>clearInterval(interval);
    }
  },[hsc])
  useEffect(()=>{
    let bepercent = 73;
    if (be < bepercent){
      const interval = setInterval(() => {
        setbe(be+ 1)
      }, 40);
      return()=>clearInterval(interval);
    }
  },[be])
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

      <div id="mydetails">
        <h1>hello</h1>

        <div id="journey">
          <div id="education">
            <h2>Education</h2>
            <div className={"sslc"}>
              <div>
                <p className={"year"}>2015-2016</p>
                <h3>SSLC</h3>
                <p>MGM Matriculation Higher Secondary School, Krishnagiri</p>
              </div>

              <span>{sslc}%</span>
            </div>

            <div className={"hsc"}>
              <div>
                <p className={"year"}>2017-2018</p>
                <h3>HSC</h3>
                <p>MGM Matriculation Higher Secondary School, Krishnagiri</p>
              </div>

              <span>{hsc}%</span>
            </div>

            <div className={"be"}>
              <div>
                <p className={"year"}>2018-2022</p>
                <h3>BE <br/> Computer Science Engineering</h3>
                <p>
                  University College of Engineering (BIT Campus),Tiruchirappalli
                </p>
              </div>
              <span>{be}%</span>
            </div>
          </div>

          <div id="certification">
            <h2>Certification</h2>

            <div className={"blender"}>
              <p className={"year"}>2022-2023</p>
              <h3>Blender (3D Animation)</h3>
              <p>Nimbus Computer Center,Chennai</p>
            </div>

            <div className={"photoshop"}>
              <h3>Adobe Photoshop</h3>
              <p>Nimbus Computer Center,Chennai</p>
            </div>
          </div>
        </div>

       
        <div className={"information"}>
          <div id="info1">
            <h2>Informations</h2>
            <div className={"detail"}>
              <p>Father's name</p>
              <span>Parasuraman.R </span>
            </div>

            <div className={"detail"}>
              <p>Date of Birth </p>
              <span>27-11-2000</span>
            </div>

            <div className={"detail"}>
              <p>Nationality</p>
              <span>Indian</span>
            </div>

            <div className={"detail"}>
              <p>Languages Known</p>
              <span>Tamil, English</span>
            </div>
          </div>

          <div id="info2">
            <div className={"detail"}>
              <p>Mother's name </p>
              <span>Muniyammal.P</span>
            </div>

            <div className={"detail"}>
              <p>Gender </p>
              <span>Male</span>
            </div>
            <div className={"detail"}>
              <p>Religion</p>
              <span>Hindu</span>
            </div>

            <div className={"detail"}>
              <p>Hobbies </p>
              <span>Playing, Writing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
