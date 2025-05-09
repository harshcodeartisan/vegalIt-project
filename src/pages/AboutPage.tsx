import React from 'react';
import { CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32">
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About VegaTech</h1>
            <p className="text-xl text-gray-600">
              Delivering cutting-edge IT solutions and smart automation services with excellence and integrity
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center mb-16">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2015, VegaTech began with a vision to bridge the gap between complex technology and practical business solutions. What started as a small IT service provider has grown into a comprehensive technology partner offering end-to-end services across IT infrastructure, security, and automation.
              </p>
              <p className="text-gray-600">
                Today, we serve businesses of all sizes across the UAE and beyond, delivering solutions that empower our clients to thrive in an increasingly digital world. Our success is built on a foundation of technical excellence, integrity, and a deep understanding of our clients' needs.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="VegaTech Team" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Values</h2>
              <p className="text-gray-600 mb-6">
                Our mission is to empower businesses and individuals with technology solutions that enhance productivity, security, and quality of life. We believe that the right technology, properly implemented, can transform organizations and homes alike.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-2" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Excellence</h3>
                    <p className="text-gray-600">We strive for excellence in everything we do, from customer service to technical implementation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-2" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Integrity</h3>
                    <p className="text-gray-600">We operate with honesty and transparency, building trust through ethical business practices.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-2" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovation</h3>
                    <p className="text-gray-600">We embrace new technologies and creative solutions to solve complex challenges.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-2" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Client-Centricity</h3>
                    <p className="text-gray-600">We put our clients' needs at the center of everything we do, ensuring solutions that truly meet their requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="VegaTech Values" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals who make VegaTech's success possible
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Ahmed Hassan</h3>
                <p className="text-blue-600 mb-4">CEO & Founder</p>
                <p className="text-gray-600">
                  With over 15 years of experience in IT services and business management, Ahmed leads VegaTech with vision and technical expertise.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Sarah Johnson</h3>
                <p className="text-blue-600 mb-4">CTO</p>
                <p className="text-gray-600">
                  Sarah brings deep technical knowledge and innovative thinking to our solutions, ensuring they leverage the latest technologies.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team Member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Michael Chen</h3>
                <p className="text-blue-600 mb-4">Head of Infrastructure</p>
                <p className="text-gray-600">
                  Michael specializes in designing robust IT infrastructure solutions that provide the backbone for business operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Partners</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            We collaborate with industry leaders to deliver the best solutions
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg h-32">
              <span className="text-xl font-bold text-gray-400">Microsoft</span>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg h-32">
              <span className="text-xl font-bold text-gray-400">Cisco</span>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg h-32">
              <span className="text-xl font-bold text-gray-400">VMware</span>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg h-32">
              <span className="text-xl font-bold text-gray-400">Dell EMC</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;