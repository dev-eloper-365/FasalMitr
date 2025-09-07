// AUTHENTICATION COMMENTED OUT - Signup component disabled
/*
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Auth.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL || 'https://fasalmitr.onrender.com'}/api/register/`, {
        username,
        email,
        password,
        phone,
        dob,
        gender,
        address,
      });
      localStorage.setItem("authToken", response.data.token);
      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
        />
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          placeholder="Date of Birth"
        />
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          rows="3"
        />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <Link to="/auth">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
*/

// Placeholder component since auth is disabled
import React from "react";

const Signup = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Registration Disabled</h2>
      <p>This feature has been temporarily disabled.</p>
    </div>
  );
};

export default Signup;