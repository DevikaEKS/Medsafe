import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faSquareXTwitter,  faYoutube } from '@fortawesome/free-brands-svg-icons';
import { CiFacebook,CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import "./Footer.css"
function Footer() {
  const now=new Date();
const years=now.getFullYear()
  return (
    <div className='container-fluid footerbg'>
        <div className='row p-5'>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <h4 className='footerhead py-3'>Location</h4>
              <h5>Oviya MedSafe Pvt Ltd</h5>
              <p className='pe-4'>2nd Floor, KTVR Gardens
220a-3, Marudha Konar Road Velandipalayam
Coimbatore – 641 025</p>
<h5>Oviya MedSafe UK Ltd</h5>
<p>Suite LP25393
20-22, Wenlock Road
London, N1 7GU
United Kingdom</p>
              </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <h5 className='footerhead py-3'>Explore</h5>
              <Link to={"/"} className='text-decoration-none text-light'><p>Home</p></Link>
              <Link to={"/"} className='text-decoration-none text-light'><p>Who we are</p></Link>
              <Link className='text-decoration-none text-light'><p>Services</p></Link>
              <Link className='text-decoration-none text-light'><p>News</p></Link>
              <Link className='text-decoration-none text-light'><p>Downloads</p></Link>
              <Link className='text-decoration-none text-light'><p>Careers</p></Link>
              <Link className='text-decoration-none text-light'><p>Contact</p></Link>
              <Link className='text-decoration-none text-light'><p>Disclaimer & Privacy Policy</p></Link>
              </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <h4 className='footerhead py-3'>Services</h4>
              <p>Drug Safety Services</p>
              <p>Pharmacovigilance Consulting</p>
              <p>Strategic Partnerships</p>
              </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <div className='d-flex flex-column'>
              <h4 className='footerhead py-3'>Subscribe Here</h4>
              <input type='email' className='my-1 py-3 border-0' placeholder='Email Address'/><br/>
              <button className='border-0 subscribebtn py-3'>SUBSCRIBE</button>
              </div>
              
               <div className='d-flex social-links py-5'>
             <a href=''><CiFacebook className='icon'/></a>
                     <a href='' > <FaXTwitter className='icon'/></a>
                     <a href=''><AiOutlineYoutube/></a>
             <a href=''><CiLinkedin/></a>
              </div>

              </div>  
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center'>
        <p>Copyright © {years} Oviya MedSafe. All Rights Reserved.</p>
        <a href='https://www.kggeniuslabs.com/' className='text-decoration-none'><p className='text-light '>Powered by KG Genius Labs</p></a>
        </div>
    </div>
  )
}

export default Footer