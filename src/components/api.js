import axios from 'axios';

let baseURL;

if (window.location.hostname === "localhost") {
  baseURL = 'http://localhost:3002';
} else {
  baseURL = (window.location.protocol === 'https:') ? 
      'https://untildj.site:3003' : 
      'http://untildj.site:3002';
}

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true
});

export default instance;
