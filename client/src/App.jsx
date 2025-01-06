import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

import 'bootstrap/dist/css/bootstrap.min.css';


import Footer from './Landingpage/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contactpart from './Contactpart/Contactpart';

import Videopart from './Landingpage/Videopart/Videopart';
import Aboutpage from './Aboutpage/Aboutpage';
import OurServices from './Landingpage/Our Services/OurServices';
import Testimonial from './Landingpage/Testimonial/Testimonial';
import Philosophy from './Landingpage/Philosophy/Philosophy';
import Tablet from './Tablet/Tablet';
import AboutFounder from './AboutFounder/AboutFounder';
import BoardMembers from './AboutFounder/BoardMembers';
import Founder from './AboutFounder/Founder';
import Contact from './Contact/Contact';
import Maparea from './Contact/Maparea';
import Login from './Blog/Login/Login';
import Blogbanner from './Blog/Blogbanner/Blogbanner';
import Whatsapp from './Landingpage/Whatsapp/Whatsapp';
import Careers from './Careers/Careers';
import Careersdata from './Careers/Careersdat';


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ [<Contactpart/>,<Aboutpage/>,<OurServices/>,<Testimonial/>,<Blogbanner/>,<Footer/>,<Whatsapp/>]}/>
      <Route path='/services' element={[<Contactpart />,<Footer />,<Whatsapp/>]}/>
      <Route path='/tab' element={<Tablet/>}/>
      <Route path='/aboutfounder' element={[<Contactpart/>,<AboutFounder/>,<Footer/>,<Whatsapp/>]}/>
      <Route path='/founder' element={[<Contactpart/>,<Founder/>,<Footer/>,<Whatsapp/>]}/>
      <Route path='/boardmembers' element={[<Contactpart/>,<BoardMembers/>,<Footer/>,<Whatsapp/>]}/>
      <Route path='/contact' element={[<Contactpart/>,<Contact/>,<Maparea/>,<Footer/>,<Whatsapp/>]}/>
      <Route path='/medsafelogin' element={<Login/>}/>
 <Route path='/careers' element={[<Contactpart/>,<Careers/>,<Careersdata/>,<Footer/>,<Whatsapp/>]} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
