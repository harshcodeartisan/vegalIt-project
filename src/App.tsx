import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import CustomCursor from './components/common/CustomCursor';

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add other routes as needed */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;