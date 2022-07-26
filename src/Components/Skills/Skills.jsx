import React from 'react'
import './Skills.scss'
//import { DiAndroid ,DiHtml5,DiCss3,DiJavascript,DiPython, DiNodejs,DiMongodb,DiReact,DiGit,DiGithubBadge,DiWindows,DiLinux} from "react-icons/di";
export default function Skills() {
  // <DiHtml5 className="skillIcon"/>
  //       <DiCss3 className="skillIcon"/>
  //       <DiJavascript className="skillIcon"/>
  //       <DiPython className="skillIcon"/>
  //       <DiNodejs className="skillIcon"/>
  //       <DiMongodb className="skillIcon"/>
  //       <DiReact className="skillIcon"/>
  //       <DiGit className="skillIcon"/>
  //       <DiGithubBadge className="skillIcon"/>
  //       <DiAndroid className="skillIcon"/>
  //       <DiWindows className="skillIcon"/>
  //       <DiLinux className="skillIcon"/>
   return (
    <div className='Skills' id='Skills'>
    <div className="skillContainer">
        <img src={require('./skills.png')} alt="skills" className="skillsImg"/>
        <img src={require('./skills2.png')} alt="skills" className="skillsImg"/> 
        <img src={require('./skills3.png')} alt="skills" className="skillsImg"/> 

        
    </div>
    
    </div>
   )
}
