import axios from 'axios';
import { parseCookies } from 'nookies';

const httpClient = axios.create({
  baseURL: 'https://api.checkoutaja.com/v1/',
});

httpClient.interceptors.request.use((config) => {
  const newConfig = config;
  const jwt = parseCookies()['jwt-token'];
  newConfig.headers.Authorization = jwt ? `Bearer ${jwt}` : '<empty>';
  return newConfig;
});

const apiService = httpClient;
export default apiService;
