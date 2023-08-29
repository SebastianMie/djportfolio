import axios from 'axios';

let baseURL;

if (window.location.hostname === "localhost") {
  baseURL = 'http://localhost:3001';
} else {
  baseURL = (window.location.protocol === 'https:') ? 
      'https://untildj.site:3002' : 
      'http://untildj.site:3001';
}

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true
});

export default instance;
