// Login.js

import React from 'react';
import { postLogin } from './../../API/apicall';

const Login = () => {
  // Static login credentials
  const loginData = {
  email:"keshab.tripathi@gmail.com",
  password:"1234567890"
}
  // Handler for button click
  const handleClick = async () => {
    try {
      // Send login request to the API with static login credentials
      const response = await postLogin(loginData);
      console.log('Login successful:', response);
      // Handle successful login (e.g., redirect to dashboard)
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login failure (e.g., display error message to the user)
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
