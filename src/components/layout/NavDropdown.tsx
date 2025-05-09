import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdownItem } from '../../types';

interface NavDropdownProps {
  items: NavDropdownItem[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ items }) => {
  return (
    <div className="absolute left-0 mt-2 w-[600px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
      <div className="bg-white rounded-lg shadow-xl p-6 grid grid-cols-2 gap-4">
        {items.map((item) => (
          <Link 
            key={item.title}
            to={item.link} 
            className="flex p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            {item.icon && (
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <item.icon size={24} className="text-blue-600" />
              </div>
            )}
            <div>
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              {item.description && (
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;