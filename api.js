import axios from 'axios';
const API_ROOT = 'http://localhost:4000'; // prod: https://api.muzifay.example.com
export default axios.create({ baseURL: API_ROOT, timeout: 15000 });
