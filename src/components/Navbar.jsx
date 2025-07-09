import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaSearch, FaUser, FaPlus, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import companyLogo from '../assets/logo.jpg';

// NavLink with Hover Animation
const AnimatedNavLink = ({ to, children }) => {
    const activeLinkStyle = { color: '#B8860B' }; // brand-gold
    return (
        <motion.div className="relative">
            <NavLink
                to={to}
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
            >
                {children}
            </NavLink>
            <motion.div className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-brand-gold" initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.3 }} style={{ transformOrigin: 'center' }} />
        </motion.div>
    )
}

AnimatedNavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Simplified Navigation Links
  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Properties', to: '/properties' },
    { label: 'Service', to: '/services' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <nav className="bg shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img src={companyLogo} alt="StanDav Group Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="text-gray-600 hover:text-brand-gold transition-colors duration-300 font-medium">
                <AnimatedNavLink to={link.to}>{link.label}</AnimatedNavLink>
              </div>
            ))}
          </div>

          {/* Right side icons and button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-brand-gold focus:outline-none">
              <FaSearch className="h-5 w-5" />
            </button>
            <button className="text-gray-600 hover:text-brand-gold focus:outline-none">
              <FaUser className="h-5 w-5" />
            </button>
            <Link
              to="/add-listing"
              className="flex items-center space-x-2 bg-brand-gold text-white px-4 py-2 rounded-md hover:opacity-90 transition duration-300"
            >
              <FaPlus className="h-4 w-4" />
              <span>Add Listing</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-brand-gold focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white py-4"
          >
            <div className="px-8 space-y-4">
              {navLinks.map((link, index) => (
                <div key={index}>
                    <NavLink
                      to={link.to}
                      className="block text-gray-600 hover:text-brand-gold"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-4 flex justify-center">
                 <Link
                    to="/add-listing"
                    className="flex items-center space-x-2 bg-brand-gold text-white px-4 py-2 rounded-md hover:opacity-90 transition duration-300 w-full text-center justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FaPlus className="h-4 w-4" />
                    <span>Add Listing</span>
                  </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
