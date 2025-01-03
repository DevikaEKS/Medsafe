import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import necessary icons
import { CiFacebook,CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
// import "./Contactpart.scss"
function Contactpart() {
  return (
    <div className='container py-2 d-none d-md-block'>
      <div className='row '>
        <div className='col-md-4'>
        <div className='d-flex '>
        <CiFacebook className='ms-5 me-2 iconclr'/>
        <FaXTwitter className='mx-2 iconclr'/>
        <AiOutlineYoutube className='mx-2 iconclr'/>
        <CiLinkedin className='mx-2 iconclr'/>
        </div>
        </div>
        <div className='col-md-8 d-flex justify-content-end'>
          <a href="mailto:info@oviyamedsafe.com" className="text-decoration-none d-block d-md-inline mx-0 mx-md-2">
            <FontAwesomeIcon icon={faEnvelope} className="me-2" />
            info@oviyamedsafe.com
          </a>
          <a href="tel:+442033936037" className="text-decoration-none d-block d-md-inline mx-0 mx-md-2">
            <FontAwesomeIcon icon={faPhone} className="me-2 " />
            UK +44 20 3393 6037
          </a>
          <a href="tel:+914223502276" className="text-decoration-none d-block d-md-inline mx-0 mx-md-2">
            <FontAwesomeIcon icon={faPhone} className="me-2" />
            IND +91 422 3502276
          </a>
        </div>

      
         
       
      </div>
    </div>
  );
}

export default Contactpart;
