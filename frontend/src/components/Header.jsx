import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.png"; // Make sure to replace this with the correct path to your logo file

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // AUTHENTICATION COMMENTED OUT - Logout functionality disabled
  /*
  const handleLogout = () => {
    onLogout();  // Call the logout function passed as a prop
    navigate("/auth");  // Redirect to the login page
  };
  */

  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Fasal Mitra Logo" className="logo" />
      </div>
      <nav className={`nav-links ${isMenuOpen ? "nav-open" : ""}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/chatbot" onClick={() => setIsMenuOpen(false)}>ChatBot</Link>
        <Link to="/smart-irrigation" onClick={() => setIsMenuOpen(false)}>Smart Irrigation</Link>
        <Link to="/ai-pest-detection" onClick={() => setIsMenuOpen(false)}>AI Pest Detection</Link>
        <Link to="/climate-prediction" onClick={() => setIsMenuOpen(false)}>Climate Prediction</Link>
        <Link to="/machine-rental" onClick={() => setIsMenuOpen(false)}>Machine Rental</Link>
        <Link to="/plant-disease-detection" onClick={() => setIsMenuOpen(false)}>Plant Disease</Link>
        <Link to="/policy" onClick={() => setIsMenuOpen(false)}>Policies</Link>
        {/* AUTHENTICATION COMMENTED OUT - Login/logout buttons removed */}
        {/* {isAuthenticated ? (
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/auth" onClick={() => setIsMenuOpen(false)}>Login</Link>
        )} */}
      </nav>
    </header>
  );
}

export default Header;