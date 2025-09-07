"use client";

import React, { useState, useEffect } from 'react';
import Header from './Header';
import '../styles/Policy.css';

export default function Policy() {
  const [policyHTML, setPolicyHTML] = useState("");

  const fetchPolicyData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_POLICY_API_BASE_URL || 'https://fasalmitr.onrender.com'}/api/policy`);
      const data = await response.json();
      setPolicyHTML(data.webpage_html || "No data available");
    } catch (error) {
      console.error("Error fetching policy data: ", error);
    }
  };

  useEffect(() => {
    fetchPolicyData();
    const interval = setInterval(fetchPolicyData, 600000); // Update every 10 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      
      <div className="policy">
        <h1>Policy Updates</h1>
        <div dangerouslySetInnerHTML={{ __html: policyHTML }} />
      </div>
    </div>
  );
}
