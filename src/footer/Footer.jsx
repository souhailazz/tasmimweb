import React from 'react';
import "./Footer.css"
const Footer = () => {
  return (
 <>
 <footer id="footer" class="footer">
        <div class="footer-container">
            <div class="footer-section about">
                <h1 class="logo-text">Tasmim <span>Web</span></h1>
                <p>
                    Tasnim Web est une agence web e-marketing marocaine basée à Casablanca. Spécialisée dans le branding, les campagnes e-marketing et la conception et le développement de sites web et d’applications mobiles.
                </p>
                <div class="socials">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-google-plus"></i></a>
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>

            <div class="footer-section links">
                <h2>Développement Web</h2>
             
                <ul>
                    <a href="#"><li>Conception Boutique e-Commerce</li></a>
                    <a href="#"><li>Conception d'Application Web</li></a>
                    <a href="#"><li>Conception d'Application Mobile</li></a>
                    <a href="#"><li>Refonte Site Internet</li></a>
                </ul>
            </div>

            <div class="footer-section services">
            <h2>Conception Infographique</h2>
                <ul>
                    <a href="#"><li>Développement Site Internet Vitrine</li></a>
                    <a href="#"><li>Intégration Web</li></a>
                    <a href="#"><li>Création Logo</li></a>
                    <a href="#"><li>Création Flyer & Brochure</li></a>
                </ul>
            </div>

            <div class="footer-section contact-form">
                <h2>Contacts</h2>
         
                <div class="contact">
                    <span><i class="fas fa-phone"></i> +212 6 66 67 16 07</span>
                    <span><i class="fas fa-envelope"></i> contact@tasnimweb.com</span>
                </div>
                <div class="contact">
                    <span><i class="fas fa-map-marker-alt"></i> Rue 14 Amal 2 Imm 2, 3éme Etage N° 8, Sidi Bernoussi - Casablanca</span>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            &copy; 2024 – Tasmim Web. All Rights Reserved.
        </div>
    </footer>
 </>
  );
};

export default Footer;
