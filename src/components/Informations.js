import React from "react";
import djalps5 from '../assets/pictures/djalps5.jpeg';
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';


function Informations() {
  const [showImage, setShowImage] = useState(false);
  const [currentText, setCurrentText] = useState(' ');
  const [blink,setBlink] = useState(false);

  var text1 = ' ';
  const text2 = 'IInformation';

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
    <div className="home-vh" id="information">
     <div className="row-container-center flex-column align-items-center justify-content-center">
        <animated.div className="row-container-center" style={textAnimation}>
            <div className="picture-home1">
            <div className="large-bold-white animated-text">
                <span className="blink" style={{ borderRight: `2px solid ${blink ? 'white' : 'transparent'}`} }>{currentText}</span>
              </div>
              <div className="home-picture-container">
              <p className="bold-white">
              Mein Traum ist es, meine lebenslange Leidenschaft,
              <br />
              elektronische Musik mit anderen zu teilen und zu fühlen.
              </p>
              <p className="bold-white">
              Ich konnte bereits bei einigen privaten Events, Partys und Jobs meine Fähigkeiten als DJ verbessern.
              Am liebsten lege ich melodische elektronische Musik auf, bin allerdings flexibel.
              Melde dich gerne bei mir.
              </p>
              </div>
            </div>
          </animated.div>
          <animated.div className="my-12 row-container-center" style={imageAnimation}>
              <img
                className="picture-home object-cover"
                src={djalps5}
                alt="djalps5"
                onLoad={() => setShowImage(true)}
                style={{ opacity: showImage ? 1 : 0 }}
              />
        </animated.div>
      </div>
    </div>
  );
}

export default Informations;
