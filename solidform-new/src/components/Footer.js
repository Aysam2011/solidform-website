import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex flex-col mb-4">
              <div className="text-2xl font-bold">
                <span className="text-blue-400">SOLID</span>
                <span className="text-white"> FORM</span>
              </div>
              <div className="text-xs text-gray-400">PTY LTD</div>
            </div>
            <p className="text-gray-400 mb-6">
              Specialist formwork contractor operating across NSW, ACT and Victoria. Building trust through quality work.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-blue-400 transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-blue-400 transition-colors">About</button></li>
              <li><button onClick={() => scrollToSection('how-we-work')} className="text-gray-400 hover:text-blue-400 transition-colors">How We Work</button></li>
              <li><button onClick={() => scrollToSection('safety')} className="text-gray-400 hover:text-blue-400 transition-colors">Safety</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Formwork Construction</li>
              <li>Labour Hire</li>
              <li>Conventional Systems</li>
              <li>Modern Formwork Systems</li>
              <li>Project Management</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+610431017079" className="flex items-start text-gray-400 hover:text-blue-400 transition-colors">
                  <Phone className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <span>+61 0431 017 079</span>
                </a>
              </li>
              <li>
                <a href="mailto:Solid_form@hotmail.com" className="flex items-start text-gray-400 hover:text-blue-400 transition-colors">
                  <Mail className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <span>Solid_form@hotmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start text-gray-400">
                  <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <span>NSW, ACT & Victoria<br />Australia</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              Copyright © 2018 Solid Form Pty Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
