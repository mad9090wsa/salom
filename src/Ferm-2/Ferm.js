import React from "react";
import "./Ferm.css";
import hero from "./hero 1.png";
import bnt from "./Shape.png";


let Ferm = ()=>{
    return(
    <section className="ferm">
            <div className="text-ferm">
                <text>MEET BELLO</text>
                <div className="text-x">A new kind of life insurance</div>
                <br/>
               <div className="text-a">Secure your family's financial future, in as little as 10 minutes.</div>
               <button>Get my price  <img className="img" src={bnt}/> </button>
            </div>
            <img className="hero" src={hero}/>
    </section>
    )
}
export default Ferm