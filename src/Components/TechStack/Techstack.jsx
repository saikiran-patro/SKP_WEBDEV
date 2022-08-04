import React from 'react'
import './Techstack.scss'
import {FaGithub,FaPlus,FaYoutube} from "react-icons/fa";

export default function Techstack({projectNameS,state,setState}) {


    if( state===true){
        if(projectNameS === 'Tesla App'){

            return (
                
                <div className="techStackContainer">
                    <div className="left">
                        <div className="about">
                            <h1>{projectNameS}</h1>
                             <img src={require('../Projects/Assets/Featured/TeslaClone.png')}  alt="TeslaApp" /><br/><br/>
                             <h3>
                                 An application UI clone of Tesla App designed using react native framework.
                             
                             </h3>
                             <div className="buttonInAction">
                                    <button ><a href="https://github.com/saikiran-patro/Tesla-APP" target="_blank" rel="noopener noreferrer"><FaGithub/> View Code</a></button>
                 
                                </div>
                                
                               
                        
                                 
                                

                        </div>

                        
                        
                    
                    </div>
                     <div className="right">
                          <h2> Tech Stack</h2>
                          
                          
                         <div className="techStack">
                         <div class="badges">
                            <img src="https://img.shields.io/badge/Platform-Android%20%26%20IOS-%23CDF3A2" alt="platform-android-ios" />
                           <img src="https://img.shields.io/badge/Version-1.0-%23D6E4F0" alt="version-2.0"/>
                           <img src="https://img.shields.io/badge/Appsize-25MB-%23F7DAD9" alt="appsize-3MB" />
                            <img src="https://img.shields.io/badge/Framework-React%20Native-%23A2DBFA" alt="framework-react-native"/>
                            <img src="https://img.shields.io/badge/Language-%20Javascript-%23FAFF00" alt="language-JS"/>                           
                           <img src="https://img.shields.io/badge/Editor-Vs%20Code-%23A9F1DF" alt="editor-vscode"/>
                           
                       </div>
                         </div>
                     
                     
                     </div>
                    
                    
                
                
                
                </div>
              )
        }
        else if(projectNameS === 'Cloud Printer App'){
        
            return (   
                
                <div className="techStackContainer">
                <div className="left">
                    <div className="about">
                        <h1>{projectNameS}</h1>
                         <img src={require('../Projects/Assets/Featured/CloudPrinter.png')}  alt="Cloud Printing App" /><br/><br/>
                         <h3>
                             A Cloud Printing Application is an app that allows users to print their documents from the cloud.
                         </h3>
                         <div className="buttonInAction">
                                <button ><a href="https://github.com/saikiran-patro/CloudPrinter" target="_blank" rel="noopener noreferrer"><FaGithub/> View Code</a></button>
             
                            </div>
                            
                           
                    
                             
                            

                    </div>

                    
                    
                
                </div>
                 <div className="right">
                      <h2> Tech Stack</h2>
                      
                      
                     <div className="techStack">
                     <div class="badges">
                        <img src="https://img.shields.io/badge/platform-Web-%23FF8C32" alt="platform-web" />
                       <img src="https://img.shields.io/badge/Version-1.0-%23FFD369" alt="version-1.0"/>
                       <img src="https://img.shields.io/badge/Language-HTML%20%26%20CSS-%2359CE8F" alt="language-html-css"/>
                        <img src="https://img.shields.io/badge/Template-EJS-%23F9F9C5" alt="EJS"/>
                        <img src="https://img.shields.io/badge/Language-JavaScript-%23EAE509" alt="javascript" />
                        <img src="https://img.shields.io/badge/Database-MongoDB-%2359CE8F" alt="mongo" />  
                        <img src="https://img.shields.io/badge/Server-Express%20JS-%2300D7FF" alt="express" />                    
                       <img src="https://img.shields.io/badge/Editor-Vs%20Code-%23A9F1DF" alt="editor-vscode"/>
                       
                   </div>
                     </div>
                 
                 
                 </div>
                
                
            
            
            
            </div>
                
                )
        }
        else if(projectNameS === 'Word Book Extension'){

            return (

                <div className="techStackContainer">
                <div className="left">
                    <div className="about">
                        <h1>{projectNameS}</h1>
                         <img src={require('../Projects/Assets/Featured/WordBookExtension.png')}  alt="Cloud Printing App" /><br/><br/>
                         <h3>
                             A Google Chrome extension word book which is pretty useful in searching and knowing the meanings, synonyms and Antonyms of different words.

           
                         </h3>
                         <div className="buttonInAction">
                                <button ><a href="https://github.com/saikiran-patro/Word-Book" target="_blank" rel="noopener noreferrer"><FaGithub/> View Code</a></button>
                                <button ><a href="https://chrome.google.com/webstore/detail/word-book/lacbcjnocgmecilghhgijlcfoeaoehbn?hl=en&authuser=0" target="_blank" rel="noopener noreferrer"> <FaPlus/> Add Extension</a></button>
                            </div>
                            
                           
                    
                             
                            

                    </div>

                    
                    
                
                </div>
                 <div className="right">
                      <h2> Tech Stack</h2>
                      
                      
                     <div className="techStack">
                     <div class="badges">
                        <img src="https://img.shields.io/badge/platform-Web-%23FF8C32" alt="platform-web" />
                       <img src="https://img.shields.io/badge/Version-1.0-%23FFD369" alt="version-1.0"/>
                       <img src="https://img.shields.io/badge/Language-HTML%20%26%20CSS-%2359CE8F" alt="language-html-css"/>
                       <img src="https://img.shields.io/badge/Language-%20Javascript-%23FAFF00" alt="language-JS"/> 
                                               
                       <img src="https://img.shields.io/badge/Editor-Vs%20Code-%23A9F1DF" alt="editor-vscode"/>
                       
                   </div>
                     </div>
                 
                 
                 </div>
                
                
            
            
            
            </div>


            )


        }
        else if(projectNameS==='Human Fall Detection'){

            return (

                <div className="techStackContainer">
                <div className="left">
                    <div className="about">
                        <h1>{projectNameS}</h1>
                         <img src={require('../Projects/Assets/Featured/FallDetection.png')}  alt="Fall Detection System" /><br/><br/>
                         <h3>
                                 A watch prototype designed to detect the accident fall of humans and save lives.


           
                         </h3>
                         <div className="buttonInAction">
                                <button ><a href="https://github.com/saikiran-patro/Human-fall-detection-system" target="_blank" rel="noopener noreferrer"><FaGithub/> View Code</a></button>
                                <button ><a href="https://www.youtube.com/watch?v=schAiYABB6k" target="_blank" rel="noopener noreferrer"> <FaYoutube/> Video</a></button>
                 
                            </div>
                            
                           
                    
                             
                            

                    </div>

                    
                    
                
                </div>
                 <div className="right">
                      <h2> Tech Stack</h2>
                      
                      
                     <div className="techStack">
                     <div class="badges">
                     <img src="https://img.shields.io/badge/Platform-IoT-%23FFF5AB9" alt="platform-IoT"/>
                     <img src="https://img.shields.io/badge/Version-1.1-%23867AE9" alt="version-1.1"/>
                     <img src="https://img.shields.io/badge/Software-Web%20App-%23C6FFC1" alt="software-Web app"/>
                     <img src="https://img.shields.io/badge/Software--Language-HTML%20%26%20CSS-%2300ADB5" alt="slang-html&css"/>
                     <img src="https://img.shields.io/badge/Hardware-Node%20mcu-%23A9F1DF" alt="hardware-Nodemcu"/>
                     <img src="https://img.shields.io/badge/Module-MPU%206050-%23C9CBFF" alt="module-MPU6050"/>
                     <img src="https://img.shields.io/badge/Hardware--Language-Embedded%20C-%23A2DBFA" alt="hlang-embedded c"/>
                     <img src="https://img.shields.io/badge/Editor-Vs%20code%20%26%20Arduino%20-%23FCECDD" alt="editor-vscode & arduino ide"/>
                   
                   </div>
                     </div>
                 
                 
                 </div>
                
                
            
            
            
            </div>


            )

        }
        else if(projectNameS==='Cancer Prediction App'){
            return (

                <div className="techStackContainer">
                <div className="left">
                    <div className="about">
                        <h1>{projectNameS}</h1>
                         <img src={require('../Projects/Assets/Web/CancerPrediction.png')}  alt="Cancer APP" /><br/><br/>
                         <h3>
                                 Cancer Prediction Application is an app designed to predict lung cancer and skin cancer of people before it get worsen.

           
                         </h3>
                         <div className="buttonInAction">
                             <button ><a href="https://github.com/saikiran-patro/CancerPrediction" target="_blank" rel="noopener noreferrer"><FaGithub />  View Code</a></button>
                 
                        </div>
                            
                           
                    
                             
                            

                    </div>

                    
                    
                
                </div>
                 <div className="right">
                      <h2> Tech Stack</h2>
                      
                      
                     <div className="techStack">
                     <div class="badges">
                     <img src="https://img.shields.io/badge/Platform-Web-%23E2DCC8" alt="platform-web"/>
                     <img src="https://img.shields.io/badge/Version-2.0-%23867AE9" alt="version-2.0"/>
                     <img src="https://img.shields.io/badge/Software-Web%20App-%23C6FFC1" alt="software-Web app"/>
                     <img src="https://img.shields.io/badge/Software--Language-HTML%20%26%20CSS-%2300ADB5" alt="slang-html&css"/>
                     <img src="https://img.shields.io/badge/Language-%20Javascript-%23FAFF00" alt="language-JS"/>
                     <img src="https://img.shields.io/badge/Backend-Python-%2366BFBF" alt="python" /> 
                     <img src="https://img.shields.io/badge/Framework-Flask-%23F37878" alt="Flask" />
                     <img src="https://img.shields.io/badge/Technology-Deep%20Learning-%23FFDEDE" alt="deeplearning" />
                     <img src="https://img.shields.io/badge/Tool-Google%20Colab-%23F7EC09" alt="google-colab" />
                     <img src="https://img.shields.io/badge/Editor-VsCode-%23243A73" alt="vscode" />
                   </div>
                     </div>
                 
                 
                 </div>
                
                
            
            
            
            </div>


            )

        }
        else if(projectNameS === 'Contacts App'){
        
            return (   
                
                <div className="techStackContainer">
                <div className="left">
                    <div className="about">
                        <h1>{projectNameS}</h1>
                         <img src={require('../Projects/Assets/Web/ContactsApp.png')}  alt="Contacts App" /><br/><br/>
                         <h3>
                             Contact App is a secure way of storing user contacts with level 5 encryption by authenting the user.
                         
                         </h3>
                         <div className="buttonInAction">
                             <button ><a href="https://github.com/saikiran-patro/Contact-Manager-App" target="_blank" rel="noopener noreferrer"><FaGithub />  View Code</a></button>
                 
                            </div>
                            
                           
                    
                             
                            

                    </div>

                    
                    
                
                </div>
                 <div className="right">
                      <h2> Tech Stack</h2>
                      
                      
                     <div className="techStack">
                     <div class="badges">
                        <img src="https://img.shields.io/badge/platform-Web-%23FF8C32" alt="platform-web" />
                       <img src="https://img.shields.io/badge/Version-1.0-%23FFD369" alt="version-1.0"/>
                       <img src="https://img.shields.io/badge/Language-HTML%20%26%20CSS-%2359CE8F" alt="language-html-css"/>
                        <img src="https://img.shields.io/badge/Template-EJS-%23F9F9C5" alt="EJS"/>
                        <img src="https://img.shields.io/badge/Language-JavaScript-%23EAE509" alt="javascript" />
                        <img src="https://img.shields.io/badge/Database-MongoDB-%2359CE8F" alt="mongo" />  
                        <img src="https://img.shields.io/badge/Server-Express%20JS-%2300D7FF" alt="express" />                    
                       <img src="https://img.shields.io/badge/Editor-Vs%20Code-%23A9F1DF" alt="editor-vscode"/>
                       
                   </div>
                     </div>
                 
                 
                 </div>
                
                
            
            
            
            </div>
                
                )
        }
        else if(projectNameS === 'Memorandum App'){
        
            return (   
                
                <div className="techStackContainer">
                <div className="left">
                    <div className="about">
                        <h1>{projectNameS}</h1>
                         <img src={require('../Projects/Assets/Web/Memorandum.png')}  alt="Memorandum App" /><br/><br/>
                         <h3>
                            A Personalized Notes taking Web Application .  
                         </h3>
                         <div className="buttonInAction">
                         <button ><a href="https://github.com/saikiran-patro/Memorandum_App" target="_blank" rel="noopener noreferrer"><FaGithub />  View Code</a></button>
                  
                            </div>
                            
                           
                    
                             
                            

                    </div>

                    
                    
                
                </div>
                 <div className="right">
                      <h2> Tech Stack</h2>
                      
                      
                     <div className="techStack">
                     <div class="badges">
                     <img src="https://img.shields.io/badge/Platform-Web-%23FF6B6B" alt="platform-Web"/>
                     <img src="https://img.shields.io/badge/Version-1.0-%23D8E3E7" alt="version-1.0"/>
                     <img src="https://img.shields.io/badge/Framework-ReactJS-%23C0FEFC" alt="Framework-ReatJS"/>
                     <img src="https://img.shields.io/badge/%20Language-HTML%20%26%20CSS-%23F8A488" alt="slang-html&css"/>
                     <img src="https://img.shields.io/badge/Language-Javascript-%23FAFF00" alt="language-Javascript"/>
                     <img src="https://img.shields.io/badge/Editor-VSCode-%23867AE9" alt="editor-vscode"/>
                      
                   </div>
                     </div>
                 
                 
                 </div>
                
                
            
            
            
            </div>
                
                )
        }
        else if(projectNameS==='Dictionary App'){

            return (
                
                <div className="techStackContainer">
                    <div className="left">
                        <div className="about">
                            <h1>{projectNameS}</h1>
                             <img src={require('../Projects/Assets/Android/LexiconMaster.png')}  alt="DictionaryApp" /><br/><br/>
                             <h3>
                                     A React-Native application which is useful to learn about the meanings of different words and to improve vocabulary.


                             
                             </h3>
                             <div className="buttonInAction">
                                    <button ><a href="https://github.com/saikiran-patro/LexiconMaster" target="_blank" rel="noopener noreferrer"><FaGithub />  View Code</a></button>
                 
                                </div>
                                
                               
                        
                                 
                                

                        </div>

                        
                        
                    
                    </div>
                     <div className="right">
                          <h2> Tech Stack</h2>
                          
                          
                         <div className="techStack">
                         <div class="badges">
                            <img src="https://img.shields.io/badge/Platform-Android%20%26%20IOS-%23CDF3A2" alt="platform-android-ios" />
                           <img src="https://img.shields.io/badge/Version-1.0-%23D6E4F0" alt="version-2.0"/>
                           <img src="https://img.shields.io/badge/Appsize-25MB-%23F7DAD9" alt="appsize-3MB" />
                            <img src="https://img.shields.io/badge/Framework-React%20Native-%23A2DBFA" alt="framework-react-native"/>
                            <img src="https://img.shields.io/badge/Language-%20Javascript-%23FAFF00" alt="language-JS"/>                           
                           <img src="https://img.shields.io/badge/Editor-Vs%20Code-%23A9F1DF" alt="editor-vscode"/>
                           
                       </div>
                         </div>
                     
                     
                     </div>
                    
                    
                
                
                
                </div>
              )
        }
        else if(projectNameS === 'Prime Video Store'){
            return (
                
                <div className="techStackContainer">
                    <div className="left">
                        <div className="about">
                            <h1>{projectNameS}</h1>
                             <img src={require('../Projects/Assets/Android/PrimeVideoStore.png')}  alt="Prime Video Store" /><br/><br/>
                             <h3>
                                     A Prime Video Store is used to store users upcoming prime list to binge watch.


                             
                             </h3>
                             <div className="buttonInAction">
                                    <button ><a href="https://github.com/saikiran-patro/PrimeVStore" target="_blank" rel="noopener noreferrer"><FaGithub />  View Code</a></button>
                   
                                </div>
                                
                               
                        
                                 
                                

                        </div>

                        
                        
                    
                    </div>
                     <div className="right">
                          <h2> Tech Stack</h2>
                          
                          
                         <div className="techStack">
                         <div class="badges">
                            <img src="https://img.shields.io/badge/Platform-Android%20%26%20IOS-%23CDF3A2" alt="platform-android-ios" />
                           <img src="https://img.shields.io/badge/Version-2.0-%23D6E4F0" alt="version-2.0"/>
                           <img src="https://img.shields.io/badge/Appsize-42MB-%23F7DAD9" alt="appsize-3MB" />
                            <img src="https://img.shields.io/badge/Framework-React%20Native-%23A2DBFA" alt="framework-react-native"/>
                            <img src="https://img.shields.io/badge/Language-%20Javascript-%23FAFF00" alt="language-JS"/>                           
                           <img src="https://img.shields.io/badge/Editor-Vs%20Code-%23A9F1DF" alt="editor-vscode"/>
                           
                       </div>
                         </div>
                     
                     
                     </div>
                    
                    
                
                
                
                </div>
              )

        }
        else if(projectNameS==='Voice Controlled Home Automation'){

            return (

                <div className="techStackContainer">
                <div className="left">
                    <div className="about">
                        <h1>{projectNameS}</h1>
                         <img src={require('../Projects/Assets/IoT/Home.png')}  alt="Home Automation" /><br/><br/>
                         <h3>
                                A home automation integrated with my desktop assitant to control electrical appliances.



           
                         </h3>
                         <div className="buttonInAction">
                                 <button ><a href="https://github.com/saikiran-patro/Voice-controlled-Home-Automation" target="_blank" rel="noopener noreferrer"><FaGithub />  View Code</a></button>
                                 <button ><a href="https://www.youtube.com/watch?v=IoOA29knfkg" target="_blank" rel="noopener noreferrer"> <FaYoutube/> Video</a></button>
                     
                            </div>
                            
                           
                    
                             
                            

                    </div>

                    
                    
                
                </div>
                 <div className="right">
                      <h2> Tech Stack</h2>
                      
                      
                     <div className="techStack">
                     <div class="badges">
                     <img src="https://img.shields.io/badge/Platform-IoT-%23FFF5AB9" alt="platform-IoT"/>
                     <img src="https://img.shields.io/badge/Version-1.0-%23D6E4F0" alt="version-2.0"/>
                     <img src="https://img.shields.io/badge/Appsize-2MB-%23F7DAD9" alt="appsize-3MB"/>
                     <img src="https://img.shields.io/badge/Hardware-Bolt%20Cloud-%23A9F1DF" alt="hardware-Nodemcu"/>
                     <img src="https://img.shields.io/badge/Framework-Tkinter-%23F05454" alt="framework-tkiner"/>
                     <img src="https://img.shields.io/badge/Language-Python-%23FFF5AB" alt="language-python"/>
                     <img src="https://img.shields.io/badge/Editor-Vs%20Code-%23A9F1DF" alt="editor-vscode"/>
                    
                   </div>
                     </div>
                 
                 
                 </div>
                
                
            
            
            
            </div>


            )

        }

       
    }
  
}
