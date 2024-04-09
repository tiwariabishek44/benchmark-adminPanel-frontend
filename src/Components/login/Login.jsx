import { postLogin } from "../../API/apicall";
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { setTokens } from "../../utils/tokenUtils";


const Login = () => {
  const [status, setstatus] = useState('')
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Get a specific query parameter value
  const paramValue = queryParams.get('message');


  const changeHandeler = (e) => {
    setloginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
   
    // Send login request to the API with static login credentials
    const response = await postLogin(loginData);
    if(!response){
      return; 
    }
   setTokens(response.data.accessToken,response.data.refreshToken);
   navigate("admin-panel/")
 
};
  

  return (
    <div className="login">
      <div className="login-container">
        {paramValue!=null && ( <div className="login-message">
            {paramValue}
            </div>)}
       
        <h1>Login</h1>
        <form className="login-fields">
          <input
            value={loginData.email}
            name="email"
            onChange={changeHandeler}
            type="email"
            placeholder="Email Address"
          />
          <input
            value={loginData.password}
            name="password"
            onChange={changeHandeler}
            type="password"
            placeholder="Password"
          />
          <button onClick={handleClick}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;