import React from 'react'
import './Navbar.css'
import { FaHome ,FaUser,FaCode,FaLaptopCode, FaBug,FaCertificate,FaEnvelope} from "react-icons/fa";
export default function Navbar() {
  return (
    <div className="NavbarContainer">
    
    
    
    <div className="Navbar">
    
    <ul>

        <li> <a href="#Intro"><FaHome className="MenuIcon"/></a></li>
            <li> <a href="#About"><FaUser className="MenuIcon"/></a></li>
            <li> <a href="#Skills"> <FaCode className="MenuIcon" /></a></li>
            <li> <a href="#Projects"> <FaLaptopCode className="MenuIcon"/> </a></li>
            <li> <a href="#Profiles"> <FaBug className="MenuIcon"/></a></li>
            <li> <a href="#Certificates"> <FaCertificate className="MenuIcon"/></a></li>
            <li> <a href="#Contact"> <FaEnvelope className="MenuIcon"/></a></li>
        


    </ul>


    
    
    </div>
    </div>
  )
}
