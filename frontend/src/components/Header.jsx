import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_strong-form-preview/artifacts/fl8koenp_Screenshot_20260419_204910_Word.jpg" 
              alt="Strong Form Logo" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('how-we-work')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              How We Work
            </button>
            <button
              onClick={() => scrollToSection('whs')}
              className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium"
            >
              WHS & OHS
            </button>
            <a href="tel:+61234567890" className="flex items-center text-gray-700 hover:text-red-600 transition-colors duration-200">
              <Phone className="w-4 h-4 mr-1" />
              <span className="font-medium">Contact</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-red-600 transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('how-we-work')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium text-left"
              >
                How We Work
              </button>
              <button
                onClick={() => scrollToSection('whs')}
                className="text-gray-700 hover:text-red-600 transition-colors duration-200 font-medium text-left"
              >
                WHS & OHS
              </button>
              <a href="tel:+61234567890" className="flex items-center text-gray-700 hover:text-red-600 transition-colors duration-200">
                <Phone className="w-4 h-4 mr-2" />
                <span className="font-medium">Contact</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
