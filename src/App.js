import Topbar from "./Components/Topbar/Topbar.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Intro from "./Components/Intro/Intro.jsx";
import Certificate from "./Components/Certificates/Certificate.jsx"
import Profiles from "./Components/Profiles/Profiles.jsx"
import Skills from "./Components/Skills/Skills.jsx";
import './App.scss'; 

import {useState} from 'react';
function App() {

  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="App">


      
       <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

       <div className="Sections">
           <Intro/>
           <About/>
           <Skills/>
           <Projects/>
           <Profiles/>
           <Certificate/>
           <Contact/>


       
       
       </div>

           
   
       
       
         
       
       
      
       



    </div>
  );
}

export default App;
