import React from 'react';
import Slider from "react-slick";
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'; // Optional: for adding quote icons
import "./Testimonial.css";
// Slick settings for the swiper
const settings = {
    dots: true,          // Show dots at the bottom
    infinite: true,      // Infinite loop
    speed: 500,          // Slide speed in ms
    autoplay: true,      // Auto swipe
    autoplaySpeed: 2000, // Delay between auto swipe (in ms)
    slidesToShow: 1,     // Only one card visible at a time
    slidesToScroll: 1,   // Scroll one card at a time
    centerMode: false,   // Disable center mode
    focusOnSelect: true, // Ensure the focus is on the selected card
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

function Testimonial() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">What Clients Say</h1>
      
      <Slider {...settings}>
        {/* Testimonial 1 */}
        <div className="testimonial-card">
          <div className="testimonial-content">
            <FaQuoteLeft size={30} color="#0D868F" />
            <p>"This company provided outstanding service and has helped us tremendously!"</p>
            <FaQuoteRight size={30} color="#0D868F" />
          </div>
          <div className="client-info">
            <h4>AVP- Medical Affairs</h4>
            <p>US-Headquartered Innovator Pharma</p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="testimonial-card">
          <div className="testimonial-content">
            <FaQuoteLeft size={30} color="#0D868F" />
            <p>"The team is extremely professional and we would definitely recommend them."</p>
            <FaQuoteRight size={30} color="#0D868F" />
          </div>
          <div className="client-info">
            <h4>Global Safety Lead</h4>
            <p>Indian multinational generic pharma</p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="testimonial-card">
          <div className="testimonial-content">
            <FaQuoteLeft size={30} color="#0D868F" />
            <p>"Amazing results! They are highly skilled and very customer-focused."</p>
            <FaQuoteRight size={30} color="#0D868F" />
          </div>
          <div className="client-info">
            <h4>Operations Head</h4>
            <p>UK-based Speciality Pharma.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Testimonial;
