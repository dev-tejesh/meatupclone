import React from "react";
import "./Manageprofile.css";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Categorybar from "./Categorybar";
const Manageprofile = () => {
  return (
    <div>
    <Topbar />
    <Navbar />
    <Categorybar />
    <div className="maincontainer">
      <div className="registercontainer">
        <div className="registertitle">Manage Profile</div>
        <div className="registerinputs">
          <input
            type="name"
            placeholder="Your Name"
            className="registerinput"
          ></input>
        </div>
        <div className="registerinputs">
          <input
            type="email"
            placeholder="Your Email"
            className="registerinput"
          ></input>
        </div>
        <div className="registerinputs">
          <input
            type="password"
            placeholder="New Password"
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
        <div className="updateprofilebutton">
            <div className="updatebutton">
            Update Profile
            </div>
            
        </div>
        {/* <div className="combined">
          <span className="already">Already have an account?</span>
          <a href="" className="registerpagelogin">
            Log In
          </a>
        </div> */}
      </div>
    </div>
  </div>
    // <div className="heightfixing">
    //   <Topbar />
    //   <Navbar />
    //   <Categorybar />
    //   <div className="manageprofile">
    //     <div>Manage Profile</div>
    //     <div className="profilecontainer">
    //       <div className="">Basic Info</div>
    //       <span>
    //         <div className="">Your Name</div>
    //         <input type="text" className="updateprofileinput"></input>
    //       </span>
    //       <span>
    //         <div className="">Your Email</div>
    //         <input type="text" className="updateprofileinput"></input>
    //       </span>
    //       <span>
    //         <div className="">New Password</div>
    //         <input type="text" className="updateprofileinput"></input>
    //       </span>
    //       <span>
    //         <div className="">Confirm Password</div>
    //         <input type="text" className="updateprofileinput"></input>
    //       </span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Manageprofile;
