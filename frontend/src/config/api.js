// API Configuration
const API_CONFIG = {
  // Main API base URL
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://fasalmitr.onrender.com',
  
  // ML Model API base URL
  ML_BASE_URL: import.meta.env.VITE_ML_API_BASE_URL || 'https://fasalmitr.onrender.com',
  
  // Policy API base URL
  POLICY_BASE_URL: import.meta.env.VITE_POLICY_API_BASE_URL || 'https://fasalmitr.onrender.com',
  
  // External API Keys
  OPENWEATHER_API_KEY: import.meta.env.VITE_OPENWEATHER_API_KEY || 'your_openweather_api_key_here',
  WEATHER_API_KEY: import.meta.env.VITE_WEATHER_API_KEY || 'your_weather_api_key_here',
  GROQ_API_KEY: import.meta.env.VITE_GROQ_API_KEY || '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',
  
  // API Endpoints
  ENDPOINTS: {
    // Authentication endpoints
    LOGIN: '/api/login/',
    REGISTER: '/api/register/',
    
    // ML Model endpoints
    PEST_PREDICTION: '/predict/pest',
    TOMATO_PREDICTION: '/predict/tomato',
    BELL_PEPPER_PREDICTION: '/predict/bell_pepper',
    POTATO_PREDICTION: '/predict/potato',
    
    // Policy endpoint
    POLICY: '/api/policy',
  }
};

// Helper functions for API calls
export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};

export const getMlApiUrl = (endpoint) => {
  return `${API_CONFIG.ML_BASE_URL}${endpoint}`;
};

export const getPolicyApiUrl = (endpoint) => {
  return `${API_CONFIG.POLICY_BASE_URL}${endpoint}`;
};

export default API_CONFIG;
