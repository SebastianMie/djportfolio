import React, { useState, useEffect } from "react";
import api from "./api";
import { useSpring, animated } from 'react-spring';
import portrait from '../assets/pictures/portrait.jpg';
function Events() {
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(true);

  const { opacity, transform } = useSpring({
    from: { opacity: 0, transform: 'translateX(-150px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 500,
    config: { duration: 1200 }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoResponse = await api.get('/api/events/video1', { responseType: 'arraybuffer' });
        setVideo(URL.createObjectURL(new Blob([videoResponse.data], { type: 'video/mp4' })));

        console.log("Event Mediendaten erfolgreich abgerufen!");
        setLoading(false);
      } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
      }
    };

    fetchData();
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

  if (loading) {
    return <div className="bold-white">Loading...</div>;
  }

  return (
    <div id="events" style={{ marginBottom: '2rem' }}>
      <div className="row-container-center" style={{ marginBottom: '2rem' }}>
      <div className="picture-home1" style={{ marginBottom: '1rem' }}>
        <animated.div style={{ opacity, transform, marginBottom: '1rem' }}>
        <div className="picture-home1">
        <div className="large-bold-white blink" style={{ marginBottom: '1rem' }}>
          Events
        </div>
        <img
              className="picture-home"
              src={portrait}
              alt="portrait"
              style={{marginBottom: '1rem' }}
            />
          <p className="bold-white" style={{ marginBottom: '3rem' }}>
            Thinking Of You II - 28.10.2023
          </p>
        </div>
        </animated.div>
      </div>
        <div className="picture-home2 video-container">
          <video controls autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover', marginTop: '4rem' }}>
            <source src={video} type="video/mp4" />
            Ihr Browser unterstützt das Video-Tag nicht.
          </video>
      </div>
      <div className="picture-home2">
      <p className="bold-white" style={{ marginBottom: '3rem', marginTop: '1rem' }}>
            War of Raw - 14.06.2024
          </p>
          <p className="bold-white" style={{ marginBottom: '3rem' }}>
            Bass Invaderz - 12.07.2024
          </p> 
      </div>
      </div>
    </div>
  );
  
}

export default Events;
