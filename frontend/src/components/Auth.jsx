// AUTHENTICATION COMMENTED OUT - Auth component disabled
/*
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

const Auth = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/login/", { username, password });
      localStorage.setItem("authToken", response.data.token); // Store the actual token
      onLogin();
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Signup</Link></p>
    </div>
  );
};

export default Auth;
*/

// Placeholder component since auth is disabled
import React from "react";

const Auth = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Authentication Disabled</h2>
      <p>This feature has been temporarily disabled.</p>
    </div>
  );
};

export default Auth;