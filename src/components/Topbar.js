import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <div>
      <ul className="flex">
        <li>Track Order</li>
        <Link to="/login" style={{textDecoration: 'none'}} >
          <li>Login</li>
        </Link>
        <Link to="/register" style={{textDecoration: 'none'}} >
          <li>Registration</li>
        </Link>
      </ul>
    </div>
  );
};

export default Topbar;
