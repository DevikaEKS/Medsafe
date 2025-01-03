import React from 'react'
import DynamicServices from './services/DynamicServices'
import AccordianSection from './services/AccordianSection'
import StrategySection from './services/StrategySection';
import Contactpart from './Contactpart/Contactpart';
import Menubar from './Menubar/Menubar';
import Footer from './Footer/Footer';

export const Services = () => {

  const id = 1;

  return (
    <div>
        <Contactpart />
        <Menubar />
        <DynamicServices />
        {id ===1 || id === 2 ? <AccordianSection />: <StrategySection />}
        <Footer />
    </div>
  )
}
