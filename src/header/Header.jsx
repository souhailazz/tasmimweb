import React from 'react';
import './Header2.css'; 
import tasmimLogo from '/tasmim.png';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className="header" id="header">
      <div className="logo">
        <span><img src={tasmimLogo} alt="Tasmim Logo" /></span>
      </div>
      <nav className="nav">
        <ul>
          <li className="nav-item"><a href="#header"><Link to="/">Accueil</Link></a></li>
          <li className="nav-item"><a href=""><Link to="/L'agence">L'agence</Link></a></li>
          <li className="nav-item"><a href=""><Link to="/Nos_prestations">Nos prestations</Link></a></li>
          <li className="nav-item"><a href="#footer">Contactez-nous</a></li>
        
        </ul>
      </nav>
      <div className="contact-info">
        <a href="tel:+212666671607">Appelez-nous : +212 6 66 67 16 07</a>
      </div>
    </header>
  );
};

export default Header;
