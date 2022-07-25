import React from 'react'
import './About.scss'
export default function About() {
  return (
    <div className='About' id='About'>
    
    <div className="left">
    
        <div className="aboutContainer">
              <h1>A li'l bit about myself</h1>
              <p>A technophile with good web development skills.Passionate about learning new technologies, and enjoy making tech content online on Youtube! <i class="fab fa-youtube"></i></p>
              <p>I'm interested in Information Technology, space technology inspired by Elon Musk and also huge marvel fan!😄 </p>

    
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
