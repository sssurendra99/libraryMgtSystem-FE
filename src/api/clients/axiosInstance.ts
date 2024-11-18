import axios from 'axios'

// This is a anonymous client

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
});


// React query. - has included the caching here.
// Tanstack - 

// For the error handling.

// use the error boundaries. (Global error handling.)
