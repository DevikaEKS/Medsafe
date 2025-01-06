import React from 'react'
import LOGO from '../assets/logo.png'
const Menubar = () => {
  return (
    <div>
      {/* Desktop View */}
      <div className='' style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', background:"linear-gradient(to right, var(--navgradientfrom), var(--navgradientto))"}}>
        <div>
          <img
            src={LOGO}
            alt="Logo"
          />  
        </div>
          <Navbar />
        <div>
          
        </div>

      </div>
      {/* Mobile View */}
      <div>

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
