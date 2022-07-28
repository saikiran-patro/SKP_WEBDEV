import React,{useState} from 'react'
import { FaLightbulb,FaGlobe,FaAndroid,FaMicrochip,FaGithub,FaPlus,FaYoutube} from "react-icons/fa";

//import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Projects.scss'
export default function Projects() {
  const checkType=(type)=>{

      if(type==='Featured'){
        setFeaturedtype(true);
        setWebtype(false);
        setMobiletype(false);
    
        setIottype(false);
      }
      else if(type==='Web'){
        setFeaturedtype(false);
        setWebtype(true);
        setMobiletype(false);
      
        setIottype(false);
      }
      else if(type==='Mobile'){
        setFeaturedtype(false);
        setWebtype(false);
        setMobiletype(true);
        
        setIottype(false);
      }
      
      else if(type==='IoT'){
        setFeaturedtype(false);
        setWebtype(false);
        setMobiletype(false);
        
        setIottype(true);
      }
  }

  const [Featuredtype,setFeaturedtype]=useState(true)
  const [Webtype,setWebtype]=useState(false);
  const [Mobiletype,setMobiletype]=useState(false);
    const [Iottype,setIottype]=useState(false);
  return (
    <div className='Projects' id='Projects'>
    <h1>Projects</h1>
    <ul>
         <li className={(Featuredtype && 'active')}  onClick={()=>checkType('Featured')}><FaLightbulb className='LiIcons' />Featured</li>
         <li className={(Webtype && 'active')} onClick={()=>checkType('Web')}><FaGlobe className='LiIcons' /> Web App</li>
         <li className={(Mobiletype && 'active')} onClick={()=>checkType('Mobile')}><FaAndroid className='LiIcons' /> Mobile App</li>
        
         <li className={(Iottype && 'active')} onClick={()=>checkType('IoT')}><FaMicrochip className='LiIcons' /> IoT</li>
    
    
    </ul>
    <div className="projectsContainer">
        <div className="Featuredproject">
            
            <div className="project">
                <img src={require('./Assets/Featured/TeslaClone.png')}  alt="TeslaApp" />
                <h3>Tesla App</h3>
                <div className="buttonInAction">
                     <button ><a href="#Intr8"><FaGithub />  View Code</a></button>
                 
                </div>
               
                            
                

                
                

            </div>
            <div className="project">
                <img src={require('./Assets/Featured/CloudPrinter.png')}  alt="CloudPrinter" />
                <h3>Cloud Printer App</h3>
                <div className="buttonInAction">
                     <button ><a href="#Intr8"><FaGithub />  View Code</a></button>
                 
                </div>

            </div>
            <div className="project">
                <img src={require('./Assets/Featured/WordBookExtension.png')}  alt="ChromeExtension" />
                <h3>Word Book Extension</h3>
                <div className="buttonInAction">
                     <button ><a href="#Intr8"><FaGithub />  View Code</a></button>
                     <button ><a href="#Intr8"> <FaPlus/> Add Extension</a></button>
                 
                </div>

            </div>
            <div className="project">
                <img src={require('./Assets/Featured/FallDetection.png')}  alt="FallDetection" />
                <h3>Human Fall Detection (Prototype)</h3>
                <div className="buttonInAction">
                     <button ><a href="#Intr8"><FaGithub />  View Code</a></button>
                     <button ><a href="#Intr8"> <FaYoutube/> Video</a></button>
                 
                </div>

            </div>

          
        </div>
    
    
    
    </div>
            
    
    
    
    </div>
  )
}
