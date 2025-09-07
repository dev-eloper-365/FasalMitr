from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from joblib import load

app = Flask(__name__)
CORS(app, origins=["https://*.onrender.com", "http://localhost:3000"])

# Load the trained model
model = load("water_level_model.joblib")


@app.route('/')
def home():
    return "Water Level Prediction API is running!"


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        print("Received data:", data)

        # Extract and prepare features for prediction
        features = [
            float(data['temperature']),
            float(data['humidity']),
            float(data['rainfall']),
            float(data['ph']),
            float(data['N']),
            float(data['P']),
            float(data['K'])
        ]

        input_data = np.array(features).reshape(1, -1)
        prediction = model.predict(input_data)  # Prediction is liters/m²/day

        land_area = float(data['land_area'])  # Land area in m²

        # Calculate realistic water usage
        daily_water_requirement = round(prediction[0] * land_area, 2)
        weekly_water_requirement = round(daily_water_requirement * 7, 2)

        # Cap the maximum daily prediction for practical use
        daily_water_requirement = min(daily_water_requirement, 100000)  # Adjust the cap as needed

        print(f"Predicted daily water requirement: {daily_water_requirement} liters")
        print(f"Predicted weekly water requirement: {weekly_water_requirement} liters")

        return jsonify({
            'daily_prediction': f"{daily_water_requirement} liters/day",
            'weekly_prediction': f"{weekly_water_requirement} liters/week"
        })

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 400


if __name__ == '__main__':
    import os
    port = int(os.environ.get("PORT", 5000))
    host = os.environ.get("HOST", "0.0.0.0")
    debug = os.environ.get("FLASK_ENV") != "production"
    app.run(host=host, port=port, debug=debug)
