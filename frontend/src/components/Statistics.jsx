import React from 'react';
import { Award, MapPin, Shield, Clock } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      icon: Award,
      number: '10+',
      label: 'Years Experience',
      description: 'Proven track record'
    },
    {
      icon: MapPin,
      number: '3',
      label: 'States Covered',
      description: 'NSW, ACT & Victoria'
    },
    {
      icon: Shield,
      number: '100%',
      label: 'Safety Compliant',
      description: 'Industry certified'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Project Support',
      description: 'Always available'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                <stat.icon className="w-8 h-8 text-white" />
              </div>

              {/* Number */}
              <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-lg md:text-xl font-semibold text-white mb-1">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-sm text-blue-100">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Statistics;
