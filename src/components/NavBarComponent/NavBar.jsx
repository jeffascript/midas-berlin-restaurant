import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Col,
} from "reactstrap";
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavBar.css";
import logoDark from "../../img/icons/NavBrand-dark.svg";
import logoLight from "../../img/icons/NavBrand-white.svg";

const NavBar = ({ isNavSticky }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const navColorOnScroll = {
    color: "black",
  };

  return (
    <Col className={`${isNavSticky ? "nav-before" : "new-nav"}   p-0  `}>
      <Navbar
        color={isNavSticky ? "light" : "transparent"}
        light
        expand="md"
        style={isNavSticky ? { boxShadow: "0px 0px 20px 0px #000000" } : null}
      >
        <NavbarBrand onClick={scrollToTop}>
          <img src={isNavSticky ? logoDark : logoLight} alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="bg-dark" />
        <Collapse isOpen={isOpen} navbar>
          <Col className="col-md-0 offset-md-2 offset-lg-4 offset-xl-6 "></Col>
          <Nav className="mr-auto text-body" navbar>
            <NavItem>
              <NavLink
                style={isNavSticky ? { navColorOnScroll } : { color: "white" }}
              >
                {" "}
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={isNavSticky ? { navColorOnScroll } : { color: "white" }}
              >
                {" "}
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  About
                </Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                style={isNavSticky ? { navColorOnScroll } : { color: "white" }}
              >
                {" "}
                <Link
                  activeClass="active"
                  to="offer"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Offer
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={isNavSticky ? { navColorOnScroll } : { color: "white" }}
              >
                {" "}
                <Link
                  activeClass="active"
                  to="menu"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={550}
                >
                  Menu
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={isNavSticky ? { navColorOnScroll } : { color: "white" }}
              >
                {" "}
                <Link
                  activeClass="active"
                  to="info"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={600}
                >
                  Information
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={isNavSticky ? { navColorOnScroll } : { color: "white" }}
              >
                {" "}
                <Link
                  activeClass="active"
                  to="gallery"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={650}
                >
                  Gallery
                </Link>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                style={isNavSticky ? { navColorOnScroll } : { color: "white" }}
              >
                {" "}
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                >
                  Contact
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Col>
  );
  // return (
  //     <div className="mainmenu-area" id="mainmenu-area">
  //     <div className="mainmenu-area-bg"></div>
  //     <nav className="navbar">
  //     <div className="container">
  //     <div className="navbar-header">
  //     <button className="collapsed navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-example-js-navbar-scrollspy">
  //     <span className="sr-only">Toggle navigation</span>
  //     <span className="icon-bar"></span>
  //     <span className="icon-bar"></span>
  //     <span className="icon-bar"></span>
  //     </button>
  //     <a href="#home" className="navbar-brand"><img src="img/main_logo_black.png" alt="logo"/></a>
  //     <a href="#home" className="navbar-brand white"><img src="img/main_logo.png" alt="logo"/></a>
  //     </div>
  //     <div className="collapse navbar-collapse bs-example-js-navbar-scrollspy">
  //     <div className="search-form-area">
  //     <div className="search-form-overlay"></div>
  //     <a className="search-form-trigger" href="#search-form">Search<span></span></a>
  //     <div id="search-form" className="search-form">
  //     <form>
  //     <input type="search" placeholder="Search..."/>
  //     </form>
  //     </div>
  //     </div>
  //     <ul id="nav" className="nav navbar-nav">
  //     <li className="active"><a href="#home">Home</a> </li>
  //     <li><a href="#about">about us</a></li>
  //     <li><a href="#promotion">Offer</a></li>
  //     <li><a href="#menu">Menu</a></li>
  //     <li><a href="#team">team</a></li>
  //     <li><a href="#blog">blog</a></li>
  //     <li><a href="#gallery">Gallery</a></li>
  //     <li><a href="#contact">Contact</a></li>
  //     </ul>
  //     </div>
  //     </div>
  //     </nav>
  //     </div>
  // );
};

export default NavBar;
