import React from "react";
import Icon from "./imges/Icon.png"
import Samsung from './imges/Samsung.png'
import './Selecon.css'

// import Instagarm from './imges/insta.png'
// import Twiter from './imges/Twiter.png'
// import Face from './imges/Facebok.png'
// import Youtube from './imges/Youtube.png'
// import In from './imges/In.png'


function Selecon(){
    return(
      <div className="Zaybal">
           <div class="Dad">
        <div class="Text---1">
            <h1 class="text---1">Design & Build Your Own <br/>
                 Landing Pages</h1>
            <p class="text1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                <div class="icons">
                   <div class="icon1">
                   <img src={Icon} alt="Icon" />;
                    <h3 class="Icon-text">
                        Title Goes Here
                    </h3>
                    <p class="Icon-text-1">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    </p>
                   </div>
                   <div class="icon1">
                   <img src={Icon} alt="Icon" />;
                    <h3 class="Icon-text">
                        Title Goes Here
                    </h3>
                    <p class="Icon-text-1">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    </p>
                   </div>
                   
                </div>
                <div class="icons">
                    <div class="icon1">
                    <img src={Icon} alt="Icon" />;
                     <h3 class="Icon-text">
                         Title Goes Here
                     </h3>
                     <p class="Icon-text-1">
                         Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                     </p>
                    </div>
                    <div class="icon1">
                    <img src={Icon} alt="Icon" />;
                     <h3 class="Icon-text">
                         Title Goes Here
                     </h3>
                     <p class="Icon-text-1">
                         Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                     </p>
                    </div>
                    
                 </div>
        </div>
      
        <div class="poto1">
        <img className="poto" src={Samsung} alt="Samsung" />;
        
        </div>

            
      </div>
      <div>
 
   </div>
 </div>

    )
}

export default Selecon;