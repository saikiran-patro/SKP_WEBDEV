import React ,{useState} from "react";
import "./Certificate.scss";
import RN from "./Assets/RN.png";
import Python from "./Assets/Python.png";
import Bolt from "./Assets/Bolt.png";
import Cpp from "./Assets/c.png"
import Web from "./Assets/Web.png"
import Ml from "./Assets/Ml.png"
import { FaAngleLeft,FaAngleRight} from "react-icons/fa";




export default function Certificate() {
  

  const myCertificate = [RN,Web,Cpp,Python,Ml,Bolt]
  const certificateName=["React Native Mobile App Development","Full Stack Web Development","C++","Python","Machine Learning","Bolt IoT"]

  const [currentCertificate, setCurrentCertificate] = useState(0);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(true);
  
  const handleLeft = (currentCertificate) => {
    console.log(currentCertificate);
    if(currentCertificate === 1){
      setCurrentCertificate(currentCertificate - 1);
      setLeft(false);
      setRight(true);
    }else{
      setCurrentCertificate(currentCertificate - 1);
      setRight(true);
    }


  }
  const handleRight = (currentCertificate) => {

    console.log(currentCertificate);
    if(currentCertificate === myCertificate.length - 2){
      setCurrentCertificate(currentCertificate + 1);
      setRight(false);
      setLeft(true);
    }else{
      setCurrentCertificate(currentCertificate + 1);
      setLeft(true);
    }

  }
  
  
  return (
    <div className="Certificates" id="Certificates">
      <h1>CERTIFICATIONS</h1>
      {
          
         left? (
          <button className="Back" onClick={() => handleLeft(currentCertificate)} ><FaAngleLeft /></button>
         ):(
          <button className="Back" style={{"color":"#395B64"}}  disabled><FaAngleLeft /></button>
         )
      }{
         right? (
          <button className="Next" onClick={() => handleRight(currentCertificate)} ><FaAngleRight/></button>
         ):(
          <button className="Next" style={{"color":"#395B64"}} disabled><FaAngleRight/></button>
         )

      }
      
      
      
    
      
      
      <div className="container">
           <div className="certificateHolder">
                <img  src={myCertificate[currentCertificate]} alt="RN" />
                <h3>{certificateName[currentCertificate]}</h3>
                
          </div>

          <img className="cert" src={require("./Assets/certi.png" )} alt="certi" />

      </div>
    </div>
  

  );
}
