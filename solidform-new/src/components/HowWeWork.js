import React from 'react';
import { Target, Clock, Shield, MessageCircle } from 'lucide-react';

const HowWeWork = () => {
  const principles = [
    { icon: Target, title: 'Quality Focus', description: 'Professional and efficient formwork services' },
    { icon: Clock, title: 'On-Time Delivery', description: 'Project completion within time frames' },
    { icon: Shield, title: 'Safety First', description: 'Strict safety protocols maintained' },
    { icon: MessageCircle, title: 'Direct Communication', description: 'Clear onsite management' }
  ];

  return (
    <section id="how-we-work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">How We Work</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
            Our goal is to provide professional and efficient formwork services for our clients and 
            partners delivering high quality work with honesty and integrity.
          </p>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed text-center">
            We achieve project completion within time frames and projected budget whilst maintaining strict 
            safety protocols. We are solution focused in getting the job done and ensuring client satisfaction.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div key={index} className="flex items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{principle.title}</h3>
                    <p className="text-gray-600">{principle.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
