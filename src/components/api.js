import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://untildj.site:3001',
  withCredentials: true
});


export default instance;
