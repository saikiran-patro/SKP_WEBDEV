import React from 'react'


import './Menu.scss'

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaHome ,FaUser,FaCode,FaLaptopCode, FaBug,FaEnvelope, FaYoutube} from "react-icons/fa";




export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"Menu " + (menuOpen && "active")}>

        <ul>

        <li onClick={() => setMenuOpen(false)}> <a href="#Intro"><FaHome className="MenuIcon"/> Home</a></li>
        <li onClick={() => setMenuOpen(false)}> <a href="#About"><FaUser className="MenuIcon"/> About</a></li>
        <li onClick={() => setMenuOpen(false)}> <a href="#Skills"> <FaCode className="MenuIcon" /> Skills</a></li>
        <li onClick={() => setMenuOpen(false)}> <a href="#Projects"> <FaLaptopCode className="MenuIcon"/> Projects</a></li>
        <li onClick={() => setMenuOpen(false)}> <a href="#Profiles"> <FaBug className="MenuIcon"/> Profiles</a></li>
        <li onClick={() => setMenuOpen(false)}> <a href="#Certificates"> <FaBug className="MenuIcon"/> Certificates</a></li>
        <li onClick={() => setMenuOpen(false)}> <a href="https://www.youtube.com/channel/UCPv9XuCE1Cho5QDYBcqWphA" rel="noreferrer" target="_blank"> <FaYoutube className="MenuIcon"/> Youtube</a></li>
        <li onClick={() => setMenuOpen(false)}> <a href="#Contact"> <FaEnvelope className="MenuIcon"/> Contact</a></li>
        
        
        
        </ul>
    
    
    </div>
  )
}
