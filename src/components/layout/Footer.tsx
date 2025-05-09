import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Logo from '../common/Logo';
import { navItems } from '../../data/navItems';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and About */}
          <div>
            <Logo className="h-10 w-auto mb-6" dark />
            <p className="text-gray-400 mb-6">
              VegaTech provides comprehensive IT services, home automation, and infrastructure solutions to businesses across UAE.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {navItems.slice(0, 4).map((item) => (
                <li key={item.title}>
                  <Link to={`/${item.title.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin size={20} className="text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">Office #1234, Building Name, Street Name, Dubai, UAE</span>
              </li>
              <li className="flex">
                <Phone size={20} className="text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+971 12 345 6789</span>
              </li>
              <li className="flex">
                <Mail size={20} className="text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@vegatech.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center sm:flex sm:justify-between sm:text-left">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} VegaTech. All rights reserved.</p>
          <p className="text-gray-400 mt-2 sm:mt-0">Designed & Developed by VegaTech Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;