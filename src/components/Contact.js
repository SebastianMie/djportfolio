import React from 'react';
import { useState, useEffect } from 'react';
import tunnel_1 from '../assets/pictures/tunnel_2.PNG';
import { useSpring, animated, useTrail } from 'react-spring';

function Contact() {

  const [showImage, setShowImage] = useState(false);
  const [currentText, setCurrentText] = useState(' ');
  const [showText, setShowText] = useState(true);
  const [showSecondText, setShowSecondText] = useState(false);
  
  var text1 = ' ';
  const text2 = 'KKontakt';

  const contacts = [
    {
      id: 1,
      title: 'Mail:',
      url: 'until.booking@gmail.com'
    },
    {
      id: 2,
      title: 'Instagram:',
      url: 'https://www.instagram.com/until.dj/'
    },
    {
      id: 3,
      title: 'Soundcloud:',
      url: 'https://soundcloud.com/untildj'
    },
    {
      id: 4,
      title: 'TikTok:',
      url: 'https://www.tiktok.com/@until.dj'
    },
    {
      id: 5,
      title: 'Youtube:',
      url: 'https://youtube.com/@UNTIL_DJ'
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
    <div className="home-vh" id="contact">
      <div className="row-container-center flex sm:flex-col md:flex-row">
        <div className="sm:col-span-6 md:col-span-6 lg:col-span-12">
        
            <div className="home-picture-container">
            <animated.div style={textAnimation}>
              <div className="large-bold-white animated-text">
                <span className="blink">{currentText}</span>
              </div>
            </animated.div>
              <ul>
              {trail.map((animation, index) => (
              <animated.li key={contacts[index].id} style={animation}>
                <div className="card">
                <a href={contacts[index].url} target="_blank" rel="noopener noreferrer">
                <h1 className="white">{contacts[index].title}</h1>
                <span className="white">{contacts[index].url}</span>
              </a>
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
                src={tunnel_1}
                alt="tunnel_1"
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

export default Contact;






