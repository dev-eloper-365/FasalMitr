@echo off
echo Setting up FasalMitraAI Agriculture Management System...
echo.

echo Installing Frontend Dependencies...
cd frontend
call npm install
if %errorlevel% neq 0 (
    echo Error installing frontend dependencies
    pause
    exit /b 1
)
cd ..

echo.
echo Installing Backend Dependencies...
cd backend\auth_project
pip install django djangorestframework django-cors-headers
if %errorlevel% neq 0 (
    echo Error installing backend dependencies
    pause
    exit /b 1
)
cd ..\..

echo.
echo Installing ML API Dependencies...
cd api
pip install -r requirements.txt
if %errorlevel% neq 0 (
    echo Error installing ML API dependencies
    pause
    exit /b 1
)
cd ..

echo.
echo Installing Water Level API Dependencies...
cd api\water_level
pip install flask flask-cors joblib scikit-learn
if %errorlevel% neq 0 (
    echo Error installing water level API dependencies
    pause
    exit /b 1
)
cd ..\..

echo.
echo Setting up Django Database...
cd backend\auth_project
python manage.py makemigrations
python manage.py migrate
cd ..\..

echo.
echo Setup completed successfully!
echo.
echo To start all services, run: start_all.bat
echo.
pause
