import axios, { AxiosInstance } from 'axios';

const http: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
  },
});

export default http;
