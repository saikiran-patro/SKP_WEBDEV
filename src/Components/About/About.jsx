import React from 'react'
import './About.scss'
import {FaYoutube} from "react-icons/fa";

//import Aos from 'aos';
import 'aos/dist/aos.css';
export default function About() {

  
  return (
    <div className='About' id='About'>
    
    <div className="left">
       
        <div    className="aboutContainer">
              <h1>A li'l bit about myself</h1><br/>
              <p>I'm a Full Stack Web Developer and a Technophile who loves to learn and explore cutting edge technologies. <i class="fab fa-youtube"></i></p>
              <p>I'm interested in Information Technology, Rocket Science technology inspired by Elon Musk and also huge marvel fan!😄 </p>
              <h2>Check out my youtube channel!</h2>
              
               <iframe style={{"border-radius":"30px"}} width="300" height="200" src="https://www.youtube.com/embed/WTUULDLrf-k" title="Web 3.0: The next generation of web technology ! 🔥 🔥" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br />
              <button><a href="https://www.youtube.com/channel/UCPv9XuCE1Cho5QDYBcqWphA" rel="noreferrer" target="_blank"> <FaYoutube className="MenuIcon"/> Youtube!</a></button>

    
        </div>
    
    </div>
    <div className="right"  >
        <div className="aboutImgContainer">
            <img src={require('./About.png')} alt="About.png" />
        
        </div>
    
    </div>
    
    
    
    </div>
  )
}
