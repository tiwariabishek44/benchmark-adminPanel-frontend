// api/api.js

import axios from 'axios';

const BASE_URL = 'https://your-api-base-url.com'; // Change this to your actual API base URL

export const get = async (url, params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, { params });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

// export conts login =async ()