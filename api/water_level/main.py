import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error
import joblib
import numpy as np

# Load the dataset
file_path = f"C:/Users/black\Desktop/DeepLearningproject/managment/Crop_recommendation.csv"  # Replace with your actual file path
data = pd.read_csv(file_path)

# Generate a synthetic 'water_level' column based on existing features
np.random.seed(42)
data['water_level'] = (
    0.5 * data['temperature'] +
    0.3 * (100 - data['humidity']) +
    0.2 * data['rainfall'] +
    np.random.normal(0, 5, len(data))  # Add some randomness for variability
).clip(0, 100)  # Clip values between 0 and 100 to simulate percentage

# Prepare features and target
features = ['temperature', 'humidity', 'rainfall', 'ph', 'N', 'P', 'K']
target = 'water_level'

X = data[features]
y = data[target]

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a Random Forest Regressor
model = RandomForestRegressor(random_state=42)
model.fit(X_train, y_train)

# Evaluate the model
y_pred = model.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
print(f"Mean Squared Error: {mse:.2f}")

# Save the trained model
model_filename = "water_level_model.joblib"
joblib.dump(model, model_filename)
print(f"Model saved as {model_filename}")



