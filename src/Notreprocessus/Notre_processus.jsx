import React from 'react';
import './Notre_processus.css';




const ProcessStep = ({ number, title, description, colorClass, icon }) => (
  <div className={`process-step ${colorClass}`}>
    
    <div className="step-number">{number}</div>
    <div className="step-content">
    <div className="step-icon">
      <img src={icon} alt={`${title} icon`} className="icon" />
    </div>
        
      <h3 className="step-title">{title}</h3>
      
      <p className="step-description">{description}</p>
    </div>
    
  </div>
);

const ProcessDiagram = () => {
  return (
    <div className="process-diagram">
      <h2 className="process-title">NOTRE PROCESSUS</h2>
      <div className="timeline">
        <ProcessStep
          number="1"
          title="PLANIFICATION"
          description="Comprendre ce que vous voulez sur votre site Web et comment planifier pour le mettre en œuvre."
          colorClass="blue" // Changed colorClass
          icon="./planification.svg"
        />
        <div className="arrow" /> {/* Added arrow between steps */}
        <ProcessStep
          number="2"
          title="CONCEPTION"
          description="Nous allons créer une conception de site Web magnifique et peu coûteuse pour votre projet de marketing créatif."
          colorClass="orange" // Changed colorClass
          icon="./conception.svg"
        />
        <div className="arrow" /> {/* Added arrow between steps */}
        <ProcessStep
          number="3"
          title="DÉVELOPPEMENT"
          description="Nous développons des systèmes de gestion de contenu pour les clients qui ont besoin de plus de base."
          colorClass="pink" // Changed colorClass
          icon="./keyboard.svg"
        />
        <div className="arrow" /> {/* Added arrow between steps */}
        <ProcessStep
          number="4"
          title="LANCEMENT"
          description="Nous lançons votre site Web et assurons qu'il fonctionne parfaitement."
          colorClass="green" // Changed colorClass
          icon="./launch.svg"
        />
        <div className="arrow" /> {/* Added arrow between steps */}
        <ProcessStep
          number="5"
          title="MAINTENANCE"
          description="Nous assurons la maintenance continue de votre site Web pour garantir sa performance."
          colorClass="purple" // Changed colorClass
          icon="./maintenance.svg"
        />

      </div>

    </div>

  );
};


export default ProcessDiagram;
