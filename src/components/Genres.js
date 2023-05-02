import React from "react";
import djalpshome from '../assets/pictures/tatto_drip.png';
import { useState, useEffect } from 'react';
import { useSpring, animated, useTrail } from 'react-spring';


function Genres() {
  const [showImage, setShowImage] = useState(false);
  const [currentText, setCurrentText] = useState(' ');
  const [showText, setShowText] = useState(true);
  const [blink, setBlink] = useState(false);

  var text1 = ' ';
  const text2 = 'GGenres';

  const contacts = [
    {
      id: 1,
      genre: 'DnB',
      bpm: '170-180 BPM',
      beschreibung: 'Charakteristischer Drum und Bass Rythmus'
    },
    {
      id: 2,
      genre: 'Harderstyles',
      bpm: '150-200+ BPM',
      beschreibung: 'Charakteristische Bass Kicks und melodische Elemente'
    },
    {
      id: 3,
      genre: 'Hardtekk',
      bpm: '170-190 BPM',
      beschreibung: 'Charakteristische kürzere Techno Bass Kicks und melodische Elemente'
    },
    {
      id: 4,
      genre: 'Psytrance',
      bpm: '130-170 BPM',
      beschreibung: 'Charakteristische Psytrance Bass Kicks und melodische Elemente'
    },
    {
      id: 5,
      genre: 'Techno',
      bpm: '130-160 BPM',
      beschreibung: 'Charakteristische Bass Kicks'
    }
  ];

  const trail = useTrail(contacts.length, {
    from: { opacity: 0, transform: 'translateX(-150px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    delay: 500,
    config: { duration: 1200 }
  });

  const imageAnimation = useSpring({
    to: { opacity: 1, transform: 'translateX(0px)' },
    from: { opacity: 0, transform: 'translateX(+150px)' },
    delay: 500,
    config: { duration: 1200 }
  });

  const textAnimation = useSpring({
    to: { opacity: 1, transform: 'translateX(0)' },
    from: { opacity: 0, transform: 'translateX(-150px)' },
    delay: 500,
    config: { duration: 1200 }
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      animateText(text1, text2);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const animateText = (text1, text2) => {
    let i = 0;
    setBlink(true);
    const interval = setInterval(() => {
      console.log(text1);
      i++;
      if ( i === text1.length) {
        clearInterval(interval);
        animateText2(text2);
        setShowText(false);
      }
    }, 500);
    return () => clearInterval(interval);
  };

  const animateText2 = (text2) => {
   {
      setCurrentText('');
      let j = 0;
      const interval = setInterval(() => {
        setCurrentText((text) => text + text2[j]);
        j++;
        if (j === text2.length - 1) {
          setBlink(false);
          clearInterval(interval);
        }
      }, 500);
    }
  };

  return (
    <div className="home-vh" id="genres">
    <div className="row-container-center flex sm:flex-col md:flex-row">
    <div className="sm:col-span-6 md:col-span-6 lg:col-span-12 items-center">
    <div className="home-picture-container">
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
          <h1 className="white">{contacts[index].beschreibung}</h1>
          </div>
          </animated.li>
        ))}
        </ul>
    </div>
    </div> 
    <div className="sm:col-span-6 md:col-span-6 lg:col-span-12 flex">
    <animated.div style={imageAnimation}>
        <div className="picture-home rounded-full overflow-hidden">
            <img
                className="picture-home object-cover"
                src={djalpshome}
                alt="djalpshome"
                onLoad={() => setShowImage(true)}
                style={{ opacity: showImage ? 1 : 0 }}
              />
        </div>
    </animated.div>
    </div>
  </div>
  </div>
  );
}

export default Genres;
