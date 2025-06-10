
import axios from "axios";

const BASE_URL = "https://hospital-3u6v.onrender.com/api";

const registerUser = (data) => {
  return axios.post(`${BASE_URL}/register`, data);
};

const loginUser = (data) => {
  return axios.post(`${BASE_URL}/login`, data);
};

const AuthServices = { registerUser, loginUser };

export default AuthServices;
