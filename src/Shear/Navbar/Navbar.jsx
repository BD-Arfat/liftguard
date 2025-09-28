import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect - background change
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  // Close menu
  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const activeLinkClass =
    "text-amber-400 after:w-full after:bg-amber-400";
  const linkClass =
    "relative block px-4 py-2 text-white hover:text-amber-400 transition-all duration-300 after:content-[''] after:block after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full";

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-sm ${
        isScrolled ? "bg-[#0F766E]/90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-lg shadow-md border-2 border-white"
          />
          <span className="text-2xl font-bold text-white tracking-wide hidden md:block">
            LiftGuard
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg items-center">
          {navLinks}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-3xl text-white focus:outline-none transition-transform transform hover:scale-110"
          onClick={toggleNavbar}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#0F766E]/95 backdrop-blur-xl flex flex-col items-center justify-center text-2xl space-y-8 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        {navLinks}
        <button
          onClick={closeMenu}
          className="mt-6 px-8 py-3 bg-amber-400 text-[#0F766E] font-semibold rounded-full hover:bg-amber-500 transition-all"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
