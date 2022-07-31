import React from "react";
import "./Certificate.scss";
import RN from "./Assets/RN.png";
import Python from "./Assets/Python.png";

export default function Certificate() {
  

  const myCertificate = [RN,Python]
  
  return (
    <div className="Certificates" id="Certificates">
      <h1>CERTIFICATIONS</h1>
    
      
      
      
      
      
      <div className="container">
           <div className="certificateHolder">
                <img  src={myCertificate[0]} alt="RN" />
                
          </div>

          <img className="cert" src={require("./Assets/certi.png" )}alt="certi" />

      </div>
    </div>
  

  );
}
