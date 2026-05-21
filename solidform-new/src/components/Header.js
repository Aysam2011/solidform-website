import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex flex-col">
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-blue-600">SOLID</span>
              <span className="text-gray-900"> FORM</span>
            </div>
            <div className="text-xs text-gray-600 tracking-wide">PTY LTD</div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('how-we-work')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              How We Work
            </button>
            <button onClick={() => scrollToSection('safety')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Safety
            </button>
            <a href="tel:+610431017079" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4 mr-1" />
              <span className="font-medium">Contact</span>
            </a>
          </nav>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-blue-600">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-blue-600">About</button>
              <button onClick={() => scrollToSection('how-we-work')} className="text-left text-gray-700 hover:text-blue-600">How We Work</button>
              <button onClick={() => scrollToSection('safety')} className="text-left text-gray-700 hover:text-blue-600">Safety</button>
              <a href="tel:+610431017079" className="text-left text-gray-700 hover:text-blue-600">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
