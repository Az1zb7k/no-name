
import React from 'react';
import logo from './imges/logo.png'
import Icon from "./imges/Icon.png"
import Qiz from './imges/qiz.png'
import Barg from './imges/Barg.png'
import Telefon from './imges/Telefon.png'
import Jojo from './imges/Jojo.png'
import Tugadi from './imges/Tugadi.png'
// import Instagarm from './imges/insta.png'
// import Twiter from './imges/Twiter.png'
// import Face from './imges/Facebok.png'
// import Youtube from './imges/Youtube.png'
// import In from './imges/In.png'



import './Novbar.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function Novbar() {
  return (
    <>
       <div className="wrapper">
      {/* <div className="navbar">
        <div className="link">
          <a className='abg' href="">Home</a>
          <a className='abg'  href="">About</a>
          <a className='abg'  href="">Contact</a>
        </div>

        <div className="logo1">Landie</div>
        <div className="button">Buy Now</div>
      </div> */}
      <div className="main">
        <h1 className="title">
          Introduce Your Product Quickly & Effectively
        </h1>
        <br />
        <br/>
        <p className="title1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus 
          <br/>
          <br/>
           mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <br/>
        <br/>
        <div className='Tugma'>
        <div className="button1">Purchase Ul Kit</div>
        <div className="button2">Learn More</div>
        </div>
        
        <img className='logo' src={logo} alt="" />
      </div>

    <div className='main2'>
      <h1 className="title">
      Light, Fast & Powerful
        </h1>
        <br />
        <br/>
        <p className="title1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus 
          <br/>
          <br/>
           mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
        <img className='qiz' src={Qiz} alt="qiz" />
        <div className='Belgi'>
            <div className='belgi1'>
            <img src={Icon} alt="" />
                    <h3 class="Icon-text">
                        Title Goes Here
                    </h3>
                    <p class="Icon-text-1">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    </p>

            </div>
            <div className='belgi2'>
            <img src={Icon} alt="" />
            
                    <h3 class="Icon-text">
                        Title Goes Here
                    </h3>
                    <p class="Icon-text-1">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                    </p>

            </div>

        </div>
     

          
        

      </div>
      <div className='Dbavka'>
       <div>
       <img className='Barg' src={Barg} alt="Barg" />
       </div>
       <div>
       <h1 className="title">
      Light, Fast & Powerful
        </h1>
        <br />
        <br/>
        <p className="title1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus 
          <br/>
          <br/>
           mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
       </div>


      </div>
      <div className='Dbavka'>
      <div>
       <img className='Barg' src={Telefon} alt="telefon" />
       </div>
       <div>
       <h1 className="title">
      Light, Fast & Powerful
        </h1>
        <br />
        <br/>
        <p className="title1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus 
          <br/>
          <br/>
           mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
       </div>
      

      </div>
      <div className='Dbavka'>
      <div>
       <img className='Barg' src={Jojo} alt="Jojo" />
       </div>
       <div>
       <h1 className="title">
      Light, Fast & Powerful
        </h1>
        <br />
        <br/>
        <p className="title1">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus 
          <br/>
          <br/>
           mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
       </div>

      </div>

       

      </div>
      <div className='Tugatish'>
    
    <img className='Tugadi' src={Tugadi} alt="" />
     <div className='Textes'>
     <h1 className='hedline'>A Price To Suit Everyone</h1>
     <br/>
     <br/>
     <p className='text36'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
     <h1 className='chena'>$40</h1>
     <p className='ss1'>UI Design Kit</p>
     <br/>
     <br/>
     <p className='see1'>See, One price. Simple.</p>
     <p className="button44">Purchase Now</p>
     </div>

    </div>

    {/* <div className='Ajali'>
      <div className='lan'>
          <p className='see1'>©2020 Yourcompany</p>
          <div className="logo11">Landie</div>
          <div className="button55">Purchase Now</div>
         

      </div>
      <hr/>
      <div className='Belgilar'>
      <div className="link">
        <a className='abg' href="/">Home</a>
        <a className='abg'  href="About">About</a>
        <a className='abg'  href="Contact">Contact</a>
      </div>
      <div className='Linklar'>
      <a href="*"> <img className='B' src={Face} alt="telefon" /></a>
        <a href="*"> <img className='B' src={In} alt="telefon" /></a>
        <a href="*"> <img className='B' src={Twiter} alt="telefon" /></a>
        <a href="*"> <img className='B' src={Youtube} alt="telefon" /></a>
        <a href="*"> <img className='B' src={Instagarm} alt="telefon" /></a>
          

      </div>

      </div>

    </div> */}

   

  

    </>

  );
}

export default Novbar;
