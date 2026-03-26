import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import tt from "/tt.png";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./store/authSlice";
const Login = () => {

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const isValidEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {

    const { email, password } = loginData;

    if (!email || !password) {
      toast.error("Email and password required ❌");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Invalid email format ❌");
      return;
    }

    try {

      const res = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          email: email,
          password: password
        }
      );

      console.log("Login Success:", res.data);

      // token save
      localStorage.setItem("token", res.data.access_token);
      dispatch(
  loginSuccess({
    email: email,
    token: res.data.access_token,
  })
);
      toast.success("Login successful 🎉");

      navigate("/");

    } catch (error) {

      toast.error("Invalid email or password ❌");
      console.log(error);

    }
  };

  return (
    <div className="signup-container">

      <div className="ttimage">
        <img src={tt} alt="shopping" className="sideimage1" />
      </div>

      <div className="signup-form">

        <h2>Log in</h2>
        <p>Welcome back! Enter your details</p>

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        {loginData.email && !isValidEmail(loginData.email) && (
          <p className="error-text">Invalid email format</p>
        )}

        <div className="password-field">

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />

          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>

        </div>

        <button
          className="create-account-button"
          onClick={handleLogin}
          disabled={loginData.email && !isValidEmail(loginData.email)}
        >
          Log In                                                                                         
        </button>

        <p className="login-text">
          Don't have account? <Link to="/signup">Create account</Link>
        </p>

      </div>

    </div>
  );
};

export default Login;