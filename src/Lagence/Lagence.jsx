import React from 'react';
import './Lagence.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLightbulb, faPaintBrush, faCogs } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const Agence = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.agence-timeline-step');
    elements.forEach((el, index) => {
      el.style.transitionDelay = `${index * 100}ms`;
      el.classList.add('fade-in');
    });
  }, []);

  return (
    <div className="agence-container">
      {/* Hero Section */}
      <section className="agence-hero">
        <div className="agence-hero-content" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="hero-text" style={{ flex: 1 }}>
            <h2 className="hero-subtitle">L'agence Digital <br></br>Tasmin Web</h2>
            <p className="hero-description">Une agence web d’explorateurs ouverts sur le monde avec des productions dans plusieurs secteurs d’activités, tétus lorsqu’il s’agit d’accomplir une mission.</p>
          </div>
          <img src="/home4.png" alt="L'agence Digital Tasmin Web" className="hero-image" style={{ flex: 1 }} />
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

    </div>
  );
};

export default Agence;
