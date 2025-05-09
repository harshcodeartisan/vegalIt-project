import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Shield, Home, Database, ChevronRight } from 'lucide-react';

const serviceCategories = [
  {
    icon: Database,
    title: 'IT Services',
    description: 'Comprehensive IT solutions to optimize your business operations',
    link: '/it-services',
    items: ['IT AMC', 'IT Outsourcing', 'IT Relocation', 'Cloud Solutions', 'ERP Solutions']
  },
  {
    icon: Server,
    title: 'IT Infrastructure',
    description: 'Build robust infrastructure for your growing business needs',
    link: '/it-infrastructure',
    items: ['Structured Cabling', 'New Office Setup', 'Data Server Virtualization', 'Office 365']
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Protect your business with advanced security solutions',
    link: '/security',
    items: ['CCTV Installation', 'Door Access Control', 'SIRA Approved CCTV', 'Cybersecurity']
  },
  {
    icon: Home,
    title: 'Home Automation',
    description: 'Transform your living space with cutting-edge smart technologies',
    link: '/home-automation',
    items: ['Smart Villa Automation', 'AI Enabled Homes', 'Smart Appliances']
  }
];

const Services: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
          <p className="text-lg text-gray-600">
            VegaTech offers a wide range of IT and automation services to help businesses and homeowners leverage technology for better outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {serviceCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-300"
            >
              <div className="p-6">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                  <category.icon size={28} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-5">{category.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={category.link}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                >
                  Learn More 
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;