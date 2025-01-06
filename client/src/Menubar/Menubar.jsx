import React, { useState } from 'react'
import LOGO from '../assets/logo.png'
import Navbar from './Navbar'
import MobileNav from './MobileNav';



const Menubar = () => {

  const [hamToggle, setHamToggle] = useState(false);
  return (
    <div>
      {/* Desktop View */}
      <div
        className='d-none d-xl-flex'
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: "linear-gradient(to right, var(--navgradientfrom), var(--navgradientto))"
        }}
      >
        <div>
          <img src={LOGO} alt="Logo" />
        </div>
        
        {/* Navbar */}
        <Navbar />
        
        {/* Search Bar */}
        <div className="d-flex align-items-center" style={{paddingRight: '4rem'}}>
          <div
            className="input-group"
            style={{
              maxWidth: '300px',
              borderRadius: '100px',
              overflow: 'hidden', // Ensures child elements respect borderRadius
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
            }}
          >
            <span className="input-group-text bg-white border-0" style={{color: 'var(--heading)'}}>
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-0"
              placeholder="Search"
              style={{
                borderRadius: '0', // Ensures the input field does not override parent radius
                outline: 'none', // Removes focus outline
                boxShadow: 'none', // Removes any shadow applied during focus
              }}
            />
          </div>
        </div>

      </div>

     {/* Mobile View */}
     <div
        className="d-flex d-xl-none align-items-center"
        style={{
          justifyContent: 'space-between',
          padding: '',
          background: "linear-gradient(to right, var(--navgradientfrom), var(--navgradientto))",
        }}
      >
        {/* Logo */}
        <div>
          <img src={LOGO} alt="Logo" style={{ height: '70px' }} />
        </div>

        {/* Hamburger Menu */}
        <div
          className="d-flex align-items-center"
          onClick={() => setHamToggle(!hamToggle)}
        >
          <i
            className="bi bi-list"
            style={{
              fontSize: '45px',
              color: 'white',
              paddingRight: '1rem',
            }}
          ></i>
        </div>
      </div>

      {/* Dropdown Container with Smooth Animation */}
      <div
        style={{
          maxHeight: hamToggle ? '300px' : '0', // Dynamic height
          overflow: 'hidden', // Prevent content overflow
          background: '#fff',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          transition: 'max-height 0.5s ease-in-out', // Smooth transition
          alignItems: 'right',
          
        }}
      >
        <MobileNav />

        {/* Search Bar */}
        <div className="d-flex align-items-center" style={{paddingLeft: '3rem', paddingBottom: '3rem'}}>
          <div
            className="input-group"
            style={{
              maxWidth: '300px',
              borderRadius: '100px',
              overflow: 'hidden', // Ensures child elements respect borderRadius
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
            }}
          >
            <span className="input-group-text bg-white border-0" style={{color: 'var(--heading)'}}>
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-0"
              placeholder="Search"
              style={{
                borderRadius: '0', // Ensures the input field does not override parent radius
                outline: 'none', // Removes focus outline
                boxShadow: 'none', // Removes any shadow applied during focus
              }}
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Menubar

// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import InputGroup from 'react-bootstrap/InputGroup';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';
// import logo from "../assets/logo.png";

// function Menubar() {
//   return (
//     <Navbar expand="lg" className="sticky-top-0" style={{zIndex: "1000"}}>
//       {/* <Container> */}
//         <Navbar.Brand href="#home">
//           <img src={logo} alt="Logo" />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">HOME</Nav.Link>
//             <NavDropdown title="WHO WE ARE" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">Our Founder</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Our Board</NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title="SERVICES" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Drug Safety Services</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">Pharmacovigilance Consulting</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Strategic Partnerships</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#link">NEWS</Nav.Link>
//             <Nav.Link href="#link">DOWNLOADS</Nav.Link>
//             <Nav.Link href="#link">CAREERS</Nav.Link>
//             <Nav.Link href="#link">CONTACT</Nav.Link>
//             <Nav.Link href="#link">LOGIN</Nav.Link>
//           </Nav>
//           <InputGroup className="d-flex">
//             <InputGroup.Text id="search-addon">
//               <i className="bi bi-search"></i>
//             </InputGroup.Text>
//             <FormControl
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//               aria-describedby="search-addon"
//             />
//           </InputGroup>
//         </Navbar.Collapse>
//       {/* </Container> */}
//     </Navbar>
//   );
// }

// export default Menubar;
