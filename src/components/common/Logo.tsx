import React from 'react';
import { Terminal } from 'lucide-react';

interface LogoProps {
  className?: string;
  dark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', dark = false }) => {
  const textColor = dark ? 'text-white' : 'text-gray-900';
  
  return (
    <div className={`flex items-center ${className}`}>
      <Terminal size={28} className="text-blue-600 mr-2" />
      <span className={`font-bold text-xl ${textColor}`}>
        Vega<span className="text-blue-600">IT</span>
      </span>
    </div>
  );
};

export default Logo;