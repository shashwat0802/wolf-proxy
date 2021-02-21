import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/Header.css';
import { Link, animateScroll as scroll } from 'react-scroll';
const Header = () => {
  return (
    <Navbar bg="transparent" expand="lg" className="my-md-2">
      <div className="container">
        <Navbar.Brand href="#">
          <img
            src={require('../img/logo.svg').default}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="text-white mx-md-3">
              Home
            </Nav.Link>
            <Link
              className="text-white mx-md-3 pt-2"
              activeClass="active"
              to="features"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              Features
            </Link>
            <Nav.Link href="/products" className="text-white mx-md-3">
              Plans
            </Nav.Link>
            <Link
              className="text-white mx-md-3 pt-2"
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              FAQ
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse>
          <button className="dashboard-btn btn  ml-auto text-white">
            Dashboard
          </button>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
