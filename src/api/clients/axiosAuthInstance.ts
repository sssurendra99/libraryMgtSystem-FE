import axios from "axios";

export const axiosAuthInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
});

// using this to put the token in the header.

axiosAuthInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`; // Assuming your token is a Bearer token
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);