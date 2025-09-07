# Environment Variables Setup

This document explains how to configure environment variables for the FasalMitra frontend application.

## Environment Variables

The application uses the following environment variables:

### API Configuration
- `VITE_API_BASE_URL`: Main API base URL (default: https://fasalmitr.onrender.com)
- `VITE_ML_API_BASE_URL`: ML Model API base URL (default: https://fasalmitr.onrender.com)
- `VITE_POLICY_API_BASE_URL`: Policy API base URL (default: https://fasalmitr.onrender.com)

### External API Keys
- `VITE_OPENWEATHER_API_KEY`: OpenWeatherMap API key for weather data
- `VITE_WEATHER_API_KEY`: WeatherAPI key for weather data
- `VITE_GROQ_API_KEY`: Groq API key for AI chatbot functionality

## Setup Instructions

1. **Copy the example file:**
   ```bash
   cp .env.example .env
   ```

2. **Edit the .env file** with your actual API keys and URLs:
   ```env
   # For production (default)
   VITE_API_BASE_URL=https://fasalmitr.onrender.com
   VITE_ML_API_BASE_URL=https://fasalmitr.onrender.com
   VITE_POLICY_API_BASE_URL=https://fasalmitr.onrender.com

   # For local development (uncomment these and comment out production URLs)
   # VITE_API_BASE_URL=http://localhost:8000
   # VITE_ML_API_BASE_URL=http://localhost:8002
   # VITE_POLICY_API_BASE_URL=http://127.0.0.1:5000

   # Add your actual API keys
   VITE_OPENWEATHER_API_KEY=your_actual_openweather_api_key
   VITE_WEATHER_API_KEY=your_actual_weather_api_key
   VITE_GROQ_API_KEY=your_actual_groq_api_key
   ```

3. **Restart the development server** after making changes to environment variables:
   ```bash
   npm run dev
   ```

## Switching Between Environments

### For Production
Use the production URLs (default):
```env
VITE_API_BASE_URL=https://fasalmitr.onrender.com
VITE_ML_API_BASE_URL=https://fasalmitr.onrender.com
VITE_POLICY_API_BASE_URL=https://fasalmitr.onrender.com
```

### For Local Development
Comment out production URLs and uncomment localhost URLs:
```env
# VITE_API_BASE_URL=https://fasalmitr.onrender.com
VITE_API_BASE_URL=http://localhost:8000

# VITE_ML_API_BASE_URL=https://fasalmitr.onrender.com
VITE_ML_API_BASE_URL=http://localhost:8002

# VITE_POLICY_API_BASE_URL=https://fasalmitr.onrender.com
VITE_POLICY_API_BASE_URL=http://127.0.0.1:5000
```

## Security Notes

- Never commit the `.env` file to version control
- The `.env` file is already included in `.gitignore`
- For production deployments, set environment variables in your hosting platform
- Consider moving sensitive API keys to the backend for better security

## API Endpoints

The application makes calls to the following endpoints:

### Authentication
- `POST /api/login/` - User login
- `POST /api/register/` - User registration

### ML Models
- `POST /predict/pest` - Pest detection
- `POST /predict/tomato` - Tomato disease detection
- `POST /predict/bell_pepper` - Bell pepper disease detection
- `POST /predict/potato` - Potato disease detection

### Policy
- `GET /api/policy` - Government policies data

### External APIs
- OpenWeatherMap API for weather data
- WeatherAPI for weather data
- Groq API for AI chatbot responses
