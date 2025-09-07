#!/bin/bash
# Quick deployment script for Render
# This script helps prepare your project for Render deployment

echo "🚀 Preparing FasalMitra for Render deployment..."

# Check if we're in the right directory
if [ ! -f "README.md" ]; then
    echo "❌ Please run this script from the project root directory"
    exit 1
fi

echo "✅ Project structure verified"

# Check if all required files exist
echo "🔍 Checking required files..."

required_files=(
    "api/main_main.py"
    "api/water_level/api_flask.py"
    "backend/auth_project/manage.py"
    "api/requirements.txt"
    "models/1.keras"
    "models/2.keras"
    "models/3.keras"
    "models/4.keras"
    "api/water_level/water_level_model.joblib"
)

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file is missing"
        exit 1
    fi
done

echo "✅ All required files present"

# Check file sizes (warn about large files)
echo "📊 Checking file sizes..."
large_files=$(find . -name "*.keras" -o -name "*.joblib" -o -name "*.jpg" -o -name "*.png" | xargs ls -lh | awk '$5 ~ /[0-9]+M/ {print $5, $9}')

if [ ! -z "$large_files" ]; then
    echo "⚠️  Large files detected:"
    echo "$large_files"
    echo "💡 Consider using Git LFS for files > 100MB"
fi

echo "🎯 Deployment preparation complete!"
echo ""
echo "Next steps:"
echo "1. Push your code to GitHub"
echo "2. Go to render.com and create 3 web services:"
echo "   - Plant Disease API (FastAPI)"
echo "   - Water Level API (Flask)"  
echo "   - Auth API (Django)"
echo "3. Use the configuration from RENDER_DEPLOYMENT_GUIDE.md"
echo "4. Set environment variables from render-env-vars.txt"
echo ""
echo "📚 Read RENDER_DEPLOYMENT_GUIDE.md for detailed instructions"
