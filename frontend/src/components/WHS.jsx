import React from 'react';
import { Shield, HardHat, Clipboard, AlertTriangle, CheckCircle, Users } from 'lucide-react';

const WHS = () => {
  const requirements = [
    {
      icon: HardHat,
      title: 'Industry Training',
      description: 'Participation in induction and comprehensive industry training programs'
    },
    {
      icon: Shield,
      title: 'PPE Compliance',
      description: 'Proper use of Personal Protective Equipment at all times'
    },
    {
      icon: Clipboard,
      title: 'Safe Work Methods',
      description: 'Implementation of safe work method statements for all tasks'
    },
    {
      icon: AlertTriangle,
      title: 'Risk Mitigation',
      description: 'Proactive identification and mitigation of workplace safety risks'
    }
  ];

  return (
    <section id="whs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2383650/pexels-photo-2383650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="WHS & OHS Safety"
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
                Safety First
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
                WHS & OHS
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Solid Form is committed to work health and safety for everyone in the workplace and job site 
              and are compliant with industry codes and insurance coverage.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We adhere to the strictest of safety guidelines and procedures to incorporate both a systems 
              approach to safety as well as a person-centred approach to safety.
            </p>

            {/* Safety Commitment Badge */}
            <div className="bg-blue-600 text-white p-6 rounded-xl mb-8 shadow-lg">
              <div className="flex items-center mb-3">
                <Shield className="w-8 h-8 mr-3" />
                <h3 className="text-xl font-bold">Safety Commitment</h3>
              </div>
              <p className="text-blue-50 leading-relaxed">
                Our commitment extends beyond compliance - we foster a culture where every team member 
                actively contributes to maintaining the highest safety standards on every project.
              </p>
            </div>

            {/* Requirements Grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key WHS Requirements</h3>
              {requirements.map((requirement, index) => (
                <div 
                  key={index}
                  className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0 shadow-sm group-hover:bg-blue-600 transition-colors duration-300">
                    <requirement.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{requirement.title}</h4>
                    <p className="text-sm text-gray-600">{requirement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WHS;
