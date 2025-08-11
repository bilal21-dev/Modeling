import React, { useState } from 'react';
import { Search, Facebook, Instagram } from 'lucide-react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close menu after clicking a link on mobile
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-4 bg-black/35 backdrop-blur-sm z-50">
      {/* Logo */}
      <div className="flex items-center">
        <div className="text-white text-2xl font-bold">
          Spark
          <div className="text-sm font-light">MODELING</div>
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`md:flex md:items-center md:space-x-8 text-white font-extrabold ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:static top-16 right-4 bg-black/90 md:bg-transparent p-4 md:p-0 rounded-lg md:space-y-0 space-y-2`}>
        <Link to="/" onClick={() => scrollToSection('home')} className="hover:text-cyan-300 transition-colors">Home</Link>
        <Link to="/contact" onClick={() => scrollToSection('about')} className="hover:text-cyan-300 transition-colors">About Us</Link>
        <Link to="/apply" onClick={() => scrollToSection('apply')} className="hover:text-cyan-300 transition-colors">Apply For Modeling</Link>
        <Link to="/hire" onClick={() => scrollToSection('hire')} className="hover:text-cyan-300 transition-colors">Hire Model</Link>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4 text-white hidden md:flex">
        <Search className="w-5 h-5 hover:text-cyan-300 cursor-pointer transition-colors" />
        <Facebook className="w-5 h-5 hover:text-cyan-300 cursor-pointer transition-colors" />
        <Instagram className="w-5 h-5 hover:text-cyan-300 cursor-pointer transition-colors" />
      </div>
    </nav>
  );
};

export default Navbar;