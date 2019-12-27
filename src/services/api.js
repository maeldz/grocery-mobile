import axios from 'axios';

const api = axios.create({
  baseURL: 'https://grocery-store-online.herokuapp.com',
});

export default api;
