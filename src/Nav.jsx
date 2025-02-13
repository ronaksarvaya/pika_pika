import React, { useState } from 'react';

const Nav = () => {
  // State to see menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Brand</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Services</a>
          <a href="#" className="text-white">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white focus:outline-none cursor-pointer"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu (Conditionally Rendered) */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col space-y-2 p-4 bg-blue-700 w-full items-center text-center`}>
        <a href="#" className="text-white block">Home</a>
        <a href="#" className="text-white block">About</a>
        <a href="#" className="text-white block">Services</a>
        <a href="#" className="text-white block">Contact</a>
      </div>
    </nav>
  );
};

export default Nav;
