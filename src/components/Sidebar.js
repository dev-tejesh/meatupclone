import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = ({ sidebar,closeSidebar }) => {
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <div className="heightredcolor">
        <div className="crossmark">
          <div className="whitecolor" onClick={closeSidebar}>X</div>
        </div>
        <div className="combinedreg">
          <li className="sidebarsignin">Sign In</li>
          <li className="sidebarregistration">Registration</li>
        </div>
      </div>
      <Link to={"/home"} style={{ textDecoration: 'none' }}> <li>Home</li></Link>
      <Link to={"/myprofile"} style={{ textDecoration: 'none' }}> <li>My Profile</li></Link>
      <Link to={"/buynow"} style={{ textDecoration: 'none' }}> <li>Cart</li></Link>
    </div>
  );
};

export default Sidebar;
