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
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ [<Contactpart/>,<Menubar/>,<Aboutpage/>,<OurServices/>,<Philosophy/>,<Testimonial/>,<Footer/>]}/>
  <Route path='/tab' element={<Tablet/>}/>
    </Routes>
   
 
   

    </BrowserRouter>

    </>
  )
}

export default App
