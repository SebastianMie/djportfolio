import React, { useState, useEffect } from 'react';
import { useSpring, animated, useTrail } from 'react-spring';
import ContactForm from './ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faSoundcloud, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Contact() {

  const [currentText, setCurrentText] = useState(' ');
  const [blink, setBlink] = useState(false);
  
  const text2 = 'Kontakt ';

  const contacts = [
    {
      id: 1,
      icon: faEnvelope,
      url: 'mailto:until.booking@gmail.com'
    },
    {
      id: 2,
      icon: faInstagram,
      url: 'https://www.instagram.com/until.dj/'
    },
    {
      id: 3,
      icon: faSoundcloud,
      url: 'https://soundcloud.com/untildj'
    },
    {
      id: 4,
      icon: faTiktok,
      url: 'https://www.tiktok.com/@until.dj'
    },
    {
      id: 5,
      icon: faYoutube,
      url: 'https://youtube.com/@UNTIL_DJ'
    }
  ];

  const trail = useTrail(contacts.length, {
    from: { opacity: 0, transform: 'translateX(-150px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    delay: 1500,
    config: { duration: 1200 }
  });

  return (
    <div className="home2-vh" id="contact">
      <div className="row-container-center flex sm:flex-col md:flex-row">
        <div className="sm:col-span-6 md:col-span-6 lg:col-span-12">
          <div className="row-container-center align-items-center justify-content-center">
          <animated.div className="row-container-center" style={{ marginBottom: '1rem' }}>
            <div className="home-picture-container">
              <ContactForm />
            </div>
          </animated.div>
            <div className="row-container" style={{ marginBottom: '1rem' }}>
              <ul className="contact-list">
                {trail.map((animation, index) => (
                  <animated.li key={contacts[index].id} style={animation} className="contact-item bold-white">
                    <div className="card">
                      <a href={contacts[index].url} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={contacts[index].icon} size="2x" />
                      </a>
                    </div>
                  </animated.li>
                ))}
              </ul>
            </div>
          </div>   
        </div>
        </div>
    </div>
  );
}

export default Contact;



