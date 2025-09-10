import React, { useState } from "react";
import "../styles/BellPepper.css";
import axios from "axios";

export default function BellPepper() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const diseaseDetails = {
    "Bacterial Spot": {
      solution: "Use copper-based fungicides and avoid overhead watering.",
      suggestion: "Remove infected leaves and disinfect gardening tools.",
      precaution: "Plant disease-resistant varieties and rotate crops annually.",
    },
    Healthy: {
      solution: "No action required. Keep providing optimal care.",
      suggestion: "Maintain regular watering and nutrient balance.",
      precaution: "Continue monitoring for early signs of disease.",
    },
  };

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    setPrediction(null);
  };

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    setIsLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_ML_API_BASE_URL || 'https://fasalmitr.onrender.com'}/predict/bell_pepper`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data && response.data.class && response.data.confidence) {
        setPrediction({
          disease: response.data.class,
          confidence: (response.data.confidence * 100).toFixed(2),
        });
      } else {
        setPrediction(null);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      setPrediction(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setImage(null);
    setPrediction(null);
  };

  return (
    <div className="bellpepper-main">
      <div className="bellpepper">
        <h2>Bell Pepper Disease Detection</h2>
        <p>Upload an image of a bell pepper plant to detect diseases:</p>
        <input
          type="file"
          id="fileUpload"
          accept="image/*"
          capture="environment"
          onChange={(event) => {
            handleImageChange(event);
            handleUpload(event);
          }}
        />
        <label htmlFor="fileUpload" className="file-label">Choose an Image</label>

        {image && <img src={image} alt="Bell Pepper preview" className="preview-image" />}

        {isLoading && (
          <div>
            <p>Detecting Disease...</p>
            <div className="progress-bar">
              <div></div>
            </div>
          </div>
        )}

        {prediction && (
          <div className="prediction-result">
            <h3>Prediction:</h3>
            <p><strong>Predicted Disease:</strong> {prediction.disease}</p>
            <p><strong>Confidence:</strong> {prediction.confidence}%</p>
            
            <p><strong>Solution:</strong> {diseaseDetails[prediction.disease]?.solution || "No information available."}</p>
            <p><strong>Suggestion:</strong> {diseaseDetails[prediction.disease]?.suggestion || "No information available."}</p>
            <p><strong>Precaution:</strong> {diseaseDetails[prediction.disease]?.precaution || "No information available."}</p>
            
            <button className="retry-button" onClick={handleRetry}>Retry</button>
          </div>
        )}
      </div>
    </div>
  );
}
