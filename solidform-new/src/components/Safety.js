import React from 'react';
import { Shield, HardHat, Clipboard, AlertTriangle } from 'lucide-react';

const Safety = () => {
  const requirements = [
    { icon: HardHat, title: 'Industry Training', description: 'Comprehensive training programs' },
    { icon: Shield, title: 'PPE Compliance', description: 'Proper protective equipment use' },
    { icon: Clipboard, title: 'Safe Work Methods', description: 'Safe work method statements' },
    { icon: AlertTriangle, title: 'Risk Mitigation', description: 'Proactive safety risk management' }
  ];

  return (
    <section id="safety" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Safety First</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">WHS & OHS</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
            Solid Form is committed to work health and safety for everyone in the workplace and job site 
            and are compliant with industry codes and insurance coverage.
          </p>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed text-center">
            We adhere to the strictest of safety guidelines and procedures to incorporate both a systems 
            approach to safety as well as a person-centred approach to safety.
          </p>

          <div className="bg-blue-600 text-white p-8 rounded-xl mb-12 text-center">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Safety Commitment</h3>
            <p className="text-blue-50 leading-relaxed">
              Our commitment extends beyond compliance - we foster a culture where every team member 
              actively contributes to maintaining the highest safety standards on every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {requirements.map((requirement, index) => {
              const Icon = requirement.icon;
              return (
                <div key={index} className="flex items-start p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                    <Icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{requirement.title}</h4>
                    <p className="text-gray-600">{requirement.description}</p>
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

export default Safety;
