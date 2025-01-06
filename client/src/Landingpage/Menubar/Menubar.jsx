// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import logo from "../Asset/oviyalogo.png";
// function Menubar() {
//   return (
//     <Navbar expand="lg" className="sticky-top">
//       <Container>
//         <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
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
           
// <Nav.Link href="#link">LOGIN</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Menubar;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo from "../../assets/oviyalogo.png";
import { Link } from 'react-router-dom';

function Menubar() {
  return (
    <Navbar expand="lg" className="sticky-top-0">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <NavDropdown title="WHO WE ARE" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/founder">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Our Founder</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Our Board</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="SERVICES" id="basic-nav-dropdown">
         
              <NavDropdown.Item as={Link} to="/aboutfounder">Drug Safety Services</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.2">Pharmacovigilance Consulting</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Strategic Partnerships</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">NEWS</Nav.Link>
            <Nav.Link href="#link">DOWNLOADS</Nav.Link>
            <Nav.Link href="#link">CAREERS</Nav.Link>
            <Nav.Link href="#link">CONTACT</Nav.Link>
            <Nav.Link href="#link">LOGIN</Nav.Link>
           
          </Nav>
          <InputGroup className="d-flex">
            <InputGroup.Text id="search-addon">
              <i className="bi bi-search"></i>
            </InputGroup.Text>
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
          </InputGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;
