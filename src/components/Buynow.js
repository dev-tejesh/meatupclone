import React from "react";
import Buynowbar from "./Buynowbar";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Buynow.css";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import Categorybar from "./Categorybar";
const Buynow = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Categorybar />
      <Buynowbar />
      <div className="combinedfle">
        <div className="newneededone">
          <div className="totalfle">
            <table
              style={{ width: "100%", textAlign: "center" }}
              className="totalcartitems"
            >
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              <tr>
                <td className="nedflex">
                  <img
                    src="https://meatup.in/uploads/products/thumbnail/tAmyhqRo2S88fh4oLvMTOT8tjmeqwEeKZ1ZqIcFZ.jpeg"
                    alt="alternative"
                    height={40}
                  />

                  <div className="cartitemname">
                    Chicken Curry Cut (Skinless)
                  </div>
                </td>
                <td className="cartitemname">Rs160.000</td>
                <td className="cartitemname">1</td>
                <td className="cartitemname">Rs:160.000</td>
                <td>
                  <DeleteIcon />
                </td>
              </tr>
            </table>
            <div className="tejesh">
              <div className="return">Return to shop</div>
              <div className="continuebutton">Continue To Delivery Info</div>
            </div>
          </div>
        </div>
        <div className="summary">
          <div className="summarytitle">Summary</div>
          <div className="summaryflex">
            <div className="combinedflex">
              <div className="summaryproduct">PRODUCT</div>
              <div className="total">TOTAL</div>
            </div>
            <div className="combinedflex">
              <div className="summaryitemname">
                Chicken Curry Cut (Skinless) × 2
              </div>
              <div className="itemtotal">Rs320.000</div>
            </div>
            <div className="combinedflex">
              <div className="subtotal">SUBTOTAL</div>
              <div className="subtotalprice">Rs320.000</div>
            </div>
            <div className="combinedflex">
              <div className="tax">TAX</div>
              <div className="taxprice">Rs000.000</div>
            </div>
            <div className="combinedflex">
              <div className="deliverycharge">DELIVERY CHARGE</div>
              <div className="deliverychargeprice">Rs000.000</div>
            </div>
            <div className="combinedflex">
              <div className="totalsummary">TOTAL</div>
              <div className="totalsummaryprice">Rs320.000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buynow;

// <div className="totalflex">
//         <div className="totalcartitems">
//           <div className="cartitems">
//             <div className="product">
//               <div className="productheading">Product</div>
//               <div className="nedflex">
//                 <img
//                   src="https://meatup.in/uploads/products/thumbnail/tAmyhqRo2S88fh4oLvMTOT8tjmeqwEeKZ1ZqIcFZ.jpeg"
//                   height={40}
//                 />

//                 <div className="cartitemname">Chicken Curry Cut (Skinless)</div>
//               </div>
//             </div>
//             <div className="product">
//               <div className="productheading">Price</div>
//               <div className="cartitemname">Rs160.000</div>
//             </div>
//             <div className="product">
//               <div className="productheading">Quantity</div>
//               <div className="cartitemname">1</div>
//             </div>
//             <div className="product">
//               <div className="productheading">Total</div>
//               <div className="cartitemname">Rs:160.000</div>
//             </div>
//             <div className="product">
//               <div className="productheading">delete</div>
//               <DeleteIcon />
//             </div>
//             {/* <hr className="hrtag"></hr> */}
//           </div>
//           <div className="last">
//             <div className="return">Return to shop</div>
//             <div className="continuebutton">Continue To Delivery Info</div>
//           </div>
//         </div>
//         <div className="summary">
//           <div className="summarytitle">Summary</div>
//           <div className="summaryflex">
//             <div className="combinedflex">
//               <div className="summaryproduct">PRODUCT</div>
//               <div className="total">TOTAL</div>
//             </div>
//             <div className="combinedflex">
//               <div className="summaryitemname">
//                 Chicken Curry Cut (Skinless) × 2
//               </div>
//               <div className="itemtotal">Rs320.000</div>
//             </div>
//             <div className="combinedflex">
//               <div className="subtotal">SUBTOTAL</div>
//               <div className="subtotalprice">Rs320.000</div>
//             </div>
//             <div className="combinedflex">
//               <div className="tax">TAX</div>
//               <div className="taxprice">Rs000.000</div>
//             </div>
//             <div className="combinedflex">
//               <div className="deliverycharge">DELIVERY CHARGE</div>
//               <div className="deliverychargeprice">Rs000.000</div>
//             </div>
//             <div className="combinedflex">
//               <div className="totalsummary">TOTAL</div>
//               <div className="totalsummaryprice">Rs320.000</div>
//             </div>
//           </div>
//         </div>
//       </div>
