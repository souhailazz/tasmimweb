import './Technologies.css';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PartnershipCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const partners = [
    {
      name: "GitHub",
      image: "https://img.icons8.com/?size=100&id=12599&format=png&color=000000",
    },
    {
      name: "laravel",
      image: "https://img.icons8.com/?size=100&id=hUvxmdu7Rloj&format=png&color=000000",
    },
    {
      name: "Vue.js",
      image: "https://img.icons8.com/?size=100&id=rY6agKizO9eb&format=png&color=000000",
    },
    {
      name: "Figma",
      image: "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
    },
    {
      name: "Wordpress",
      image: "https://img.icons8.com/?size=100&id=12472&format=png&color=000000",
    }
  ];

  useEffect(() => {
    const interval = setInterval(nextSlide, 1200); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + partners.length) % partners.length);
  };

  console.log('Active Index:', activeIndex); // Debug log

  return (
    <section className="client-section" id="part">
      <div className="container">
        <div className="heading-container">
          <h2>Nos partenariats</h2>
        </div>
        <div className="carousel">
          <div className="carousel-inner" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {partners.map((partner, index) => (
              <div key={index} className="carousel-item">
                <div className="box">
                  <div className="img-box">
                    <img src={partner.image} alt={partner.name} />
                  </div>
                  <div className="detail-box">
                    <h4>{partner.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="carousel-btn-box">
            <button className="carousel-control-prev" onClick={prevSlide}>
              <ChevronLeft size={24} />
              <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" onClick={nextSlide}>
              <ChevronRight size={24} />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipCarousel;
