import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

http.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
});

http.interceptors.response.use(
  (response: AxiosResponse) => { 
    return Promise.resolve(response.data);
  },
  (error: AxiosError) => { 
    console.log(error);
  }
);

export default http;