import React from 'react'
import './Profiles.scss'
export default function Profiles() {
  return (
    <div className="Profiles" id="Profiles">
      <h1>CODE PROFILES</h1>
    
     <div className="codeProfiles">
     
     
       <div className="profileContainer">
           <div className="Profile1">
              <img src={require('./Assets/HR.png')} alt="HR" />
              <button ><a href="https://www.hackerrank.com/saikiranpatro607?hr_r=1" target="_blank" rel="noopener noreferrer"> View Profile </a></button>

            </div>
            
       
       </div>
       <div className="profileContainer">
       <div className="Profile1">
          <img src={require('./Assets/GFG.png')} alt="HR" />
          <button ><a href="https://auth.geeksforgeeks.org/user/kiranpatro2018ece/profile" target="_blank" rel="noopener noreferrer"> View Profile </a></button>

        </div>
        
   
   </div>
       
       
          
    </div>
    <img className="coderImg"  src={require('./Assets/coder.png')} alt="coder.png" />

    </div>
  )
}
