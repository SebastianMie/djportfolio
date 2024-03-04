import axios from 'axios';

let baseURL;

if (window.location.hostname === "localhost") {
  baseURL = 'http://localhost:3001';
} else {
  baseURL = (window.location.protocol === 'https:') ? 
      'http://untildj.site:3001' : 
      'http://untildj.site:3001';
}

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true
});

export default instance;
