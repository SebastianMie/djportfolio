import React from 'react';
import tatto4 from '../assets/pictures/tatto4.png';

function Contact() {
  return (
    <div className="home-outer top-to-bottom-colorflow">
      <div className="row-container-center">
        <div className="col-span-12 flex">
          <div className="home-picture-container">
            <img className="picture-home" src={tatto4} alt="tatto4" />
          </div>
        </div>
        <div className="margin-left col-span-12 flex">
          <div className="home-text-container">
          <h1 className="large-bold-white">Contact Me</h1>
          <ul className="bold-white">
          <li><a href="mailto:until.booking@gmail.com" className="hover:text-gray-400">until.booking@gmail.com</a></li>
          <li><a href="https://www.instagram.com/until.dj/" target="_blank" rel="noopener noreferrer"><i className="bold-white text-gray-400 hover:text-gray-600">-Instagram: https://www.instagram.com/until.dj/</i></a></li>
          <li><a href="https://soundcloud.com/untildj" target="_blank" rel="noopener noreferrer"><i className="bold-white text-gray-400 hover:text-gray-600">-Soundcloud: https://www.instagram.com/until.dj/</i></a></li>
          <li><a href="https://www.tiktok.com/@until.dj" target="_blank" rel="noopener noreferrer"><i className="bold-white text-gray-400 hover:text-gray-600">-TikTok: https://www.tiktok.com/@until.dj</i></a></li>
          <li><a href="https://youtube.com/@UNTIL_DJ" target="_blank" rel="noopener noreferrer"><i className="bold-white text-gray-400 hover:text-gray-600">-Youtube: https://youtube.com/@UNTIL_DJ</i></a></li>
          </ul>
          </div>
    </div> 
  </div>
  </div>
  );
}

export default Contact;






