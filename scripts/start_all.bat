@echo off
echo Starting FasalMitraAI Agriculture Management System...
echo.

echo Starting Django Authentication Server (Port 8000)...
start "Django Auth Server" cmd /k "cd backend\auth_project && python manage.py runserver"

echo Waiting 3 seconds...
timeout /t 3 /nobreak >nul

echo Starting Plant Disease Detection API (Port 8002)...
start "Plant Disease API" cmd /k "cd api && python main_main.py"

echo Waiting 3 seconds...
timeout /t 3 /nobreak >nul

echo Starting Water Level Prediction API (Port 5000)...
start "Water Level API" cmd /k "cd api\water_level && python api_flask.py"

echo Waiting 3 seconds...
timeout /t 3 /nobreak >nul

echo Starting Frontend Development Server (Port 3000)...
start "Frontend Server" cmd /k "cd frontend && npm run dev"

echo.
echo All services are starting...
echo.
echo Services will be available at:
echo - Frontend: http://localhost:3000
echo - Django Auth: http://localhost:8000
echo - Plant Disease API: http://localhost:8002
echo - Water Level API: http://localhost:5000
echo.
echo Press any key to exit...
pause >nul
