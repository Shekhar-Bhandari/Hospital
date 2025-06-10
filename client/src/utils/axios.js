
import axios from 'axios';

const API = axios.create({
  baseURL: 'https://hospital-3u6v.onrender.com/api'
});

export default API;

