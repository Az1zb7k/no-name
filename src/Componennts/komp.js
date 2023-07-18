import React from "react";

import './komp.css'
import Icon from "./imges/Icon.png"
import Broke from './imges/Broke.png'


function komp(){
    return(
        <div class="ota">
        <div class="Bratan1">
        <img className="Bratan" src={Broke} alt="Icon" />;

        </div>
        <div class="Yozuvlar">
            <div class="Yozuv">
                <h1 class="Headbr">Light, Fast & Powerful</h1>
                <br/>
                
                <p class="Foo22">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus <br/>
                    <br/>

                    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            </div>
            <div class="ishoralr">
                <div>
                <img src={Icon} alt="Icon" />;
                    <h3 class="rr1">Title Goes Here</h3>
                    <p class="rr2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                </div>
                <div>
                <img src={Icon} alt="Icon" />;
                    <h3 class="rr1">Title Goes Here</h3>
                    <p class="rr2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                </div>

            </div>
            <div class="ishoralr">
                <div>
                <img src={Icon} alt="Icon" />;
                    <h3 class="rr1">Title Goes Here</h3>
                    <p class="rr2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                </div>
                <div>
                <img src={Icon} alt="Icon" />;
                    <h3 class="rr1">Title Goes Here</h3>
                    <p class="rr2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                </div>

            </div>

        </div>

     </div>
    )
}

export default komp;