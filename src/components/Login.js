import React from "react";
import Categorybar from "./Categorybar";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

const Login = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Categorybar />
      <div className="maincontainer">
        <div className="registercontainer">
          <div className="registertitle">Login to your account</div>
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
            <span className="already">Need an account?</span>
            <a href="/register" className="registerpagelogin">
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
