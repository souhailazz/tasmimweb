import React from 'react';
import './Lagence.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLightbulb, faPaintBrush, faCogs } from '@fortawesome/free-solid-svg-icons';

const Agence = () => {
  return (
    <div className="agence-container">
      {/* Hero Section */}
      <section className="agence-hero">
        <div className="agence-hero-content">
          <h1>Tasmim Web : Agence web Casablanca, Maroc
          </h1>
          <p>Création de site web, marketing digital & développement sur mesure.</p>
        </div>
      </section>

      <section id="agence-services" className="agence-services">
        <h2>Nos Services</h2>
        <div className="agence-timeline">
          <div className="agence-timeline-step">
            <div className="timeline-icon-container">
              <FontAwesomeIcon icon={faSearch} className="timeline-icon" />
            </div>
            <div className="agence-timeline-label">Audit</div>
          </div>
          <div className="agence-timeline-step">
            <div className="timeline-icon-container">
              <FontAwesomeIcon icon={faLightbulb} className="timeline-icon" />
            </div>
            <div className="agence-timeline-label">Conseil</div>
          </div>
          <div className="agence-timeline-step">
            <div className="timeline-icon-container">
              <FontAwesomeIcon icon={faPaintBrush} className="timeline-icon" />
            </div>
            <div className="agence-timeline-label">Création</div>
          </div>
          <div className="agence-timeline-step">
            <div className="timeline-icon-container">
              <FontAwesomeIcon icon={faCogs} className="timeline-icon" />
            </div>
            <div className="agence-timeline-label">Production</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
    </div>
  );
};

export default Agence;
