/*
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export default API;
*/

import axios from "axios";

const BASE_URL = "https://movie-platform-1.onrender.com/api/v1/user";

const registerUser = (data) => {
  return axios.post(`${BASE_URL}/register`, data);
};

const loginUSer = (data) => {
  return axios.post(`${BASE_URL}/login`, data);
};

const AuthServices = { registerUser, loginUSer };

export default AuthServices;
