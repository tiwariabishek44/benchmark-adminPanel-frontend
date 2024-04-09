// api/api.js

import axios from 'axios';
import apiClient from '../Respsitory/apiClient';
import { httpClient } from '../Respsitory/httpclient';

const BASE_URL = 'http://192.168.1.69:8080'; // Change this to your actual API base URL

export const postLogin = async (credentials) => {
  try {
    const response = await httpClient.post('/api/open/common/account/common-login', credentials);
    return response.data;
  } catch (error) {
   
  }
};

const handleApiError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // Handle different status codes here
    console.error(`Error: ${error.response.status} - ${error.response.data.message}`);
  } else if (error.request) {
    // The request was made but no response was received
    console.error('No response received:', error.request);
  } else {
    // Something else happened while setting up the request
    console.error('Error:', error.message);
  }
  throw error;
};
