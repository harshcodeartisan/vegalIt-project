import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Features from '../components/home/Features';
import Brands from '../components/home/Brands';
import Testimonials from '../components/home/Testimonials';
import ContactSection from '../components/home/ContactSection';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Features />
      <Brands />
      <Testimonials />
      <ContactSection />
    </main>
  );
};

export default HomePage;