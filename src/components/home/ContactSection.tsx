import React from 'react';
import ContactForm from '../common/ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">
            Have questions about our services? Contact us today and one of our experts will get back to you shortly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Contact VegaTech" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;