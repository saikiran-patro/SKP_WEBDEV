import React from 'react'
import { FaInstagram,FaGithub,FaLinkedin ,FaYoutube} from "react-icons/fa";
import './Contact.scss'
import Typewriter from 'typewriter-effect';
export default function Contact() {
  return (
    <div className="Contact" id="Contact">
    
         <div className="container">
              <div className="social">
                    <h2>Say Hello to me!</h2>
                    <img src={require('./favicon.png')} alt="img" />
                    <button><a href="mailto:saikiranpatro198@gmail.com">Connect</a></button>
             
                   
              </div>
              <div className="quote">
              
              
              <h3> <span >ALL YOU NEED IS<Typewriter options={{
          strings: [ 'SOLUTION','STRATEGY','TECHNOLOGY','INNOVATION','GROWTH'],
          autoStart: true,
          loop: true,
                    }}


              onInit={(typewriter) => {
                typewriter.typeString('IDEA')
                  .pauseFor(5000)
                  .deleteAll()
                  .start();
              }}
            />
            </span></h3>
            </div>
             
         </div>
         <div className="social-icons">
             <a target="_blank"   href="https://github.com/saikiran-patro" rel="noopener noreferrer"><FaGithub className="socialIcon"/> </a>
             <a target="_blank"  href="https://www.linkedin.com/in/sai-kiran-patro/" rel="noopener noreferrer"> <FaLinkedin className="socialIcon"/> </a>
             <a target="_blank"  href="https://www.instagram.com/saikiranpatro/" rel="noopener noreferrer">  <FaInstagram className="socialIcon"/> </a>
             <a target="_blank"  href="https://www.youtube.com/saikiranpatro" rel="noopener noreferrer">   <FaYoutube className="socialIcon"/> </a>
            
             
              
         
         </div>

    
    </div>
  )
}
