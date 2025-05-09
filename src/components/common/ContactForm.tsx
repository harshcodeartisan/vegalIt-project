import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    error: false
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, error: false });
    
    // Simulate form submission
    setTimeout(() => {
      setStatus({ submitted: true, submitting: false, error: false });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset form success message after 5 seconds
      setTimeout(() => {
        setStatus({ submitted: false, submitting: false, error: false });
      }, 5000);
    }, 1500);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
            placeholder="+971 12 345 6789"
          />
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
          <select 
            id="subject" 
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
          >
            <option value="">Select a subject</option>
            <option value="IT Services">IT Services</option>
            <option value="IT Infrastructure">IT Infrastructure</option>
            <option value="Security">Security</option>
            <option value="Home Automation">Home Automation</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-300"
          placeholder="Please describe how we can help you..."
        ></textarea>
      </div>
      
      <button 
        type="submit" 
        disabled={status.submitting}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
      >
        {status.submitting ? 'Sending...' : 'Send Message'}
        {!status.submitting && <Send size={18} className="ml-2" />}
      </button>
      
      {status.submitted && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      
      {status.error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          There was an error sending your message. Please try again.
        </div>
      )}
    </form>
  );
};

export default ContactForm;