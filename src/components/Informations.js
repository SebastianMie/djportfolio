import React from "react";
import djalps5 from '../assets/pictures/djalps5.jpeg';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useSpring, animated } from 'react-spring';


function Informations() {
  const [showImage, setShowImage] = useState(false);
  const [currentText, setCurrentText] = useState(' ');
  const [showText, setShowText] = useState(true);
  const [showSecondText, setShowSecondText] = useState(false);
  
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
    animateText(text1, text2);
  }, [text1]);

  const animateText = (text1, text2) => {
    let i = 0;
    const interval = setInterval(() => {
      console.log(text1);
      i++;
      if ( i === text1.length) {
        clearInterval(interval);
          setShowSecondText(true);
          setShowText(false);
      }
    }, 500);
    return () => clearInterval(interval);
  };

  useEffect(() => {
    if (showSecondText) {
      setCurrentText('');
      let j = 0;
      const interval = setInterval(() => {
        setCurrentText((text) => text + text2[j]);
        j++;
        if (j === text2.length - 1) {
          clearInterval(interval);
        }
      }, 500);
    }
  }, [showSecondText]);
  return (
    <div className="home-vh" id="information">
      <div className="row-container-center flex sm:flex-col md:flex-row">
        <div className="sm:col-span-6 md:col-span-6 lg:col-span-12 items-center">
        <animated.div style={textAnimation}>
            <div className="home-picture-container">
              <div className="large-bold-white animated-text">
                <span className="blink">{currentText}</span>
              </div>
              <div className="home-picture-container">
              <p className="bold-white">
              Mein Traum ist es, meine lebenslange Leidenschaft,
              <br />
              elektronische Musik mit anderen zu teilen und zu fühlen :)
              </p>
              <br />
              <p className="bold-white">
              Ich konnte bereits bei einigen privaten Events, Partys und Jobs verschiedenster Art meine Fähigkeiten als DJ verbessern.
              <br />
              Am liebsten lege ich melodische elektronische Musik auf, bin allerdings flexibel.
              <br />
              Falls du fragen hast melde dich gerne bei mir.
              </p>
              </div>
            </div>
          </animated.div>
        </div>
        <div className="sm:col-span-6 md:col-span-6 lg:col-span-12 flex">
          <animated.div style={imageAnimation}>
            <div className="picture-home rounded-full overflow-hidden">
              <img
                className="picture-home object-cover"
                src={djalps5}
                alt="djalps5"
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

export default Informations;
