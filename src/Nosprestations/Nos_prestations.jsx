import React from 'react';
import './Nos_prestations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const services = [
  {
    title: "Développement web Maroc",
    description: "Développement application web, Développement application mobile, Création boutique e-commerce, Refonte site web",
    image: "/devloppementpres.png"
  },
  {
    title: "Conception Infographique",
    description: "Conception site web vitrine, Création de logo, Infographie & identité visuelle, Intégration web – HTML | CSS | PSD",
    image: "/conceptionprest.png"
  },
  {
    title: "Correction du site web",
    description: "Correction de bugs, Optimisation des performances, Améliorations de la sécurité, Maintenance du site web",
    image: "/fix.png"
  },
  
  {
    title: "Conseil Webmarketing",
    description: "Stratégie de communication digitale, Référencement naturel SEO",
    image: "/marketingpres.png"
  }
];

const Nos_prestations = () => {
  return (
    <>
      <h1 className='title'>Nos Prestations</h1>
      <div className='services-grid'>
        {services.map((service, index) => (
          <div className='service-card' key={index}>
            <div className='service-icon'>
            </div>
            <img src={service.image} alt={service.title} className='service-image' />
            <h2 className='service-title'>{service.title}</h2>
            <p className='service-description'>{service.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Nos_prestations;
