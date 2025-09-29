import axios from "axios";
import type {
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Interceptors
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // Ví dụ: gắn token từ localStorage (nếu có)
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res: AxiosResponse) => res,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Optional: redirect to login or show toast
      console.warn("Unauthorized!");
    }
    return Promise.reject(error);
  }
);

export default api;
