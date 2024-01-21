import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./about.css";

function Contact() {
  const [phonemenu, setphonemenu] = useState(false);
  function navclick() {
    setphonemenu(!phonemenu);
  }

  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [phone, setphone] = useState("");
  const [area, setarea] = useState("");

  function validemail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }

  function submit(x) {
    x.preventDefault();
    const fname = x.target.fname.value;
    const email = x.target.email.value;
    const contact = x.target.contact.value;
    const tarea = x.target.tarea.value;

    if (fname.length === 0) {
      setname(" Please Enter your Name ");
    } else {
      setname("");
    }

    if (email.length === 0) {
      setmail(" Please Enter your Email ");
    } else if (!validemail(email)) {
      setmail(" Please use valid Mail Id");
    } else {
      setmail("");
    }

    if (contact.length === 0) {
      setphone(" Please Enter your Phone Number");
    } else if (!contact.match("^[0-9]{10}$")) {
      setphone("Please use valid Phone Number");
    } else {
      setphone("");
    }

    if (tarea.length === 0) {
      setarea(" Kindly fill this area with some words");
    } else {
      setarea("");
    }
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

      <div className={"contact"}>
        <div className={"native"}>
          <h1>Native</h1>
          <address className={"add"}>
            <span>Mottupatti(vill),Barur(Po)</span>
            <span>Pochampalli(Tk),Krishnagiri(Dt)</span>
            <span>Pincode : 635201</span>
          </address>
        </div>

        <form onSubmit={submit}>
          <div>
            <input
              type="text"
              placeholder="Name"
              className={"name"}
              name="fname"
            ></input>
            <span>{name}</span>
            <input
              type="type"
              placeholder="Email"
              className={"email"}
              name="email"
            ></input>
            <span>{mail}</span>
            <input
              type="text"
              placeholder="Contact"
              className={"contact"}
              name="contact"
            ></input>
            <span>{phone}</span>
          </div>

          <div className={"textarea"}>
            <textarea
              placeholder="Type here"
              className={"area"}
              name="tarea"
              style={{
                width: "30vw",
                height: "160px",
                backgroundColor: "rgb(111, 216, 216)",
                color: "black",
                padding: "10px",
                boxShadow:
                  "3px 3px 12px -1px rgb(2, 102, 102),-3px -3px 12px -1px rgb(2, 102, 102)",
              }}
            ></textarea>
            <span>{area}</span>
            <button>Send</button>
          </div>
          <span></span>
        </form>
      </div>
    </div>
  );
}

export default Contact;
