import React from 'react';
import { Link } from "react-router-dom";
import "../styles/MachineRental.css";
import lenderImage from "../assets/lender.jpg";  
import receiverImage from "../assets/receiver.jpg";  

export default function MachineRental() {
  return (
    <div className="machine-rental-page">
      <h1 className="page-title">Machine Rental Marketplace</h1>
      <p className="page-description">
        Revolutionizing farming equipment rentals for the modern generation. Connect, share, and grow.
      </p>

      <div className="split-container">
        {/* Lender Section */}
        <div className="split-section lender">
          <Link to="/machine-rental/lender">
            <img src={lenderImage} alt="Lender" className="section-image" />
            <div className="overlay">
              <h2>Lender</h2>
              <p>Monetize your unused farming equipment. Become a lender and earn extra income.</p>
            </div>
          </Link>
        </div>

        {/* Receiver Section */}
        <div className="split-section receiver">
          <Link to="/machine-rental/receiver">
            <img src={receiverImage} alt="Receiver" className="section-image" />
            <div className="overlay">
              <h2>Receiver</h2>
              <p>Need equipment for a short period? Rent nearby farming machines at affordable rates.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
