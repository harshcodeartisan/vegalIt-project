import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import WhatsAppChat from '../components/common/WhatsAppChat';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default MainLayout;