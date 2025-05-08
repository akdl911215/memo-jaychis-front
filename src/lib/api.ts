import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000, // 5s timeout
});

// Request interceptor (e.g. inject auth token)
api.interceptors.request.use((config) => {
  // const token = localStorage.getItem('token');
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Response interceptor (global error handling)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // handle 401, 500, etc.
    console.error("API Error:", error.response?.status, error.message);
    return Promise.reject(error);
  }
);

export default api;
