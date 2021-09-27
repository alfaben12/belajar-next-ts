import axios from 'axios';
import nookies, { parseCookies } from 'nookies';

export default function apiService(ctx) {
  const httpClient = axios.create({
    baseURL: 'https://api.checkoutaja.com/v1/',
  });

  const cookies = nookies.get(ctx);
  let jwt = cookies['jwt-token'];
  if (jwt === undefined) {
    jwt = parseCookies()['jwt-token'];
  }

  httpClient.interceptors.request.use((config) => {
    const newConfig = config;
    newConfig.headers.Authorization = jwt ? `Bearer ${jwt}` : '<empty>';
    return newConfig;
  });

  return httpClient;
}