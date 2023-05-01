import React from 'react';
import { useState, useEffect } from 'react';
import djalpshome from '../assets/pictures/djalpshomesmall.jpg';
import { Link } from 'react-scroll';
import { useSpring, animated } from 'react-spring';

function Home() {
  const [showImage, setShowImage] = useState(false);
  const [currentText, setCurrentText] = useState(' ');
  const [showText, setShowText] = useState(true);
  const [showSecondText, setShowSecondText] = useState(false);
  
  var text1 = ' ';
  const text2 = 'UUNTIL';

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
    config: { duration: 1000 }
  });

  const buttonAnimation = useSpring({
    to: { transform: 'translateY(0)', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' },
    from: { transform: 'translateY(10px)', boxShadow: 'none' },
    config: { tension: 500, friction: 50 }
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
    <div className="home-vh" id="home">
      <div className="row-container-center flex sm:flex-col md:flex-row">
        <div className="sm:col-span-6 md:col-span-6 lg:col-span-12">
          
          <animated.div style={textAnimation}>
            <div className="home-picture-container">
              <div className="large-bold-white animated-text">
                <span className="blink">I AM {currentText}</span>
              </div>
              <div className="mt-8">
              <Link
                to="contact"
                smooth="true"
                duration={500}
                offset={-60}
              >
                <animated.button
                  style={buttonAnimation}
                  className="animated-button-fill"
                ><span className="bold-white">Kontakt</span></animated.button>
              </Link>
              <Link
                to="information"
                smooth="true"
                duration={500}
                offset={-60}
              >
                <animated.button
                  style={buttonAnimation}
                  className="animated-button-fill"
                ><span className="bold-white">Infos</span></animated.button>
              </Link>
              </div>
            </div>
          </animated.div>
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

export default Home;
