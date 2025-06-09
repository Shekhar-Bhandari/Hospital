import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1f2a56] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10 text-sm">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">MEDICAL</h2>
          <p className="text-gray-300">
            Leading the Way in Medical Excellence, Trusted Care.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Important Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/appointment">Appointment</Link></li>
            <li><Link to="/doctors">Doctors</ Link></li>
            <li><Link to="/services-page">Services</Link></li>
            <li><Link to="/AboutUs">About Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <ul className="text-gray-300 space-y-2">
            <li>Call: (237) 681-812-255</li>
            <li>Email: flidineesoe@gmail.com</li>
            <li>Address: 0123 Some place</li>
            <li>Some country</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-3">Newsletter</h4>
          <form className="flex items-center bg-[#3c4a8c] p-1 rounded">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent text-white placeholder-gray-300 px-2 py-1 w-full focus:outline-none"
            />
            <button type="submit" onClick={(e) => e.preventDefault()}  className="p-2 text-blue-200 hover:text-white">
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-600 mt-12 pt-4 flex flex-col md:flex-row justify-between items-center px-4 text-gray-400 text-xs">
        <p>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-white"><FaFacebookF /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
