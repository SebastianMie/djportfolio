import React, { useState, useEffect } from "react";
import api from "./api";
import { useSpring, animated } from 'react-spring';

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

        console.log("Mediendaten erfolgreich abgerufen!");
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
    <div className="home-vh" id="events">
      <div className="row-container-center flex-column align-items-center justify-content-center">
      <div className="picture-home1">
        <animated.div style={{ opacity, transform, marginBottom: '2rem' }}>
          <div className="large-bold-white blink">Events</div>
        </animated.div>

        <div className="row-container-center" style={{ marginBottom: '2rem' }}>
          <div className="picture-home1">
            <p className="bold-white" style={{ marginBottom: '1rem' }}>
              Thinking Of You II
            </p>
            <p className="bold-white">
              <a href="https://paypal.me/untilbooking" target="_blank" rel="noopener noreferrer"> --Paypal Ticket Link-- </a>
            </p>
          </div>
        </div>

        <div className="row-container-center" style={{ marginBottom: '2rem' }}>
          <div className="picture-home1">
            <video controls autoPlay loop muted style={{ maxWidth: '100%' }}>
              <source src={video} type="video/mp4" />
              Ihr Browser unterstützt das Video-Tag nicht.
            </video>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}

export default Events;
