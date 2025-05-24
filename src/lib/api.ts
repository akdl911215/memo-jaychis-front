import axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  timeout: 5000,
});
console.log("api : ", api);

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
