# Render Deployment Guide for FasalMitra APIs

This guide will help you deploy your FasalMitra APIs to Render.com for production hosting.

## Prerequisites

1. **Render Account**: Sign up at [render.com](https://render.com)
2. **GitHub Repository**: Your code should be pushed to GitHub
3. **Model Files**: Ensure all ML model files are included in your repository

## Services Overview

Your project has 3 separate API services that need to be deployed:

1. **Plant Disease Detection API** (FastAPI) - `api/main_main.py`
2. **Water Level Prediction API** (Flask) - `api/water_level/api_flask.py`  
3. **Authentication API** (Django) - `backend/auth_project/`

## Deployment Steps

### Step 1: Deploy Plant Disease Detection API (FastAPI)

1. **Go to Render Dashboard**
   - Log in to your Render account
   - Click "New +" → "Web Service"

2. **Connect Repository**
   - Connect your GitHub repository
   - Select the repository containing your FasalMitra project

3. **Configure Service**
   - **Name**: `fasalmitra-plant-disease-api`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r api/requirements.txt`
   - **Start Command**: `cd api && python main_main.py`
   - **Plan**: Starter (Free tier)

4. **Environment Variables**
   ```
   PYTHON_VERSION=3.11.0
   PORT=10000
   HOST=0.0.0.0
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Note the service URL (e.g., `https://fasalmitra-plant-disease-api.onrender.com`)

### Step 2: Deploy Water Level Prediction API (Flask)

1. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect the same GitHub repository

2. **Configure Service**
   - **Name**: `fasalmitra-water-level-api`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install flask flask-cors joblib scikit-learn numpy pandas`
   - **Start Command**: `cd api/water_level && python api_flask.py`
   - **Plan**: Starter (Free tier)

3. **Environment Variables**
   ```
   PYTHON_VERSION=3.11.0
   PORT=10000
   FLASK_ENV=production
   HOST=0.0.0.0
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment
   - Note the service URL (e.g., `https://fasalmitra-water-level-api.onrender.com`)

### Step 3: Deploy Authentication API (Django)

1. **Create New Web Service**
   - Click "New +" → "Web Service"
   - Connect the same GitHub repository

2. **Configure Service**
   - **Name**: `fasalmitra-auth-api`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install django djangorestframework django-cors-headers`
   - **Start Command**: `cd backend/auth_project && python manage.py migrate && python manage.py runserver 0.0.0.0:$PORT`
   - **Plan**: Starter (Free tier)

3. **Environment Variables**
   ```
   PYTHON_VERSION=3.11.0
   PORT=10000
   DEBUG=False
   ALLOWED_HOSTS=*
   SECRET_KEY=your-secret-key-here
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment
   - Note the service URL (e.g., `https://fasalmitra-auth-api.onrender.com`)

## API Endpoints After Deployment

### Plant Disease Detection API
- **Base URL**: `https://fasalmitra-plant-disease-api.onrender.com`
- **Endpoints**:
  - `GET /ping` - Health check
  - `POST /predict/potato` - Potato disease detection
  - `POST /predict/bell_pepper` - Bell pepper disease detection
  - `POST /predict/tomato` - Tomato disease detection
  - `POST /predict/pest` - Pest identification

### Water Level Prediction API
- **Base URL**: `https://fasalmitra-water-level-api.onrender.com`
- **Endpoints**:
  - `GET /` - Health check
  - `POST /predict` - Water level prediction

### Authentication API
- **Base URL**: `https://fasalmitra-auth-api.onrender.com`
- **Endpoints**:
  - `POST /api/auth/register/` - User registration
  - `POST /api/auth/login/` - User login
  - `GET /api/auth/users/` - Get users (protected)

## Frontend Configuration

Update your frontend to use the deployed API URLs:

```javascript
// Update API base URLs in your frontend
const API_BASE_URLS = {
  plantDisease: 'https://fasalmitra-plant-disease-api.onrender.com',
  waterLevel: 'https://fasalmitra-water-level-api.onrender.com',
  auth: 'https://fasalmitra-auth-api.onrender.com'
};
```

## Important Notes

### Free Tier Limitations
- **Sleep Mode**: Free services sleep after 15 minutes of inactivity
- **Cold Start**: First request after sleep takes ~30 seconds
- **Build Time**: 90 minutes per month
- **Bandwidth**: 100GB per month

### Production Considerations
1. **Environment Variables**: Use Render's environment variables for sensitive data
2. **Database**: Consider upgrading to a paid PostgreSQL database for production
3. **Monitoring**: Set up health checks and monitoring
4. **SSL**: HTTPS is automatically provided by Render

### Troubleshooting

#### Common Issues:
1. **Build Failures**: Check Python version compatibility
2. **Model Loading Errors**: Ensure model files are in the correct path
3. **CORS Issues**: Verify CORS settings in your API files
4. **Memory Issues**: Large models might need paid plans

#### Debug Steps:
1. Check Render logs for error messages
2. Test endpoints using curl or Postman
3. Verify environment variables are set correctly
4. Check file paths in your code

## Cost Estimation

- **Free Tier**: $0/month (with limitations)
- **Starter Plan**: $7/month per service (recommended for production)
- **Total Cost**: $21/month for all 3 services on Starter plan

## Next Steps

1. Deploy all 3 services following the steps above
2. Test each API endpoint
3. Update your frontend to use the new URLs
4. Set up monitoring and alerts
5. Consider upgrading to paid plans for better performance

## Support

- Render Documentation: [render.com/docs](https://render.com/docs)
- Render Community: [community.render.com](https://community.render.com)
- GitHub Issues: Create issues in your repository for project-specific problems
