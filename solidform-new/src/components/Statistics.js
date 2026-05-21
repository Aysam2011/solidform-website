import React from 'react';
import { Award, MapPin, Shield, Clock } from 'lucide-react';

const Statistics = () => {
  const stats = [
    { icon: Award, number: '10+', label: 'Years Experience' },
    { icon: MapPin, number: '3', label: 'States Covered' },
    { icon: Shield, number: '100%', label: 'Safety Compliant' },
    { icon: Clock, number: '24/7', label: 'Project Support' }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 group-hover:bg-white/30 transition-all">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-white">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
