import React, { useState, useEffect } from "react";
import api from "./api";
import { useSpring, animated } from 'react-spring';

function Events() {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [video, setVideo] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [currentText, setCurrentText] = useState(' ');
  const [blink, setBlink] = useState(false);
  const [loading, setLoading] = useState(true);

  var text1 = ' ';
  const text2 = 'Events';

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
    const fetchData = async () => {
      try {
        const image1Response = await api.get('/api/events/picture1', { responseType: 'arraybuffer' });
        const image2Response = await api.get('/api/events/picture2', { responseType: 'arraybuffer' });
        const videoResponse = await api.get('/api/events/video1', { responseType: 'arraybuffer' });

        setImage1(`data:image/jpeg;base64,${arrayBufferToBase64(image1Response.data)}`);
        setImage2(`data:image/png;base64,${arrayBufferToBase64(image2Response.data)}`);
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
  }, []);

  function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
}

  const animateText = (text1, text2) => {
    let i = 0;
    setBlink(true);
    const interval = setInterval(() => {
      i++;
      if (i === text1.length) {
        clearInterval(interval);
        animateText2(text2);
      }
    }, 500);
    return () => clearInterval(interval);
  };

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

  if (loading) {
    return <div className="bold-white">Loading...</div>;
  }

  return (
    <div className="home-vh" id="events">
      <div className="row-container-center flex-column align-items-center justify-content-center">
        <animated.div className="row-container-center" style={textAnimation}>
          <div className="picture-home1">
            <div className="large-bold-white animated-text">
              <span className="blink" style={{ borderRight: `2px solid ${blink ? 'white' : 'transparent'}` }}>{currentText}</span>
            </div>
            <div className="home-picture-container">
              <p className="bold-white">
                Thinking Of You II
              </p>
              <p className="bold-white">
                <a href="https://paypal.me/untilbooking">Ticket</a>
              </p>
            </div>
          </div>
        </animated.div>
        <animated.div className="row-container-center" style={imageAnimation}>
        <div className="picture-home1">
          <video controls>
            <source src={video} type="video/mp4" />
            Ihr Browser unterstützt das Video-Tag nicht.
          </video>
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default Events;
