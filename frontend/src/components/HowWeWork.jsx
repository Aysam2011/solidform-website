import React from 'react';
import { Target, Clock, Shield, MessageCircle, CheckCircle } from 'lucide-react';

const HowWeWork = () => {
  const principles = [
    {
      icon: Target,
      title: 'Quality Focus',
      description: 'Professional and efficient formwork services delivering high quality work with honesty and integrity'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Achieve project completion within time frames and projected budget'
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Maintaining strict safety protocols without compromising on quality'
    },
    {
      icon: MessageCircle,
      title: 'Direct Communication',
      description: 'Clear and direct communication lines with onsite management'
    }
  ];

  return (
    <section id="how-we-work" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="order-2 md:order-1">
            <div className="mb-6">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">
                Our Process
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                How We Work
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our goal is to provide professional and efficient formwork services for our clients and 
              partners delivering high quality work with honesty and integrity.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our business approach is simple; achieve project completion within time frames and projected 
              budget whilst maintaining strict safety protocols that does not compromise on quality of our work. 
              We are solution focused in getting the job done, and ensuring that client satisfaction is achieved.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-8">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-800 leading-relaxed">
                  To ensure the highest standard of work is achieved within strict time frames, Mohammed and 
                  his supervisors allocate a large proportion of their time working and managing projects 
                  directly onsite. This provides you with clear and direct communication lines to ensure that 
                  the job is managed and completed proactively.
                </p>
              </div>
            </div>

            {/* Principles */}
            <div className="space-y-4">
              {principles.map((principle, index) => (
                <div 
                  key={index}
                  className="flex items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <principle.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{principle.title}</h3>
                    <p className="text-sm text-gray-600">{principle.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative order-1 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1773430263055-54c323a46d14?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzF8MHwxfHNlYXJjaHwxfHxmb3Jtd29yayUyMGNvbnN0cnVjdGlvbnxlbnwwfHx8fDE3NzY1MjMyOTB8MA&ixlib=rb-4.1.0&q=85"
                alt="How We Work"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent"></div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-600 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
