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
    <div className="row-container-center align-items-center justify-content-center">
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
          </div>
          </animated.li>
        ))}
        </ul>
    </div>
    </div> 
    <div className="sm:col-span-12 md:col-span-12 lg:col-span-12 flex">
    <animated.div className="row-container-center" style={imageAnimation}>
            <img
                className="picture-home"
                src={djalpshome}
                alt="djalpshome"
                onLoad={() => setShowImage(true)}
                style={{ opacity: showImage ? 1 : 0 }}
              />
    </animated.div>
    </div>
  </div>
  </div>
  );
}

export default Genres;
