import React from "react";
import './ContactSection.css';

const ContactSection = () => {
  return (
    <>
      <div className="ContactSection" id="#ContactSection">
        <div className="Title">
          <h2 className="mobile-title">AVEZ-VOUS UN PROJET WEB À DÉVELOPPER?</h2>
        </div>
        <div className="container">
          <form action="#">
            <div className="form-row">
              <div className="input-data">
                <input type="text" required />
                <div className="underline"></div>
                <label>Nom Complet</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <input type="email" required />
                <div className="underline"></div>
                <label>Adresse email</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data">
                <input type="email" required />
                <div className="underline"></div>
                <label>Téléphone</label>
              </div>
            </div>
            <div className="form-row">
              <div className="input-data textarea">
                <textarea rows="8" cols="80" required></textarea>
                <div className="underline"></div>
                <label>Message</label>
              </div>
            </div>
            <div className="form-row submit-btn">
              <div className="input-data">
                <input type="submit" value="Envoyer" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
