import React from 'react';
import './Philosophy.css';
import bulbimg from '../assets/bulb.png';

function Philosophy() {
  return (
    <div className="container-fluid">
      <div className="row philosophybg text-light px-4 text-center">
        <h1 className="text-center py-2">Philosophy</h1>
        <div className="col-sm-12 col-md-4 d-flex align-items-end">
          <div className="card bg-light philosophy-card p-2">
            <div className="d-flex justify-content-center">
              <img src={bulbimg} className="philosophyimg" />
            </div>
            <h1 className="text-center">Vision</h1>
            <p className="text-start">
              To become a leader in pharmacovigilance consulting services by
              strategically partnering with global pharmaceutical companies.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 d-flex align-items-end">
          <div className="card bg-light philosophy-card p-2">
            <div className="d-flex justify-content-center">
              <img src={bulbimg} className="philosophyimg" />
            </div>
            <h1 className="text-center">Mission</h1>
            <p className="text-start">
              To inculcate a pharmacovigilant culture and proactively support
              the growth of drug safety practices across the globe. We will
              achieve this by integrating our expertise in pharmacovigilance
              with our medical experience, ensuring compliance to the dynamic
              regulatory frameworks and deploying the most appropriate
              technology.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 d-flex align-items-end">
          <div className="card bg-light philosophy-card p-2">
            <div className="d-flex justify-content-center">
              <img src={bulbimg} className="philosophyimg" />
            </div>
            <h1 className="text-center">Values</h1>
            <ul>
              <li>Passion for Pharmacovigilance</li>
              <li>Continuous learning to empower clients</li>
              <li>Perpetual capability building</li>
              <li>Deep-rooted business integrity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Philosophy;
