import { useAuthStore } from "@store/auth/authStore";
import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLICAPI_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
    }
    return Promise.reject(error);
  },
);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
