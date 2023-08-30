import React from 'react';
import { useSpring, animated } from 'react-spring';
import ContactForm from './ContactForm';

function Contact() {
  
  return (
    <div id="contact" style={{ marginBottom: '2rem' }}>
      <div className="row-container-center flex sm:flex-col md:flex-row">
      <div className="picture-home1">
          <div className="row-container-center align-items-center justify-content-center" style={{ marginBottom: '2rem' }}>
          <div className="large-bold-white blink" style={{ marginBottom: '1rem' }}>
          Kontakt
        </div>
          <animated.div style={{ marginBottom: '2rem' }}>
            <div className="home-picture-container">
              <ContactForm />
            </div>
          </animated.div>
          </div>   
        </div>
        </div>
    </div>
  );
}

export default Contact;



