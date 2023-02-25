import React from "react";
import "./navbar.css";
import loga from "./Frame.png";

let Nav = ()=>{
    return(
        <nav className="navbar">
              <div className="dom">
                 <div className="text-lit">
                         <img src={loga} />
                         <ul>
                            <li className="li">Life insurance</li>
                            <li className="li">Why Bello</li>
                            <li className="li">Help</li>
                         </ul>
                 </div>

                <div className="text-rit">
                    <text>Log in</text>
                    <button>Get my price</button>
                </div>
              </div>
        </nav>
    )
}
export default Nav