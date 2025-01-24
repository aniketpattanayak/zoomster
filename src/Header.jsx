import React from 'react';


const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-xl font-bold">Zoomster Hub</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#company-umbrella" className="hover:text-gray-400">Company Umbrella</a></li>
          <li><a href="#services" className="hover:text-gray-400">Our Service</a></li>
          <li><a href="#team" className="hover:text-gray-400">Our Team</a></li>
          <li><a href="#about-director" className="hover:text-gray-400">About Director</a></li>
          <li><a href="#contact-us" className="hover:text-gray-400">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};



export default Header;
