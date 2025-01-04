import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

import 'bootstrap/dist/css/bootstrap.min.css';


import Footer from './Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contactpart from './Contactpart/Contactpart';
import Menubar from './Menubar/Menubar';
import Videopart from './Videopart/Videopart';
import Aboutpage from './Aboutpage/Aboutpage';
import OurServices from './Our Services/OurServices';
import Testimonial from './Testimonial/Testimonial';
import Philosophy from './Philosophy/Philosophy';
import Tablet from './Tablet/Tablet';
import AboutFounder from './AboutFounder/AboutFounder';
import BoardMembers from './AboutFounder/BoardMembers';
import Founder from './AboutFounder/Founder';
import Contact from './Contact/Contact';
import Maparea from './Contact/Maparea';

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ [<Contactpart/>,<Menubar/>,<Aboutpage/>,<OurServices/>,<Testimonial/>,<Footer/>]}/>
      <Route path='/services' element={[<Contactpart />,<Menubar />,<Footer />]}/>
      <Route path='/tab' element={<Tablet/>}/>
      <Route path='/aboutfounder' element={[<Contactpart/>,<Menubar/>,<AboutFounder/>,<Footer/>]}/>
      <Route path='/founder' element={[<Contactpart/>,<Menubar/>,<Founder/>,<Footer/>]}/>
      <Route path='/boardmembers' element={[<Contactpart/>,<Menubar/>,<BoardMembers/>,<Footer/>]}/>
      <Route path='/contact' element={[<Contactpart/>,<Menubar/>,<Contact/>,<Maparea/>,<Footer/>]}/>
    </Routes>
   
 
   

    </BrowserRouter>

    </>
  )
}

export default App
