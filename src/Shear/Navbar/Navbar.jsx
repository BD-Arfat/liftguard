import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to add shadow and background color
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  // Close the mobile menu
  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  // Navbar link styles
  const activeLinkClass = "text-yellow-400 border-b-2 border-yellow-400";
  const linkClass =
    "block px-4 py-2 text-slate-300 hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 transition-all duration-300";

  // Links for both desktop and mobile
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeLinkClass : ""}`
        }
        onClick={closeMenu}
      >
        Home
      </NavLink>
      <NavLink
        to="/Overview"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeLinkClass : ""}`
        }
        onClick={closeMenu}
      >
        About
      </NavLink>
      <NavLink
        to="/Services"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeLinkClass : ""}`
        }
        onClick={closeMenu}
      >
        Services
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `${linkClass} ${isActive ? activeLinkClass : ""}`
        }
        onClick={closeMenu}
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 font-oswald transition-all duration-300 ${
        isScrolled ? "bg-gray-800 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <Link to="/">
            <img
              className="w-14 md:w-16 rounded-md shadow-lg"
              src={logo}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">{navLinks}</div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl text-white cursor-pointer"
          onClick={toggleNavbar}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 z-40">
          <div className="flex flex-col space-y-4 items-center justify-center h-full text-lg text-white">
            {navLinks}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
