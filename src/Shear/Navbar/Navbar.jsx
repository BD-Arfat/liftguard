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
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  // Navbar link styles
  const activeLinkClass = "text-amber-400 border-b-2 border-amber-400";
  const linkClass =
    "block px-4 py-2 text-gray-200 hover:text-amber-400 hover:border-b-2 hover:border-amber-400 transition-all duration-300";

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
      className={`fixed top-0 left-0 w-full z-50 font-sans transition-all duration-300 ${
        isScrolled ? "bg-[#0F766E] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <img
            className="w-14 md:w-16 rounded-md shadow-md"
            src={logo}
            alt="LiftGuard Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg">{navLinks}</div>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-2xl text-white cursor-pointer transition-transform transform hover:scale-110"
          onClick={toggleNavbar}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center text-lg text-white transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks}
      </div>
    </nav>
  );
};

export default Navbar;
