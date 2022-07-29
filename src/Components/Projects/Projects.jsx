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
        <div className={"Featuredproject " +(Featuredtype && " active ") +(!Featuredtype && " deactive ")}>
            
            <div className="project">
                <img src={require('./Assets/Featured/TeslaClone.png')}  alt="TeslaApp" />
                <h3>Tesla App</h3>
                <div className="buttonInAction">
                     <button ><a href="https://github.com/saikiran-patro/Tesla-APP" target="_blank" rel="noopener noreferrer"><FaGithub />  View Code</a></button>
                 
                </div>
                             
                

            </div>
            <div className="project">
                <img src={require('./Assets/Featured/CloudPrinter.png')}  alt="CloudPrinter" />
                <h3>Cloud Printer App</h3>
                <div className="buttonInAction">
                     <button ><a href="https://github.com/saikiran-patro/CloudPrinter" target="_blank" rel="noopener noreferrer"><FaGithub />  View Code</a></button>
                 
                </div>

            </div>
            <div className="project">
                <img src={require('./Assets/Featured/WordBookExtension.png')}  alt="ChromeExtension" />
                <h3>Word Book Extension</h3>
                <div className="buttonInAction">
                     <button ><a href="https://github.com/saikiran-patro/Word-Book" target="_blank" rel="noopener noreferrer"><FaGithub />  View Code</a></button>
                     <button ><a href="https://chrome.google.com/webstore/detail/word-book/lacbcjnocgmecilghhgijlcfoeaoehbn?hl=en&authuser=0" target="_blank" rel="noopener noreferrer"> <FaPlus/> Add Extension</a></button>
                 
                </div>

            </div>
            <div className="project">
                <img src={require('./Assets/Featured/FallDetection.png')}  alt="FallDetection" />
                <h3>Human Fall Detection (Prototype)</h3>
                <div className="buttonInAction">
                     <button ><a href="https://github.com/saikiran-patro/Human-fall-detection-system" target="_blank" rel="noopener noreferrer"><FaGithub />  View Code</a></button>
                     <button ><a href="https://www.youtube.com/watch?v=schAiYABB6k" target="_blank" rel="noopener noreferrer"> <FaYoutube/> Video</a></button>
                 
                </div>

            </div>

          
        </div>
        <div className={"Webproject "+(Webtype && " active ")+ (!Webtype && " deactive ")}>
            
            <div className="project">
                <img src={require('./Assets/Web/CancerPrediction.png')}  alt="TeslaApp" />
                <h3>Cancer Prediction App</h3>
                <div className="buttonInAction">
                     <button ><a href="https://github.com/saikiran-patro/CancerPrediction" target="_blank" rel="noopener noreferrer"><FaGithub />  View Code</a></button>
                 
                </div>
               
                            
                

                
                

            </div>
            <div className="project">
                <img src={require('./Assets/Web/CloudPrinter.png')}  alt="CloudPrinter" />
                <h3>Cloud Printer App</h3>
                <div className="buttonInAction">
                     <button ><a href="https://github.com/saikiran-patro/CloudPrinter" target="_blank" rel="noopener noreferrer"><FaGithub />  View Code</a></button>
                 
                </div>

            </div>
            <div className="project">
                <img src={require('./Assets/Web/ContactsApp.png')}  alt="ContactsApp" />
                <h3>Contacts App</h3>
                <div className="buttonInAction">
                     <button ><a href="https://github.com/saikiran-patro/Contact-Manager-App" target="_blank" rel="noopener noreferrer"><FaGithub />  View Code</a></button>
                   
                 
                </div>

            </div>
            <div className="project">
                <img src={require('./Assets/Web/Memorandum.png')}  alt="MemorandumApp" />
                <h3>Memorandum App</h3>
                <div className="buttonInAction">
                     <button ><a href="https://github.com/saikiran-patro/Memorandum_App" target="_blank" rel="noopener noreferrer"><FaGithub />  View Code</a></button>
                  
                 
                </div>

            </div>
            

          
        </div>
        <div className={"Mobileproject "+(Mobiletype && " active ")+ (!Mobiletype && " deactive ")}>
            
            <div className="project">
                <img src={require('./Assets/Android/LexiconMaster.png')}  alt="LexiconMaster" />
                <h3>Dictionary App</h3>
                <div className="buttonInAction">
                     <button ><a href="https://github.com/saikiran-patro/LexiconMaster" target="_blank" rel="noopener noreferrer"><FaGithub />  View Code</a></button>
                 
                </div>
               
                            
                

                
                

            </div>
            <div className="project">
                <img src={require('./Assets/Android/PrimeVideoStore.png')}  alt="PrimeVideoStore" />
                <h3>Prime Video Store </h3>
                <div className="buttonInAction">
                     <button ><a href="https://github.com/saikiran-patro/PrimeVStore" target="_blank" rel="noopener noreferrer"><FaGithub />  View Code</a></button>
                   
                 
                </div>

            </div>
            <div className="project">
                <img src={require('./Assets/Android/TeslaClone.png')}  alt="TeslaClone" />
                <h3>Tesla App</h3>
                <div className="buttonInAction">
                     <button ><a href="https://github.com/saikiran-patro/Tesla-APP" target="_blank" rel="noopener noreferrer"><FaGithub />  View Code</a></button>
                  
                 
                </div>

            </div>
            

          
        </div>
        <div className={"Iotproject "+(Iottype && " active ")+ (!Iottype && " deactive ")}>
            
        <div className="project">
                <img src={require('./Assets/IoT/FallDetection.png')}  alt="FallDetection" />
                <h3>Human Fall Detection (Prototype)</h3>
                <div className="buttonInAction">
                     <button ><a href="https://drive.google.com/file/d/1mStZAMkmx5BtHU50c9bGnzVOl4JHGm6e/view" target="_blank" rel="noopener noreferrer"><FaGithub />  View Code</a></button>
                     <button ><a href="https://www.youtube.com/watch?v=schAiYABB6k" target="_blank" rel="noopener noreferrer"> <FaYoutube/> Video</a></button>
                 
                </div>

        </div>
        <div className="project">
                <img src={require('./Assets/IoT/Home.png')}  alt="FallDetection" />
                <h3>Voice Controlled Home Automation</h3>
                <div className="buttonInAction">
                     <button ><a href="https://github.com/saikiran-patro/Voice-controlled-Home-Automation" target="_blank" rel="noopener noreferrer"><FaGithub />  View Code</a></button>
                     <button ><a href="https://www.youtube.com/watch?v=IoOA29knfkg" target="_blank" rel="noopener noreferrer"> <FaYoutube/> Video</a></button>
                 
                </div>

            </div>
          

      
    </div>

    
    
    
    
    
    </div>
            
    
    
    
    </div>
  )
}
