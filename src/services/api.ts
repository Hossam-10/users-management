import { useDynamicCookie } from '@/composables/useDynamicCookie';
import axios from 'axios';
import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const { getCookie: getUserCookie } = useDynamicCookie("user");
// Create the Axios instance
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // const user = getUserCookie();
    // if (user?.token) {
    //   (config.headers as Record<string, string>)['Authorization'] = `Bearer ${user.token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access (e.g., redirect to login)
      console.error('Unauthorized, redirecting...');
    }
    return Promise.reject(error);
  }
);

export default api;
