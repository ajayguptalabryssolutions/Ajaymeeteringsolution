import axios from 'axios';

// Create an Axios instance with default config
const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // Change to your API base URL
//   timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    // Add other global headers if needed
  },
});

const getToken = () => localStorage.getItem('token');

// Optional: Add interceptors for auth, error handling, etc.
api.interceptors.request.use(
  config => {
    // Example: Attach token if available
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => response,
  error => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

const userManagement = {

       UserById : (id)=> api.get("user",id)
}



const meterManagement = {
    getAllMeters: () => api.get('/meter'),
}

export {userManagement, meterManagement}