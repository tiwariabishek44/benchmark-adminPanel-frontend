// utils/auth.js

// Function to retrieve the token from local storage
const getTokenFromLocalStorage = () => {
    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('accessToken');
  
      // Check if the token is present
      if (token) {
        return token;
      } else {
        // Handle the case where the token is not present
        
        return null;
      }
    } catch (error) {
      // Handle potential errors (e.g., localStorage not supported)
      console.error('Error retrieving token from local storage:', error.message);
      return null;
    }
  };
  
  export default getTokenFromLocalStorage;
  