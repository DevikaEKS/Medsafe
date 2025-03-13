import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css"; // Import the CSS file
import { FaQuoteLeft } from 'react-icons/fa';
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1, // Ensures only one slide is visible at a time
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
  };

  return (
    <div className="testimonial-container">
        <h1 className="mb-5 subhead2 text-light text-center">What Clients Say</h1>
      <div className="slick-content-area">
        <Slider {...settings}>
          <div className="testimonial-card">
          <div className="quote-container pb-3">
                <FaQuoteLeft size={30} color="#0D868F" />
              </div>
            <p className="testimonial-text">
            The hard work and support of Oviya MedSafe employees is appreciated and they have been flexible in taking on roles as per the demands of the project, while remaining amiable and enthusiastic throughout.
            </p>
            <h4 className="testimonial-client">AVP- Medical Affairs</h4>
            <p className="testimonial-company">
              US-Headquartered Innovator Pharma
            </p>
          </div>

          <div className="testimonial-card">
          <div className="quote-container pb-3">
                <FaQuoteLeft size={30} color="#0D868F" />
              </div>
            <p className="testimonial-text">
            It has indeed been a pleasure working with Oviya MedSafe! Timely execution and great quality work! We are happy that our trust paid off well. We would really recommend Oviya MedSafe for a cost effective and quality work in the field of Pharmacovigilance!
            </p>
            <h4 className="testimonial-client">Global Safety Lead</h4>
            <p className="testimonial-company">
              Indian multinational generic pharma
            </p>
          </div>

          <div className="testimonial-card">
          <div className="quote-container pb-3">
                <FaQuoteLeft size={30} color="#0D868F" />
              </div>
            <p className="testimonial-text">
            Oviya MedSafe has a deep understanding of global PV regulatory requirements throughout the lifecycle of a product. As a new UK MAH, we are a proud beneficiary of their end-to-end PV Support.
            </p>
            <h4 className="testimonial-client">Director of Pharmacovigilance</h4>
            <p className="testimonial-company">European Pharma Company</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
