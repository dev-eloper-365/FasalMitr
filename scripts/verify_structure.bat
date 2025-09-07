@echo off
echo Verifying FasalMitraAI Agriculture Management System Structure...
echo.

echo Checking Frontend...
if exist "frontend\package.json" (
    echo ✓ Frontend package.json found
) else (
    echo ✗ Frontend package.json missing
)

if exist "frontend\src\App.jsx" (
    echo ✓ Frontend App.jsx found
) else (
    echo ✗ Frontend App.jsx missing
)

echo.
echo Checking Backend...
if exist "backend\auth_project\manage.py" (
    echo ✓ Django manage.py found
) else (
    echo ✗ Django manage.py missing
)

if exist "backend\auth_project\db.sqlite3" (
    echo ✓ Django database found
) else (
    echo ✗ Django database missing
)

echo.
echo Checking ML Models...
if exist "models\1.keras" (
    echo ✓ Potato model found
) else (
    echo ✗ Potato model missing
)

if exist "models\2.keras" (
    echo ✓ Bell pepper model found
) else (
    echo ✗ Bell pepper model missing
)

if exist "models\3.keras" (
    echo ✓ Tomato model found
) else (
    echo ✗ Tomato model missing
)

if exist "models\4.keras" (
    echo ✓ Pest model found
) else (
    echo ✗ Pest model missing
)

echo.
echo Checking APIs...
if exist "api\main_main.py" (
    echo ✓ Plant disease detection API found
) else (
    echo ✗ Plant disease detection API missing
)

if exist "api\requirements.txt" (
    echo ✓ API requirements.txt found
) else (
    echo ✗ API requirements.txt missing
)

if exist "api\water_level\api_flask.py" (
    echo ✓ Water level prediction API found
) else (
    echo ✗ Water level prediction API missing
)

if exist "api\water_level\water_level_model.joblib" (
    echo ✓ Water level model found
) else (
    echo ✗ Water level model missing
)

echo.
echo Checking Data...
if exist "data\policies\kisan_policies.csv" (
    echo ✓ Agricultural policies data found
) else (
    echo ✗ Agricultural policies data missing
)

echo.
echo Checking Setup Scripts...
if exist "scripts\setup.bat" (
    echo ✓ Setup script found
) else (
    echo ✗ Setup script missing
)

if exist "scripts\start_all.bat" (
    echo ✓ Start all script found
) else (
    echo ✗ Start all script missing
)

if exist "README.md" (
    echo ✓ README.md found
) else (
    echo ✗ README.md missing
)

echo.
echo Structure verification completed!
echo.
echo To set up the project, run: scripts\setup.bat
echo To start all services, run: scripts\start_all.bat
echo.
pause
