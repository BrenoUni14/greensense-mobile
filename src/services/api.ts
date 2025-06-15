import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080', // Altere conforme IP do backend
});

export default api;