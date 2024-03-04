import React, { useState, useEffect, useCallback } from 'react';
import djalpshome from '../assets/pictures/djalpshomesmall.jpg';
import { Link } from 'react-scroll';
import { useSpring, animated, useTrail } from 'react-spring';
import api from "./api";
import { faInstagram, faSoundcloud, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Home() {
  const [showImage, setShowImage] = useState(false);
  const [currentText, setCurrentText] = useState(' ');
  const [blink, setBlink] = useState(false);
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(true);
  
  const text1 = ' ';
  const text2 = 'UUNTIL';

  const contacts = [
    {
      id: 1,
      icon: faInstagram,
      url: 'https://www.instagram.com/until.dj/'
    },
    {
      id: 2,
      icon: faSoundcloud,
      url: 'https://soundcloud.com/untildj'
    },
    {
      id: 3,
      icon: faTiktok,
      url: 'https://www.tiktok.com/@until.dj'
    },
    {
      id: 4,
      icon: faYoutube,
      url: 'https://youtube.com/@UNTIL_DJ'
    }
  ];

  const trail = useTrail(contacts.length, {
    from: { opacity: 0, transform: 'translateX(150px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    delay: 1500,
    config: { duration: 1200 }
  });

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
    const fetchData = async () => {
      try {
        const videoResponse = await api.get('/api/events/video2', { responseType: 'arraybuffer' });
        setVideo(URL.createObjectURL(new Blob([videoResponse.data], { type: 'video/mp4' })));
        console.log("Mediendaten erfolgreich abgerufen!");
        setLoading(false);
      } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
      }
    };
    fetchData();
 
    const timeout = setTimeout(() => {
      animateText(text1, text2);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [text1, text2, animateText]);

  if (loading) {
    return <div className="bold-white">Loading...</div>;
  }

  return (
    <div id="home" style={{ marginBottom: '2rem' }}>
      <div className="row-container-center flex-column align-items-center" style={{ justifyContent: 'space-between' }}>
      <animated.div className="row-container-center" style={imageAnimation}>
      <div className="picture-home2 video-container">
          <video controls autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'fill' }}>
            <source src={video} type="video/mp4" />
            Ihr Browser unterstützt das Video-Tag nicht.
          </video>
         </div>
      </animated.div>
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
            <div className=" mt-8">
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
            <div className="row-containe-center" style={{ marginBottom: '1rem' }}>
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
            <img
              className="picture-home"
              src={djalpshome}
              alt="djalpshome"
              onLoad={() => setShowImage(true)}
              style={{ opacity: showImage ? 1 : 0,  marginBottom: '2rem' }}
            />
          </animated.div>
      </div>
    </div>
  );  
}

export default Home;
