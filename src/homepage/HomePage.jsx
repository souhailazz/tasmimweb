import React from 'react';
import './HomePage.css';
import ServicesGrid from '../servicegrid/ServiceGrid.jsx'; 
import Features from '../feature/Feature2.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const scrollToElement = (selector, duration) => {
  const element = document.querySelector(selector);
  if (!element) return;

  const start = window.scrollY;
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const distance = targetPosition - start;
  const startTime = performance.now();

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  const animateScroll = (currentTime) => {
    const timeElapsed = currentTime - startTime;
    const run = easeInOutQuad(timeElapsed, start, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animateScroll);
  };

  requestAnimationFrame(animateScroll);
};

const HomePage = () => {

  return (
    <div className="home-page">
      <header className="hero-section" id="hero-section">
        <h1 className="hero-title">BIENVENUE</h1>
        <h2 className="hero-subtitle">TASMIM WEB</h2>
        <p className="hero-description">
          Une agence web d'explorateurs ouverts sur le monde avec des<br/> 
          productions dans plusieurs secteurs d'activités, têtus lorsqu'il <br/>
          s'agit d'accomplir une mission.
        </p>
        <button className="learn-more-button"><span>En savoir plus</span>  <i className="Arrowicon fa-solid fa-angle-right"></i></button><br/><br/><br/>
        <div className="nav-container">
          <button className="nav-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='Icon'>
              <path d="M9.99967 6.45825C9.99967 5.07754 11.119 3.95825 12.4997 3.95825H17.708C18.1682 3.95825 18.5413 4.33135 18.5413 4.79159V15.2083C18.5413 15.6685 18.1682 16.0416 17.708 16.0416H12.7305C12.1635 16.0416 11.6077 16.1784 11.1254 16.4765C10.643 16.7746 10.2532 17.2011 9.99967 17.7083M9.99967 6.45825C9.99967 5.07754 8.88039 3.95825 7.49967 3.95825H2.29134C1.8311 3.95825 1.45801 4.33135 1.45801 4.79159V15.2083C1.45801 15.6685 1.8311 16.0416 2.29134 16.0416H7.26884C7.83585 16.0416 8.39166 16.1784 8.87399 16.4765C9.35631 16.7746 9.7461 17.2011 9.99967 17.7083M9.99967 6.45825V17.7083" stroke="#CAECF1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg><span className='ContainerTiltle'><Link to="/Guides" className='ContainerTiltle'>Guides</Link></span>
          </button>
          <button className="nav-btn"> 
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='Icon'>
              <path d="M11.062 4.36816H3.14529C2.68505 4.36816 2.31195 4.74126 2.31195 5.2015V15.6182C2.31195 16.0784 2.68505 16.4515 3.14529 16.4515H11.062M13.5581 4.36816H16.8915C17.3517 4.36816 17.7248 4.74126 17.7248 5.2015V15.6182C17.7248 16.0784 17.3517 16.4515 16.8915 16.4515H13.5581M13.5581 4.36816V2.49316M13.5581 4.36816V16.4515M13.5581 16.4515V18.3265M7.10362 8.3265L9.18695 10.4098L7.10362 12.4932" stroke="#CAECF1" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span className='ContainerTiltle'><Link to="/Nos_prestations" className='ContainerTiltle'>Nos prestations</Link></span>
          </button>
          <button className="nav-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='Icon'>
              <path d="M10.6253 8.95841V4.29175C10.6253 3.18718 11.5208 2.29175 12.6253 2.29175H14.042C15.1466 2.29175 16.042 3.18718 16.042 4.29175V8.95841M10.6253 5.62508H12.7087M3.95866 8.95841V5.50432C3.95866 5.17334 4.0408 4.84753 4.19772 4.55612L5.21945 2.65861C5.34112 2.43265 5.57703 2.29175 5.83366 2.29175C6.09029 2.29175 6.3262 2.43265 6.44787 2.65861L7.4696 4.55612C7.62652 4.84753 7.70866 5.17334 7.70866 5.50432V8.95841M2.29199 8.95841H17.7087V14.8751C17.7087 15.9797 16.8132 16.8751 15.7087 16.8751H4.29199C3.18742 16.8751 2.29199 15.9797 2.29199 14.8751V8.95841Z" stroke="#CAECF1" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span className='ContainerTiltle'><Link to="/Notre_processus" className='ContainerTiltle'>Notre processus</Link></span>
          </button >
          <button className="nav-btn">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='Icon'>
              <path d="M15.2954 11.875H16.9639C17.8844 11.875 18.6306 11.1288 18.6306 10.2083V4.79167C18.6306 3.87119 17.8844 3.125 16.9639 3.125H8.42232C7.50184 3.125 6.75565 3.87119 6.75565 4.79167V6.45833M13.6306 6.45833H4.88065C3.96018 6.45833 3.21399 7.20453 3.21399 8.125V13.5417C3.21399 14.4621 3.96018 15.2083 4.88065 15.2083H5.92232V17.2917L9.67232 15.2083H13.6306C14.5511 15.2083 15.2973 14.4621 15.2973 13.5417V8.125C15.2973 7.20453 14.5511 6.45833 13.6306 6.45833Z" stroke="#CAECF1" stroke-opacity="0.7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> 
            </svg>
            <span className='ContainerTiltle'><Link  to="/Technologies" className='ContainerTiltle'>Technologies</Link></span>
          </button >
        </div>
      </header>
      
      <section className="services-section">
        <ServicesGrid />
      </section>
      
      <h3>Prêt à digitaliser votre entreprise ?</h3>
      
      <div className='sponsor'>
        <div>
          <img className="imagesponsor" src="/sponsor.png" alt="Sponsor Image" />
        </div>
        <div>
          <a href="#header" onClick={(e) => {
            e.preventDefault();
            scrollToElement('#header', 1000);
          }}>
            <img className="arrowhead" src="/arrowhead.png" alt="Arrowhead Image" />
          </a>
        </div>
      </div>
  <h3 className='Features-subtitle'>The modern standard</h3>
  <h1 className='Features-title'>Beautiful documentation <br/> that converts users </h1>
  <h3 className='Features-subtitle'>A platform you can rely on to reach your audience </h3>

      <Features />
    </div>
  );
};

export default HomePage;
