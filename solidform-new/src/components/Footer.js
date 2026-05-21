import React from 'react';
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

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
              Specialist formwork contractor operating across NSW, ACT and Victoria.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-blue-400">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-blue-400">About</button></li>
              <li><button onClick={() => scrollToSection('how-we-work')} className="text-gray-400 hover:text-blue-400">How We Work</button></li>
              <li><button onClick={() => scrollToSection('safety')} className="text-gray-400 hover:text-blue-400">Safety</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Formwork Construction</li>
              <li>Labour Hire</li>
              <li>Conventional Systems</li>
              <li>Modern Formwork Systems</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+610431017079" className="flex items-start text-gray-400 hover:text-blue-400">
                  <Phone className="w-5 h-5 mr-3 mt-1" />
                  <span>+61 0431 017 079</span>
                </a>
              </li>
              <li>
                <a href="mailto:Solid_form@hotmail.com" className="flex items-start text-gray-400 hover:text-blue-400">
                  <Mail className="w-5 h-5 mr-3 mt-1" />
                  <span>Solid_form@hotmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start text-gray-400">
                  <MapPin className="w-5 h-5 mr-3 mt-1" />
                  <span>NSW, ACT & Victoria<br />Australia</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-400 text-sm">
            Copyright © 2018 Solid Form Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
