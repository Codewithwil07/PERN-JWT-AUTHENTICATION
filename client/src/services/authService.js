import axios from 'axios';

const API_URL = 'http://localhost:5000/auth/';

const register = (name, email, password) => {
  return axios.post(API_URL + 'register', {
    name,
    email,
    password,
  });
};

export default {
  register,
};
