import React from 'react';
import { Award, Users, TrendingUp, Target } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: Award,
      title: '10+ Years Experience',
      description: 'Proven track record in formwork construction'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly-skilled formwork professionals'
    },
    {
      icon: TrendingUp,
      title: 'Quality Service',
      description: 'Superior construction at competitive rates'
    },
    {
      icon: Target,
      title: 'Timely Delivery',
      description: 'Exceptional and on-time results'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1694521787162-5373b598945c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHwzfHxjb25zdHJ1Y3Rpb24lMjBzaXRlfGVufDB8fHx8MTc3NjUyMzI5NXww&ixlib=rb-4.1.0&q=85"
                alt="Solid Form Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-2xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div>
            <div className="mb-6">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Formwork Contractors & Labour Hire
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                About Us
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Solid Form is a specialist formwork contractor that operates across NSW, ACT and now Victoria. 
              With over 10 years' experience in this field, we offer superior and high-quality formwork 
              construction services at competitive rates.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Solid Form is a dynamic team that deliver capabilities of both conventional and modern formwork 
              systems with our highly-skilled formwork professionals who are motivated to deliver exceptional 
              and timely results.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-start p-4 rounded-xl hover:bg-blue-50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
