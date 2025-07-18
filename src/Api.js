import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api",
});

// Add auth token to every request if exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
