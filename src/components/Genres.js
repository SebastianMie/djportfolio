import React, { useState, useEffect } from 'react';
import { useSpring, animated, useTrail } from 'react-spring';

function Genres() {
  const [currentText, setCurrentText] = useState('Genres');
  const [blink, setBlink] = useState(true);

  const contacts = [
    {
      id: 1,
      genre: 'Techno',
      bpm: '130-160 BPM',
    },
    {
      id: 2,
      genre: 'Hard Dance',
      bpm: '150-200+ BPM'
    },
    {
      id: 3,
      genre: 'DnB',
      bpm: '170-180 BPM'
    },
    {
      id: 4,
      genre: 'Psytrance',
      bpm: '130-170 BPM',
    }
  ];

  const trail = useTrail(contacts.length, {
    from: { opacity: 0, transform: 'translateX(-150px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    delay: 1500,
    config: { duration: 1200 }
  });

  const textAnimation = useSpring({
    to: { opacity: 1, transform: 'translateX(0)' },
    from: { opacity: 0, transform: 'translateX(-150px)' },
    delay: 500,
    config: { duration: 1200 },
    onRest: () => setBlink(false)
  });

  return (
    <div id="genres" style={{ marginBottom: '2rem' }}>
      <div className="row-container-center align-items-center justify-content-center">
        
          <div className="picture-home1">
            <animated.div style={textAnimation}>
              <div className="large-bold-white animated-text">
                <span className="blink" style={{ borderRight: `2px solid ${blink ? 'white' : 'transparent'}`} }>{currentText}</span>
              </div>
            </animated.div>
            <ul>
              {trail.map((animation, index) => (
                <animated.li key={contacts[index].id} style={animation}>
                  <div className="card">
                    <h1 className="white">{contacts[index].genre}</h1>
                    <h1 className="white">{contacts[index].bpm}</h1>
                  </div>
                </animated.li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Genres;


