import React from 'react'
import './Skills.scss'
import { DiAndroid ,DiHtml5,DiCss3,DiJavascript,DiPython, DiNodejs,DiMongodb,DiReact,DiGit,DiGithubBadge,DiWindows,DiLinux} from "react-icons/di";
export default function Skills() {
  return (
    <div className='Skills' id='Skills'>
    <div className="skillContainer">
        <DiHtml5 className="skillIcon"/>
        <DiCss3 className="skillIcon"/>
        <DiJavascript className="skillIcon"/>
        <DiPython className="skillIcon"/>
        <DiNodejs className="skillIcon"/>
        <DiMongodb className="skillIcon"/>
        <DiReact className="skillIcon"/>
        <DiGit className="skillIcon"/>
        <DiGithubBadge className="skillIcon"/>
        <DiAndroid className="skillIcon"/>
        <DiWindows className="skillIcon"/>
        <DiLinux className="skillIcon"/>

        
    </div>
    
    </div>
  )
}
