import React, { useEffect } from "react";
import "./Feature.css"; 

const Features = () => {
  useEffect(() => {
    const featureItems = document.querySelectorAll('.feature-item');

    const handleScroll = () => {
      featureItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          item.classList.add('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="features-container">
      <div className="feature-item">
        <div className="iconleft">
          <img src="/fe6.png" alt="Feature 1" />
        </div>
        <div className="contentleft">
          <p className="DescriptionText">
            Que vous soyez commerçant, chef d'entreprise ou artisan, afficher un
            site internet aux couleurs de votre activité augmente considérablement
            votre crédibilité auprès de vos clients potentiels. Développez votre
            propre site Web ou votre blog personnel, ce qui vous aidera à obtenir
            de nouveaux contacts et à améliorer votre réputation. Vos clients
            potentiels pourront entrer en contact avec votre organisation grâce
            aux informations utiles fournies sur votre site Web.
          </p>
        </div>
      </div>
      <div className="feature-item">
       
        <div className="contentRight">
          <p className="DescriptionText">
            Créez votre propre site Web statique ou dynamique à la demande. En
            fonction de vos besoins spécifiques, nous choisirons ensemble la
            solution la plus adaptée à votre projet: présentation ou conception
            d'un site internet corporate, création d'un site web sur mesure ou
            d'un pack CMS. Gérez votre site Web avec une interface de gestion de
            contenu simple et pratique.
          </p>
          <div className="iconRight">
        <img src="/fe2.png" alt="Feature 1" />
        </div>
        </div>
        
      </div>
      <div className="feature-item">
        <div className="iconleft">
        <img src="/fe3.png" alt="Feature 1" />
        </div>
        <div className="contentleft">
          <p className="DescriptionText">
            Augmentez vos performances commerciales, votre volume de ventes, et
            diversifiez ainsi votre clientèle grâce à votre boutique en ligne.
            Créer votre propre site e-commerce dynamique vous ouvre les portes du
            e-business national et international. Proposez à vos clients un
            catalogue de vos produits pour passer leurs commandes et effectuer
            leurs achats en ligne de manière sécurisée.
          </p>
        </div>
      </div>

      <div className="feature-item">
       
       <div className="contentRight">
         <p className="DescriptionText">
         Créez votre propre site Web statique ou dynamique à la demande. En fonction de vos besoins spécifiques, nous choisirons ensemble la solution la plus adaptée à votre projet : présentation ou conception d’un site internet corpo rate, création d’un site web sur mesure ou d’un pack CMS. Gérez votre site Web avec une interface de gestion de contenu simple et pratique.<br />

         </p>
         <div className="iconRight">
       <img src="/fe1.png" alt="Feature 1" />
       </div>
       </div>
       
     </div>
     <div className="feature-item">
        <div className="iconleft">
        <img src="/fe5.png" alt="Feature 1" />
        </div>
        <div className="contentleft">
          <p className="DescriptionText">
          Créez votre identité visuelle unique, stylée et sur-mesure : Logo, Carte de Visite, Affiche, Flyer, Brochure, Brochure et tous documents professionnels. Avec une infinité de détails, votre identité graphique doit refléter votre image de marque et vos valeurs auprès de vos clients. Couleurs, icônes, typographie… tout doit respecter une charte graphique soignée et professionnelle.

          </p>
        </div>
      </div>
      <div className="feature-item">
       
       <div className="contentRight">
         <p className="DescriptionText">
         Intégration Web pour votre conception Web au format vectoriel ou PSD. Garantissez une accessibilité, une ergonomie intuitive et des références naturelles dans les moteurs de recherche en respectant les standards Web du W3C. L’accessibilité de votre site Web est étroitement liée à l’architecture des informations et autres éléments graphiques fournis. Donner la priorité au contenu Web rendra votre site Web plus facile à lire et à comprendre.

         </p>
         <div className="iconRight">
       <img src="/fe7.png" alt="Feature 1" />
       </div>
       </div>
       
     </div>
    </div>
  );
};

export default Features;
