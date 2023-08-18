import axios from 'axios';

// Erstelle eine Instanz von Axios mit deiner API-URL und anderen Optionen
const instance = axios.create({
  baseURL: 'http://localhost:3001', // Hier die URL deines Backend-Servers eintragen
});

export default instance;
