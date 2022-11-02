import React, { useState } from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import Backdrop from "./Backdrop";
const Navbar = ({openSidebar}) => {
  const [sidebar,setSidebar]=useState(false);
  const toggleSidebar = ()=>{
    setSidebar((prevState)=>!prevState)
  }
  return (
    <div className="navflex">
      <div className="hamberger" onClick={toggleSidebar}>
        <MenuIcon />
      </div>
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} closeSidebar={toggleSidebar}/>
      <div className="title">meatup.in</div>
      <div>
        <div class="search-container">
          <input type="search" placeholder="I am craving for..."></input>
          <div class="icon">
            <SearchIcon />
          </div>
          <div className="carticon">
            <ShoppingCartOutlinedIcon />
          </div>
          <div className="badge">5</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
