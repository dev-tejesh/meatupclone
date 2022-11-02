import React from "react";
import Buynow from "./components/Buynow";
import Categorybar from "./components/Categorybar";
import Homepage from "./components/Homepage";
import Chicken from "./components/items/Chicken";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Topbar from "./components/Topbar";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Buynowbar from "./components/Buynowbar";
import Manageprofile from "./components/Manageprofile";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/buynow" element={<Buynow />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/chicken" element={<Chicken />} />
        <Route path="/myprofile" element={<Manageprofile/>} />
      </Routes>
      {/* 
      <Topbar/>
        <Navbar/>
        <Categorybar/> 
        */}
      {/* <Buynow/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <Homepage/> */}
      {/* <Chicken/> */}
    </div>
  );
};

export default App;
