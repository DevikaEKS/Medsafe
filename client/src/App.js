import AboutFounder from "./AboutFounder/AboutFounder";
import "./App.css";
import Contactpart from './Contactpart/Contactpart';
import Menubar from './Landingpage/Menubar/Menubar';
import Whatsapp from './Landingpage/Whatsapp/Whatsapp';
import Footer from './Landingpage/Footer/Footer';
import SwiperCard3D from './Landingpage/Videopart/SwiperCard3D';
import Banner from './Banner/Banner';
import Aboutpage from './Aboutpage/Aboutpage';
import OurServices from './Landingpage/Our Services/OurServices';
import Testimonial from './Landingpage/Testimonial/Testimonial';
import Philosophy from './Landingpage/Philosophy/Philosophy';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blogbanner from './Blog/Blogbanner/Blogbanner';
import BoardMembers from './AboutFounder/BoardMembers';
import Founder from './AboutFounder/Founder';
import Contact from './Contact/Contact';
import Maparea from './Contact/Maparea';
import Sitemap from './Sitemap/Sitemap';
import AddVideo from './Blog/Addblog/AddVideo';
import Careers from './Careers/Careers';
import Careersdata from './Careers/Careersdat';
import DrugSafety from './Services/DrugSafety';
import Pharmacovigilance from './Services/Pharmacovigilance';
import Partnerships from "./Services/Partnerships";
import Updateblog from './Blog/Updateblog/Updateblog';
import Addblog from './Blog/Addblog/Addblog';
import Adminblog from './Blog/Adminblog/Adminblog';
import Adminview from './Blog/Adminview/Adminview';
import Privact from './Privacy/Privact';
import Forgotpassword from './Forgotpassword/Forgotpassword';
import Downloads from './Downloads/Downloads';
import BlogsUserView from './Blog/Blogbanner/BlogsUserView';
import Admindata from './Admindata/Admindata';
import Search from './Landingpage/Menubar/Search';
import Login from './Blog/Login/Login';
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <div>
      <HelmetProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={ [<Contactpart/>,<Menubar/>,<Banner/>,<Aboutpage/>,<Philosophy/>,<OurServices/>,<Testimonial/>,<Blogbanner/>,<SwiperCard3D />,<Footer/>,<Whatsapp/>]}/>
        <Route path='/services' element={[<Contactpart />,<Menubar />,<Footer />,<Whatsapp/>]}/> 
        <Route path='/about-us' element={[<Contactpart/>,<Menubar/>,<AboutFounder/>,<Footer/>,<Whatsapp/>]}/> 
        <Route path='/our-founder' element={[<Contactpart/>,<Menubar/>,<Founder/>,<Footer/>,<Whatsapp/>]}/> 
        <Route path='/our-board' element={[<Contactpart/>,<Menubar/>,<BoardMembers/>,<Footer/>,<Whatsapp/>]}/> 
        <Route path='/contact' element={[<Contactpart/>,<Menubar/>,<Contact/>,<Maparea/>,<Footer/>,<Whatsapp/>]}/>
        <Route path='/medsafelogin' element={[<Contactpart/>,<Menubar/>,<Login/>,<Footer/>]}/>
       <Route path='/drug-safety-services' element={[<Contactpart/>,<Menubar/>,<DrugSafety/>,<Footer/>,<Whatsapp/>]}/>
      <Route path='/pharmacovigilance-consulting' element={[<Contactpart/>,<Menubar/>,<Pharmacovigilance/>,<Footer/>,<Whatsapp/>]}/>
      <Route path='/strategic-partnerships' element={[<Contactpart/>,<Menubar/>,<Partnerships/>,<Footer/>,<Whatsapp/>]}/>
      <Route path='/careers' element={[<Contactpart/>,<Menubar/>,<Careers/>,<Careersdata/>,<Footer/>,<Whatsapp/>]} />
      <Route path='/testww' element={<Search />} />
      <Route path="/updateblog/:id" element={<Updateblog/>}/>
      <Route path='/adminview/addblog' element={<Addblog/>}/>
      <Route path='/adminblog' element={<Adminblog/>}/>
      <Route path='/adminview' element={[<Contactpart/>,<Menubar/>,<Adminblog />]}/>
      <Route path="/disclaimer-and-privacy-policy" element={[<Contactpart/>,<Menubar/>,<Privact/>,<Footer/>,<Whatsapp/>]}/>
      <Route path='/forgot-password' element={[<Contactpart/>,<Menubar/>,<Forgotpassword/>,<Footer/>]}/>
      <Route path='/news' element={[<Contactpart/>,<Menubar/>,<BlogsUserView/>,<Footer/>,<Whatsapp/>]}/>
      <Route path='/news/:id' element={[<Contactpart />,<Menubar />,<Adminview/>,<Footer/>,<Whatsapp />]} />
      <Route path="/downloads" element={[<Contactpart/>,<Menubar/>,<Downloads/>,<Footer/>,<Whatsapp/>]}/>
      <Route path="/admin" element={<Admindata/>}/>
      <Route path="/sitemap"  element={[<Contactpart/>,<Menubar/>,<Sitemap/>,<Footer/>,<Whatsapp/>]}/>
      <Route path="/adminview/addvideo" element={<AddVideo />} />
        </Routes>
      </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;
   