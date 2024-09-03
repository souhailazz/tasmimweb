import React from 'react';
import './App.css';
import Header from './header/Header.jsx';
import HomePage from './homepage/HomePage.jsx';
import ContactSection from "./ContactSection/ContactSection.jsx";
import Footer from './footer/Footer.jsx';
import Agence from './Lagence/Lagence.jsx';
import Nos_prestations from './Nosprestations/Nos_prestations.jsx';
import Notre_processus from './Notreprocessus/Notre_processus.jsx';
import Guides from './Guides/Guides.jsx';
import PartnershipCarousel from './Technologies/Technologies.jsx';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="header-container">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<PageWrapper component={<HomePage />} />} />  
        <Route path="/L'agence" element={<PageWrapper component={<Agence />} />} />  
        <Route path="/Nos_prestations" element={<PageWrapper component={<Nos_prestations />} />} />  
        <Route path="/Notre_processus" element={<PageWrapper component={<Notre_processus />} />} />  
        <Route path="/Guides" element={<PageWrapper component={<Guides />} />} />  
        <Route path="/Technologies" element={<PageWrapper component={<PartnershipCarousel />} />} />  
        <Route path="/contact" element={<PageWrapper component={<ContactSection />} />} />  
      </Routes>
    </Router>
  );
}

function PageWrapper({ component }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="PageWrapper">
      {component}
      {isHomePage && (
        <>
                  <PartnershipCarousel />

          <ContactSection />
          <Footer />
          
        </>
      )}
      
    </div>
  );
}

export default App;
