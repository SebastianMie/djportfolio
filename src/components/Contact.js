import React from 'react';

function Contact() {
  return (
    <div className="home-outer">
      <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="large-bold-white">Contact Me</h1>
        <ul className="bold-white">
        <li><a href="mailto:until.booking@gmail.com" className="hover:text-gray-400">until.booking@gmail.com</a></li>
        <li><a href="https://www.instagram.com/until.dj/" target="_blank" rel="noopener noreferrer"><i className="bold-white text-gray-400 hover:text-gray-600">-Instagram</i></a></li>
        <li><a href="https://soundcloud.com/untildj" target="_blank" rel="noopener noreferrer"><i className="bold-white text-gray-400 hover:text-gray-600">-Soundcloud</i></a></li>
        <li><a href="https://www.tiktok.com/@until.dj" target="_blank" rel="noopener noreferrer"><i className="bold-white text-gray-400 hover:text-gray-600">-TikTok</i></a></li>
        <li><a href="https://youtube.com/@UNTIL_DJ" target="_blank" rel="noopener noreferrer"><i className="bold-white text-gray-400 hover:text-gray-600">-Youtube</i></a></li>
      </ul>
      </div>
    </div>
  );
}

export default Contact;






