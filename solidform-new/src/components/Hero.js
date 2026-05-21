import React from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Building Trust with <span className="text-blue-400">Quality Formwork</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">
          We'll help get the job done!
        </p>
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
          Specialist formwork contractor operating across NSW, ACT and Victoria.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:Solid_form@hotmail.com?subject=Quote Request" 
             className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 shadow-lg">
            <Mail className="w-5 h-5 mr-2" />
            Get Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a href="tel:+610431017079" 
             className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105">
            <Phone className="w-5 h-5 mr-2" />
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
