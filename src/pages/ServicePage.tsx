import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceHero from '../components/ServiceDetail/ServiceHero';
import ServicesOverview from '../components/ServiceDetail/ServicesOverview';
import WhyChooseUs from '../components/ServiceDetail/WhyChooseUs';
import CaseStudies from '../components/ServiceDetail/CaseStudies';
import Testimonials from '../components/ServiceDetail/Testimonials';
import FAQSection from '../components/ServiceDetail/FAQSection';
import ContactSection from '../components/ServiceDetail/ContactSection';
import { serviceData } from '../data/serviceData';

interface ServicePageProps {
  serviceId?: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ serviceId: propServiceId }) => {
  const params = useParams<{ serviceId?: string }>();
  const serviceId = propServiceId || params.serviceId;
  
  // Find the service data based on serviceId
  const service = serviceData.find(s => s.id === serviceId);

  if (!service) {
    return <div className="pt-32 text-center">Service not found</div>;
  }

  return (
    <div>
      <ServiceHero 
        title={service.title}
        subtitle={service.subtitle}
        image={service.heroImage}
      />
      
      <ServicesOverview services={service.services} />
      
      <WhyChooseUs />
      
      <CaseStudies />
      
      <Testimonials />
      
      <FAQSection />
      
      <ContactSection />
    </div>
  );
};

export default ServicePage;