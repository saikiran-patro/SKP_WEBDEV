import React from 'react'
import './Intro.scss'

import Typewriter from 'typewriter-effect';



export default function Intro() {
  
  return (
    <div className="Intro" id="Intro">
      
      <div className="left">
          <div className="ImgContainer">
              <img src={require('./favicon.png')} alt="hel" />
          </div>
      </div>
      <div className="right">
          <div className="wrapper">
               <h2>Hi There! I'm</h2>
               <h1>Sai Kiran Patro</h1>
               <h3><span ><Typewriter
               
  options={{
    strings: ['Mobile App Developer', 'Web Developer','Problem Solver','Content Creator'],
    autoStart: true,
    loop: true,
  }}


               onInit={(typewriter) => {
                 typewriter.typeString('Technophile')
                   .pauseFor(2500)
                   .deleteAll()
                   .start();
               }}
             />
             </span></h3>
             
               <div className="actionButtons">
               <button><a href="mailto:saikiranpatro198@gmail.com">Hire Me</a></button>
               <button><a href="#Intro">View Resume</a></button>
               
               </div>
               
          </div>
      
      </div>
    
    
    
    </div>
  )
}
