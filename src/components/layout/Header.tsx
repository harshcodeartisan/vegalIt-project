import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronRight, Menu, X } from 'lucide-react';
import NavDropdown from './NavDropdown';
import Logo from '../common/Logo';
import { navItems } from '../../data/navItems';
import '../layout/header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="block">
            <Logo className="h-10 w-auto" />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.title} className="relative group">
              <button className="flex items-center text-gray-800 hover:text-blue-600 font-medium py-2">
                {item.title}
              </button>
              {item.dropdown && (
                <NavDropdown items={item.dropdown} />
              )}
            </div>
          ))}
        </nav>
        
        {/* Call and Contact */}
        <div className="hidden lg:flex items-center space-x-4">
          <a 
            href="tel:+971123456789" 
            className="flex items-center text-gray-800 hover:text-blue-600"
          >
            <div className="bg-blue-100 p-2 rounded-full mr-2">
              <Phone size={18} className="text-blue-600" />
            </div>
            <div>
              <span className="block text-sm">Call Us</span>
              <span className="block font-semibold">+971 12 345 6789</span>
            </div>
            <ChevronRight size={16} className="ml-1 text-blue-600" />
          </a>
          
          <Link to="/contact" className="button">
  <span className="text">Discover</span>
  <span className="svg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="20"
      viewBox="0 0 38 15"
      fill="none"
    >
      <path
        fill="white"
        d="M10 7.519l-.939-.344h0l.939.344zm14.386-1.205l-.981-.192.981.192zm1.276 5.509l.537.843.148-.094.107-.139-.792-.611zm4.819-4.304l-.385-.923h0l.385.923zm7.227.707a1 1 0 0 0 0-1.414L31.343.448a1 1 0 0 0-1.414 0 1 1 0 0 0 0 1.414l5.657 5.657-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM1 7.519l.554.833.029-.019.094-.061.361-.23 1.277-.77c1.054-.609 2.397-1.32 3.629-1.787.617-.234 1.17-.392 1.623-.455.477-.066.707-.008.788.034.025.013.031.021.039.034a.56.56 0 0 1 .058.235c.029.327-.047.906-.39 1.842l1.878.689c.383-1.044.571-1.949.505-2.705-.072-.815-.45-1.493-1.16-1.865-.627-.329-1.358-.332-1.993-.244-.659.092-1.367.305-2.056.566-1.381.523-2.833 1.297-3.921 1.925l-1.341.808-.385.245-.104.068-.028.018c-.011.007-.011.007.543.84zm8.061-.344c-.198.54-.328 1.038-.36 1.484-.032.441.024.94.325 1.364.319.45.786.64 1.21.697.403.054.824-.001 1.21-.09.775-.179 1.694-.566 2.633-1.014l3.023-1.554c2.115-1.122 4.107-2.168 5.476-2.524.329-.086.573-.117.742-.115s.195.038.161.014c-.15-.105.085-.139-.076.685l1.963.384c.192-.98.152-2.083-.74-2.707-.405-.283-.868-.37-1.28-.376s-.849.069-1.274.179c-1.65.43-3.888 1.621-5.909 2.693l-2.948 1.517c-.92.439-1.673.743-2.221.87-.276.064-.429.065-.492.057-.043-.006.066.003.155.127.07.099.024.131.038-.063.014-.187.078-.49.243-.94l-1.878-.689zm14.343-1.053c-.361 1.844-.474 3.185-.413 4.161.059.95.294 1.72.811 2.215.567.544 1.242.546 1.664.459a2.34 2.34 0 0 0 .502-.167l.15-.076.049-.028.018-.011c.013-.008.013-.008-.524-.852l-.536-.844.019-.012c-.038.018-.064.027-.084.032-.037.008.053-.013.125.056.021.02-.151-.135-.198-.895-.046-.734.034-1.887.38-3.652l-1.963-.384zm2.257 5.701l.791.611.024-.031.08-.101.311-.377 1.093-1.213c.922-.954 2.005-1.894 2.904-2.27l-.771-1.846c-1.31.547-2.637 1.758-3.572 2.725l-1.184 1.314-.341.414-.093.117-.025.032c-.01.013-.01.013.781.624zm5.204-3.381c.989-.413 1.791-.42 2.697-.307.871.108 2.083.385 3.437.385v-2c-1.197 0-2.041-.226-3.19-.369-1.114-.139-2.297-.146-3.715.447l.771 1.846z"
      />
    </svg>
  </span>
</Link>

        </div>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <div className="container mx-auto px-4 py-4">
          {navItems.map((item) => (
            <div key={item.title} className="py-3 border-b border-gray-100">
              <div className="font-medium text-gray-800">{item.title}</div>
              {item.dropdown && (
                <div className="mt-2 pl-4 space-y-2">
                  {item.dropdown.map((dropItem) => (
                    <Link 
                      key={dropItem.title}
                      to={dropItem.link} 
                      className="block text-sm text-gray-600 py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {dropItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className="flex flex-col space-y-3 mt-4">
            <a 
              href="tel:+971123456789" 
              className="flex items-center text-gray-800"
            >
              <Phone size={18} className="mr-2 text-blue-600" />
              <span>+971 12 345 6789</span>
            </a>
            
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white text-center font-medium py-2 px-4 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;