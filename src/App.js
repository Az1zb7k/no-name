
import React from 'react';
import ReactDOM from "react-dom/client";

import './App.css'
import Selecon from './Componennts/Selecon';
import Komp from './Componennts/komp'
import Novbar from './Componennts/Novbar';
import About from './Componennts/About';
import {   Route, Routes, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Instagarm from './Componennts/imges/insta.png'
import Twiter from './Componennts/imges/Twiter.png'
import Face from './Componennts/imges/Facebok.png'
import Youtube from './Componennts/imges/Youtube.png'
import In from './Componennts/imges/In.png'

export default function  App(){
  return(
     <>
      <div className="navbar">
       <div className="link">
       <Link to="/" className='abg'  > Home</Link>
       <Link to="/about" className='abg'  >  About</Link>
       <Link to="/contact" className='abg' >Contact </Link>
       </div>
       <div className="logo1">Landie</div>
        <Link to="/selecon" > <div className="button">Buy Now</div></Link>
       </div>
  
        <Routes>
          <Route path="/" element={<Novbar />}/>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Komp />} />
          <Route path="selecon" element={<Selecon />} />
        </Routes>
        <div className='Ajali'>
      <div className='lan'>
          <p className='see1'>©2020 Yourcompany</p>
          <div className="logo11">Landie</div>
          <div className="button55"><a className='button55' href='/selecon'>Purchase Now</a></div>
         

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
     </div>
      </>


      

  )
  }




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

