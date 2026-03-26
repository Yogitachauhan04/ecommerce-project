import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import tt from "/tt.png";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const isValidEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    const { name, email, password } = signupData;

    if (!name || !email || !password) {
      toast.error("All fields are required ❌");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address ❌");
      return;
    }

    try {
      const res = await axios.post(
        "https://api.escuelajs.co/api/v1/users",
        {
          name: name,
          email: email,
          password: password,
          role: "customer",
          avatar: "https://i.pravatar.cc/150"
        }
      );

      console.log("User Created:", res.data);

      toast.success("Account created successfully 🎉");
      navigate("/login");

    } catch (error) {
      toast.error("Signup failed ❌");
      console.log(error);
    }
  };

  return (
    <div className="signup-container">
      <div className="ttimage">
        <img src={tt} alt="shopping" className="sideimage" />
      </div>

      <div className="signup-form">
        <h2>Create an account</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email or phone number"
          onChange={handleChange}
        />

        {signupData.email && !isValidEmail(signupData.email) && (
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
          onClick={handleSignup}
          disabled={signupData.email && !isValidEmail(signupData.email)}
        >
          Create Account
        </button>

        <p className="login-text">
          Already have account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

