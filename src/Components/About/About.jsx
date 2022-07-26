import React from 'react'
import './About.scss'
import {FaYoutube} from "react-icons/fa";
export default function About() {
  return (
    <div className='About' id='About'>
    
    <div className="left">
    
        <div className="aboutContainer">
              <h1>A li'l bit about myself</h1>
              <p>A technophile with good web development skills.Passionate about learning new technologies, and enjoy making tech content online on Youtube! <i class="fab fa-youtube"></i></p>
              <p>I'm interested in Information Technology, space technology inspired by Elon Musk and also huge marvel fan!😄 </p>
              <h2>Check out my youtube channel!</h2>
              
               <iframe style={{"border-radius":"30px"}} width="300" height="200" src="https://www.youtube.com/embed/WTUULDLrf-k" title="Web 3.0: The next generation of web technology ! 🔥 🔥" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><br /><br />
              <button><a href="https://www.youtube.com/channel/UCPv9XuCE1Cho5QDYBcqWphA" rel="noreferrer" target="_blank"> <FaYoutube className="MenuIcon"/> Youtube!</a></button>

    
        </div>
    
    </div>
    <div className="right">
        <div className="aboutImgContainer">
            <img src={require('./About.png')} alt="About.png" />
        
        </div>
    
    </div>
    
    
    
    </div>
  )
}
