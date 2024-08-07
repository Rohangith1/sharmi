import React, { useRef } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
 const handleLinkClick = () => {
   if (navRef.current.classList.contains("responsive_nav")) {
     showNavbar();
   }
 };
  return (
    <header>
      <h3>Logo</h3>
      <nav ref={navRef}>
        <NavLink className="na" onClick={handleLinkClick} to="/">
          Home
        </NavLink>
        <NavLink className="na" onClick={handleLinkClick} to="/about">
          About Me
        </NavLink>
        <NavLink className="na" onClick={handleLinkClick} to="/blog">
          Blog
        </NavLink>

        <NavLink className="na" onClick={handleLinkClick} to="/contact">
          Contact Me
        </NavLink>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBarsStaggered />
      </button>
    </header>
  );
};

export default Navbar;
