import React from 'react';
import tatto4 from '../assets/pictures/landscape.png';

function Contact() {
  return (
    <div className="home-outer top-to-bottom-colorflow">
      <div className="row-container-center flex sm:flex-col md:flex-row">
        <div className="sm:col-span-6 md:col-span-6 lg:col-span-12 flex">
          <div className="home-picture-container">
            <img className="picture-home" src={tatto4} alt="tatto4" />
          </div>
        </div>
        <div className="sm:col-span-6 md:col-span-6 lg:col-span-12 items-center">
          <div className="home-picture-container">
          <h1 className="large-bold-white">Kontakt</h1>
          <ul className="bold-white">
          <li><a href="mailto:until.booking@gmail.com" className="hover:text-gray-400"><h1>Mail:</h1>until.booking@gmail.com</a></li>
          <li><a href="https://www.instagram.com/until.dj/" target="_blank" rel="noopener noreferrer"><i className="bold-white text-gray-400 hover:text-gray-600"><h1>Instagram:</h1> https://www.instagram.com/until.dj/</i></a></li>
          <li><a href="https://soundcloud.com/untildj" target="_blank" rel="noopener noreferrer"><i className="bold-white text-gray-400 hover:text-gray-600"><h1>Soundcloud:</h1> https://www.instagram.com/until.dj/</i></a></li>
          <li><a href="https://www.tiktok.com/@until.dj" target="_blank" rel="noopener noreferrer"><i className="bold-white text-gray-400 hover:text-gray-600"><h1>TikTok:</h1> https://www.tiktok.com/@until.dj</i></a></li>
          <li><a href="https://youtube.com/@UNTIL_DJ" target="_blank" rel="noopener noreferrer"><i className="bold-white text-gray-400 hover:text-gray-600"><h1>Youtube:</h1> https://youtube.com/@UNTIL_DJ</i></a></li>
          </ul>
          </div>
    </div> 
  </div>
  </div>
  );
}

export default Contact;






