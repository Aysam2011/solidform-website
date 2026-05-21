import React from 'react';
import { Award, Users, TrendingUp, Target } from 'lucide-react';

const About = () => {
  const features = [
    { icon: Award, title: '10+ Years Experience', description: 'Proven track record' },
    { icon: Users, title: 'Expert Team', description: 'Highly-skilled professionals' },
    { icon: TrendingUp, title: 'Quality Service', description: 'Superior construction' },
    { icon: Target, title: 'Timely Delivery', description: 'On-time results' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Formwork Contractors & Labour Hire
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">About Us</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
            Solid Form is a specialist formwork contractor that operates across NSW, ACT and now Victoria. 
            With over 10 years' experience in this field, we offer superior and high-quality formwork 
            construction services at competitive rates.
          </p>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed text-center">
            Solid Form is a dynamic team that deliver capabilities of both conventional and modern formwork 
            systems with our highly-skilled formwork professionals who are motivated to deliver exceptional 
            and timely results.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors group">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
