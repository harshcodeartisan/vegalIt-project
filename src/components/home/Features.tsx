import React from 'react';
import { Clock, Award, Users, BarChart } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical assistance to ensure your systems are always up and running.'
  },
  {
    icon: Award,
    title: 'Certified Experts',
    description: 'Our team consists of industry-certified professionals with extensive experience.'
  },
  {
    icon: Users,
    title: 'Client-Focused Approach',
    description: 'We prioritize your business needs and tailor our solutions accordingly.'
  },
  {
    icon: BarChart,
    title: 'Proven Results',
    description: 'Track record of delivering successful projects and measurable outcomes.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose VegaTech?</h2>
          <p className="text-lg text-gray-600">
            We combine technical expertise with business insight to deliver solutions that make a real difference.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon size={30} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;