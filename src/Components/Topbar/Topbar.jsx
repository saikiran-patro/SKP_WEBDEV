
import './topbar.scss'
//import {AiFillHome} from 'react-icons/ai'
export default function Topbar() {
  return (
    <div className='topbar' id='topbar' >
      <div className="wrapper">
         <div className="left">
              <img src={require("./favicon-modified.png") } alt="hello" className="top-logo" />
              <h3><a href="#Intro">SAI KIRAN PATRO</a> </h3>
         </div>
         
         <div className="right">
             <div className="hamburger">
                   <span className="lin1"></span>
                   <span className="lin2"></span>
                   <span className="lin3"></span>
             </div>
         </div>
      
      </div>
    
    
    </div>
  )
}
