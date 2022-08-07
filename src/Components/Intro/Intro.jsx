import React from 'react'
import './Intro.scss'

import Typewriter from 'typewriter-effect';




export default function Intro() {

  
  return (
    <div className="Intro" id="Intro">
      
      <div data-aos="fade-up"  className="left">
          <div  className="ImgContainer">
              <img src={require('./favicon.png')} alt="hel" />
          </div>
      </div>
      <div data-aos="fade-down" className="right">
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
               <button><a href="https://drive.google.com/file/d/1Ncb4QncvcP_Q4rgOhl7HDUxiLx_K9B5P/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a> </button>
               
               </div>
               
          </div>
      
      </div>
    
    
    
    </div>
  )
}
