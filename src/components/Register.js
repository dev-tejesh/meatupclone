import React from "react";
import "./Register.css";
import Categorybar from "./Categorybar";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

const Register = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Categorybar />
      <div className="maincontainer">
        <div className="registercontainer">
          <div className="registertitle">create an account</div>
          <div className="registerinputs">
            <input
              type="name"
              placeholder="Name"
              className="registerinput"
            ></input>
          </div>
          <div className="registerinputs">
            <input
              type="email"
              placeholder="Email"
              className="registerinput"
            ></input>
          </div>
          <div className="registerinputs">
            <input
              type="password"
              placeholder="Password"
              className="registerinput"
            ></input>
          </div>
          <div className="registerinputs">
            <input
              type="password"
              placeholder="Confirm Password"
              className="registerinput"
            ></input>
          </div>
          {/* <div className="checkinputs">
        <input
            type="checkbox"
          ></input>
          <div >tejesh</div>
          </div> */}
          <div className="registerinputs">
            <div className="createbutton">Create Account</div>
          </div>
          <div className="combined">
            <span className="already">Already have an account?</span>
            <a href="/login" className="registerpagelogin">
              Log In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
