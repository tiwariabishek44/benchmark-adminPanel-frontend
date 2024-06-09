import axios from 'axios'; // Import axios library
import getTokenFromLocalStorage from '../utils/getAccessToken'; // Import function to get access token from local storage
import { clearTokens, getAccessToken, updateAccessToken } from '../utils/tokenUtils'; // Import token utility functions
import { consoleLog } from '../utils/helpers'; // Import consoleLog helper function

// Get base URL from environment variables
const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;

// Create axios instance with base URL and timeout
const apiClient = axios.create({
  baseURL,
  timeout: 120000, // adjust as needed
});

// Middleware to set bearer token
apiClient.interceptors.request.use(
  (config) => {
    const token = getAccessToken(); // Get access token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Set Authorization header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Middleware to refresh expired token
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log("error in intercepter", error.config); // Log error config
    const originalRequest = error.config;
    // Check if the error is due to an expired token
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Call function to refresh the token
        const newToken = await refreshToken();
        updateAccessToken(newToken); // Update access token
        // Update the original request with the new token
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        console.log("error in intercepter1", originalRequest);
        return apiClient(originalRequest);
      } catch (refreshError) {
        // Handle token refresh error, e.g., redirect to login page
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// Function to retrieve the refresh token from local storage
const getRefreshTokenFromLocalStorage = () => {
  return localStorage.getItem('refreshToken');
};

// Function to refresh the token
const refreshToken = async () => {
  const refreshToken = getRefreshTokenFromLocalStorage();

  if (!refreshToken) {
    clearTokens(); // Clear tokens
    // Redirect to the home page or login page if no refresh token is present
    window.location.href = '/?message=Session%20has%20expired.%20Please%20login%21'; // Adjust the URL as needed
  }

  try {
    const apiClient1 = axios.create({
      baseURL,
      timeout: 120000, // adjust as needed
    });
    // Send a request to refresh the token
    const response = await apiClient1.post("/api/open/common/account/access-token/refresh", {
      refreshToken,
    });
    consoleLog(response.data.data.accessToken); // Log new access token
    const newToken = response.data.data.accessToken;
    return newToken;
  } catch (error) {
    // Handle errors, e.g., if the backend returns a 'tokenExpired' status
    if (error.response && error.response.status === 400) {
      clearTokens(); // Clear tokens
      // Redirect to the home page or login page
      window.location.href = '/?message=Session%20has%20expired.%20Please%20login%21'; // Adjust the URL as needed
    }
    // Handle other errors
    throw error;
  }
};

export default apiClient; // Export apiClient instance
