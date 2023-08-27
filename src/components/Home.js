import React, { useState, useEffect, useCallback } from 'react';
import djalpshome from '../assets/pictures/djalpshomesmall.jpg';
import { Link } from 'react-scroll';
import { useSpring, animated } from 'react-spring';

function Home() {
  const [showImage, setShowImage] = useState(false);
  const [currentText, setCurrentText] = useState(' ');
  const [blink, setBlink] = useState(false);

  const text1 = ' ';
  const text2 = 'UUNTIL';

  const imageAnimation = useSpring({
    to: { opacity: 1, transform: 'translateX(0px)' },
    from: { opacity: 0, transform: 'translateX(+150px)' },
    delay: 500,
    config: { duration: 1200 },
  });

  const textAnimation = useSpring({
    to: { opacity: 1, transform: 'translateX(0)' },
    from: { opacity: 0, transform: 'translateX(-150px)' },
    delay: 500,
    config: { duration: 1200 },
  });

  const buttonAnimation = useSpring({
    to: { transform: 'translateY(0)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' },
    from: { transform: 'translateY(10px)', boxShadow: 'none' },
    config: { tension: 500, friction: 50 },
  });

  const animateText = useCallback((text1, text2) => {
    let i = 0;
    setBlink(true);
    const interval = setInterval(() => {
      console.log(text1);
      i++;
      if (i === text1.length) {
        clearInterval(interval);
        animateText2(text2);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const animateText2 = (text2) => {
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
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      animateText(text1, text2);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [text1, text2, animateText]);

  return (
    <div className="home1-vh" id="home">
      <div className="row-container-center flex-column align-items-center justify-content-center">
        <animated.div className="row-container-center" style={textAnimation}>
          <div className="picture-home1">
            <div className="xlarge-bold-white animated-text">
              <span
                className="blink"
                style={{
                  borderRight: `2px solid ${
                    blink ? "white" : "transparent"
                  }`,
                }}
              >
                I AM {currentText}
              </span>
            </div>
            <div className="row-container mt-8">
              <Link to="events" smooth="true" duration={500} offset={-70}>
                <animated.button
                  style={buttonAnimation}
                  className="animated-button-fill mr-10"
                >
                  <span className="large-bold-white">Events</span>
                </animated.button>
              </Link>
              <Link to="contact" smooth="true" duration={500} offset={-70}>
                <animated.button
                  style={buttonAnimation}
                  className="animated-button-fill"
                >
                  <span className="large-bold-white">Kontakt</span>
                </animated.button>
              </Link>
            </div>
          </div>
        </animated.div>
          <animated.div className="my-12 row-container-center" style={imageAnimation}>
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
  );  
}

export default Home;
