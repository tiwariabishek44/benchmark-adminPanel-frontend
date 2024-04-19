import { postLogin } from "../../API/apicall";  // Import postLogin function from API
import { useState } from 'react';  // Import useState hook from React
import { useLocation, useNavigate } from 'react-router-dom';  // Import useLocation and useNavigate hooks from react-router-dom
import './Login.css';  // Import CSS file for styling
import { setTokens } from "../../utils/tokenUtils";  // Import setTokens function from tokenUtils

const Login = () => {
  const [status, setstatus] = useState('');  // State for status (not used in current code)
  const [loginData, setloginData] = useState({  // State for login form data
    email: "",
    password: "",
  });

  const location = useLocation();  // Get location object from react-router-dom
  const queryParams = new URLSearchParams(location.search);  // Get query parameters from URL

  // Get message query parameter value
  const paramValue = queryParams.get('message');

  // Function to handle input change in login form
  const changeHandeler = (e) => {
    setloginData({ ...loginData, [e.target.name]: e.target.value });  // Update loginData state with new input value
  };

  const navigate = useNavigate();  // Get navigate function from react-router-dom

  // Function to handle login button click
  const handleClick = async (e) => {
    e.preventDefault();  // Prevent default form submission behavior

    // Send login request to the API with loginData
    const response = await postLogin(loginData);

    // If response is received
    if (response) {
      // Set tokens in local storage using setTokens function
      setTokens(response.data.accessToken, response.data.refreshToken);
      // Navigate to specified route (admin-panel/course)
      navigate("admin-panel/course");
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        {/* Render message if paramValue is not null */}
        {paramValue != null && (
          <div className="login-message">
            {paramValue}
          </div>
        )}

        <h1>Login</h1>
        <form className="login-fields">
          {/* Input field for email */}
          <input
            value={loginData.email}
            name="email"
            onChange={changeHandeler}
            type="email"
            placeholder="Email Address"
          />
          {/* Input field for password */}
          <input
            value={loginData.password}
            name="password"
            onChange={changeHandeler}
            type="password"
            placeholder="Password"
          />
          {/* Button to submit login form */}
          <button onClick={handleClick}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
