import React from 'react';
import './Philosophy.css';


function Philosophy() {
  return (
    <div className="container-fluid">
      <div className="row philosophybg text-light px-4 text-center">
        <h1 className="text-center py-2 philosophyhead">Philosophy</h1>
        <div className="col-sm-12 col-md-4 my-2">
          <div className="card bg-light p-3 philosophy-card">
            <div className="d-flex justify-content-center">
              {/* <img src={bulbimg} className="philosophyimg" alt="Vision Icon" /> */}
            </div>
            <h2 className="text-center mt-3">Vision</h2>
            <p className="text-justify">
              To become a leader in pharmacovigilance consulting services by
              strategically partnering with global pharmaceutical companies.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 my-2">
          <div className="card bg-light p-3 philosophy-card">
            <div className="d-flex justify-content-center">
              {/* <img src={bulbimg} className="philosophyimg" alt="Mission Icon" /> */}
            </div>
            <h2 className="text-center mt-3">Mission</h2>
            <p className="text-justify">
              To inculcate a pharmacovigilant culture and proactively support
              the growth of drug safety practices across the globe. We will
              achieve this by integrating our expertise in pharmacovigilance
              with our medical experience, ensuring compliance to the dynamic
              regulatory frameworks and deploying the most appropriate
              technology.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 my-2">
          <div className="card bg-light p-3 philosophy-card">
            <div className="d-flex justify-content-center">
              {/* <img src={bulbimg} className="philosophyimg" alt="Values Icon" /> */}
            </div>
            <h2 className="text-center mt-3">Values</h2>
            <ul className="text-justify">
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
