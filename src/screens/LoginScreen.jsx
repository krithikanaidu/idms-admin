import React, { useState } from "react";
import "../styles/LoginScreen.css";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";

const LoginScreen = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "idms1" && password === "260104") {
      setLoading(true);

      // Simulate a login delay
      setTimeout(() => {
        setLoading(false);
        onLogin(); // Optional: only if needed by parent
        navigate("/sales"); // Navigate after delay
      }, 1500);
    } else {
      setError("Invalid username or password");
    }
  };

  return loading ? (
    <div className="loader-wrapper">
      <DotLoader color= "#ff33a6" size={100} />
    </div>
  ) : (
    <div className="login-bg fade">
      <div className="login-card">
        <div className="login-left">
          <img src={logo} alt="logo" className="login-logo" />
        </div>
        <div className="login-right">
          <h2 className="login-title">Welcome to IDMS Infotech</h2>
          <h2 className="login-subtitle">
            Integrated Digital Management System
          </h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">
                Username <span className="required">*</span>
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your ID"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">
                Password <span className="required">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message text-red-500">{error}</p>}
            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
          <div className="login-footer">
            <p>
              Forgot your password? <a href="/">Reset Password</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
