


import apiClient from "./apiClient";
import store from "../Components/redux/store";
import { changeErrorMessage } from "../Components/redux/slice";


apiClient.interceptors.response.use(
    (response) => {
      // If the response is successful, return it
      return response;
    },
    (error) => {
     
       
      // If the error has a response and a message, set the error state
      if (error.response && error.response.data && error.response.data.message) {
        store.dispatch( changeErrorMessage({ errorMessage: error.response.data.message}));
        console.error("api error: ", error.response.data)
      } else {
        // If the error doesn't have a response or message, set a generic error message
        store.dispatch( changeErrorMessage({ errorMessage: 'An error occurred while processing your request.'}));
        console.error("api error: An error occurred while processing your request.")
      }

      // Pass the error to the next catch block
     return Promise.reject(error)
    }
  );


export {apiClient as httpClient};
