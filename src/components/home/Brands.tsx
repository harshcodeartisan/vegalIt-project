import React, { useRef, useState } from 'react';

const brands = [
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'Cisco', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg' },
  { name: 'Dell', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg' },
  { name: 'HP', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { name: 'VMware', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg' },
  { name: 'Lenovo', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Lenovo_logo_2015.svg' },
];

const Brands: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted Partners</h2>
          <p className="text-lg text-gray-600">
            We collaborate with leading technology providers to deliver the best solutions for our clients.
          </p>
        </div>
        
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            className={`flex ${
              isPaused ? '' : 'animate-scroll'
            } transition-all duration-300`}
            style={{
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
          >
            {[...brands, ...brands].map((brand, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-40 mx-8 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;