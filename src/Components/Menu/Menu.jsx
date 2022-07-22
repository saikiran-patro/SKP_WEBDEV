import React from 'react'


import './Menu.scss'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaHome ,FaUser,FaCode,FaLaptopCode, FaBug,FaCertificate,FaEnvelope} from "react-icons/fa";




export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"Menu " + (menuOpen && "active")}>

        <ul>

            <li> <a href="#Intro"><FaHome className="MenuIcon"/> Home</a></li>
            <li> <a href="#About"><FaUser className="MenuIcon"/> About</a></li>
            <li> <a href="#Skills"> <FaCode className="MenuIcon" />Skills</a></li>
            <li> <a href="#Projects"> <FaLaptopCode className="MenuIcon"/>Projects</a></li>
            <li> <a href="#Profiles"> <FaBug className="MenuIcon"/>Profiles</a></li>
            <li> <a href="#Certificates"> <FaCertificate className="MenuIcon"/>Certifications</a></li>
            <li> <a href="#Contact"> <FaEnvelope className="MenuIcon"/> Contact</a></li>
        
        
        
        </ul>
    
    
    </div>
  )
}
