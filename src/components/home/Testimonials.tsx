import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Vega IT's AMC services have transformed our IT stability.",
    author: "Anjali Mehra",
    position: "IT Head, TechNova Corp",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    content: "Their 24/7 support is unmatched!",
    author: "Rajeev Nair",
    position: "Operations Manager, Delta Logistics",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    content: "VegaTech completely transformed our IT infrastructure. Their team was professional, efficient, and delivered the project ahead of schedule.",
    author: "Sarah Johnson",
    position: "CTO, Global Finance Ltd",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Hear from businesses and homeowners who have experienced the VegaTech difference.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="absolute top-8 left-8 text-blue-500 opacity-20">
              <Quote size={60} />
            </div>

            <div className="relative z-10">
              <p className="text-lg md:text-xl text-gray-700 italic mb-8">
                {testimonials[activeIndex].content}
              </p>

              <div className="flex items-center">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className="w-16 h-16 rounded-full object-cover mr-5"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonials[activeIndex].author}</h4>
                  <p className="text-gray-600">{testimonials[activeIndex].position}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blue-50 transition-colors duration-300"
            >
              <ChevronLeft size={20} className="text-blue-600" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blue-50 transition-colors duration-300"
            >
              <ChevronRight size={20} className="text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
