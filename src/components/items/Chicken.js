import React from "react";
import { chickenItems } from "../../data";
import "./Chicken.css";
import Topbar from "../Topbar";
import Navbar from "../Navbar";
import Categorybar from "../Categorybar";
const Chicken = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Categorybar />
      <div className="searchselectflex">
        <input
          type="search"
          placeholder="search products"
          className="productsearchinput"
        ></input>
        <div className="custom-select">
          <select>
            <option value="volvo">Newest</option>
            <option value="saab">Oldest</option>
            <option value="mercedes">Price low to high</option>
            <option value="audi">Price high to low</option>
          </select>
          <span class="custom-arrow"></span>
        </div>
        {/* <form action="/action_page.php">
          <label for="cars" className="selecttt">Choose a car:</label>
          <select name="sort" id="sort" >
            <option value="volvo">Newest</option>
            <option value="saab">Oldest</option>
            <option value="mercedes">Price low to high</option>
            <option value="audi">Price high to low</option>
          </select>
          <br></br> 
           <input type="submit" value="Submit">
        </form> */}
      </div>
      <div className="wrapper">
        <div className="chickenflex">
          {chickenItems.map(
            (item) => (
              console.log(item)
              (
                <div className="popularfle">
                  <div className="popularcontainer">
                    <img
                      className="responsiveimage"
                      src={item.img}
                      alt="alternative"
                    />
                  </div>
                  <div className="popularitemtitle">{item.id}</div>
                  <div className="piecesflex">
                    <div className="pieces">pieces: 12-15</div>
                    <div className="netweight">Net Weight: 500gms</div>
                  </div>
                  <div className="costflex">
                    <del className="delete">{item.delprice}</del>
                    <div className="cost">{item.actualprice}</div>
                  </div>
                  <div className="buttonflex">
                    <button className="button">Buy Now</button>
                    <button className="button">Add To Cart</button>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Chicken;
