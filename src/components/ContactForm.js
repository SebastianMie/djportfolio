import React, { useState } from 'react';
import api from './api'; // Passe den Pfad zu deiner api.js-Datei an

function ContactForm() {
  const [formStatus, setFormStatus] = useState('Abschicken');

  const onSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');

    const { email, message } = e.target.elements;
    const formData = {
      email: email.value,
      message: message.value,
    };

    try {
      await api.post('/api/send-email', formData); // Verwende die konfigurierte Axios-Instanz
      setFormStatus('E-Mail erfolgreich gesendet');
    } catch (error) {
      console.error(error);
      setFormStatus('Fehler beim Senden der E-Mail');
    }
  };

  return (
    <div className="row-container-center align-items-center justify-content-center">
      <h2 className="large-bold-white mb-3">Kontakt Formular</h2>
      <form onSubmit={onSubmit}>
        <div className="row-container mb-3 pt-3">
          <label className="bold-white form-label" htmlFor="email">
            Email    
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="row-container mb-3 pt-3">
          <label className="bold-white form-label" htmlFor="message">
            Nachricht
          </label>
          <textarea className="form-area" id="message" required />
        </div>
        <button className="bold-white btn-submit" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
