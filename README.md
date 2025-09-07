# FasalMitraAI - Agriculture Management System

A comprehensive agriculture management system with AI-powered plant disease detection, pest identification, water level prediction, and smart irrigation management.

## Project Structure

```
agriculture_consolidated/
├── frontend/                 # React/Vite frontend application
├── backend/                  # Django authentication server
├── api/                      # ML APIs and services
│   ├── main_main.py         # FastAPI for plant disease detection
│   ├── requirements.txt     # Python dependencies
│   └── water_level/         # Flask API for water level prediction
├── models/                   # Trained ML models (.keras files)
├── data/                     # Data files and policies
│   └── policies/            # Agricultural policies and data
├── scripts/                  # Setup and deployment scripts
└── README.md                # This file
```

## Features

### Frontend (React/Vite)
- Modern responsive UI with Tailwind CSS
- Plant disease detection interface
- Pest identification system
- Water level and irrigation management
- Climate prediction dashboard
- Farm profitability calculator
- Machine rental marketplace
- Agricultural policy information

### Backend Services

#### 1. Authentication Server (Django)
- User registration and login
- JWT token-based authentication
- User management system
- Database: SQLite

#### 2. Plant Disease Detection API (FastAPI)
- Potato disease detection
- Bell pepper disease detection
- Tomato disease detection
- Pest identification
- Uses TensorFlow/Keras models

#### 3. Water Level Prediction API (Flask)
- Smart irrigation recommendations
- Water requirement calculations
- Environmental factor analysis

## Prerequisites

- Python 3.8+
- Node.js 16+
- npm or yarn

## Quick Setup

### 1. Install Dependencies

#### Frontend
```bash
cd frontend
npm install
```

#### Backend (Django Auth Server)
```bash
cd backend/auth_project
pip install django djangorestframework django-cors-headers
```

#### ML APIs
```bash
cd api
pip install -r requirements.txt
```

### 2. Run the Services

#### Start Frontend (Port 3000)
```bash
cd frontend
npm run dev
```

#### Start Django Auth Server (Port 8000)
```bash
cd backend/auth_project
python manage.py runserver
```

#### Start Plant Disease Detection API (Port 8002)
```bash
cd api
python main_main.py
```

#### Start Water Level Prediction API (Port 5000)
```bash
cd api/water_level
python api_flask.py
```

## API Endpoints

### Plant Disease Detection (FastAPI - Port 8002)
- `POST /predict/potato` - Potato disease detection
- `POST /predict/bell_pepper` - Bell pepper disease detection
- `POST /predict/tomato` - Tomato disease detection
- `POST /predict/pest` - Pest identification
- `GET /ping` - Health check

### Water Level Prediction (Flask - Port 5000)
- `POST /predict` - Water level prediction
- `GET /` - Health check

### Authentication (Django - Port 8000)
- `POST /api/auth/register/` - User registration
- `POST /api/auth/login/` - User login
- `GET /api/auth/users/` - Get users (protected)

## Model Information

The system uses pre-trained TensorFlow/Keras models:
- `1.keras` - Potato disease detection
- `2.keras` - Bell pepper disease detection  
- `3.keras` - Tomato disease detection
- `4.keras` - Pest identification

## Data Files

- `Crop_recommendation.csv` - Crop recommendation data
- `water_level_model.joblib` - Water level prediction model
- `kisan_policies.csv` - Agricultural policies data

## Development

### Frontend Development
```bash
cd frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Backend Development
```bash
cd backend/auth_project
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

## Deployment

Use the provided setup scripts in the `scripts/` directory for automated deployment:

- `setup.bat` - Windows setup script
- `start_all.bat` - Start all services
- `requirements.txt` - Python dependencies

## Troubleshooting

1. **Port Conflicts**: Ensure ports 3000, 5000, 8000, and 8002 are available
2. **Model Loading**: Ensure all .keras model files are in the `models/` directory
3. **Dependencies**: Install all required Python packages from requirements.txt
4. **Database**: Django uses SQLite by default, no additional setup required

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team.
