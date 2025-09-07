import React, { useState } from 'react';
import '../styles/tomato.css';
import axios from 'axios';

export default function Potato() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const diseaseDetails = {
    "Bacterial Spot": {
      solution: "Use copper-based fungicides and avoid overhead watering.",
      suggestion: "Remove infected leaves and disinfect gardening tools.",
      precaution: "Plant disease-resistant varieties and rotate crops annually."
    },
    "Early Blight": {
      solution: "Apply fungicides containing chlorothalonil or mancozeb.",
      suggestion: "Remove affected leaves and improve air circulation.",
      precaution: "Avoid wetting leaves when watering and practice crop rotation."
    },
    "Late Blight": {
      solution: "Use copper-based fungicides and destroy infected plants.",
      suggestion: "Monitor weather conditions for high humidity.",
      precaution: "Plant resistant varieties and ensure good drainage."
    },
    "Leaf Mold": {
      solution: "Apply sulfur or copper-based fungicides.",
      suggestion: "Improve ventilation and avoid high humidity.",
      precaution: "Clean greenhouse regularly and avoid overcrowding plants."
    },
    "Septoria Leaf Spot": {
      solution: "Use fungicides like chlorothalonil or copper-based products.",
      suggestion: "Remove infected foliage and avoid splashing water on leaves.",
      precaution: "Practice crop rotation and ensure proper plant spacing."
    },
    "Spider Mites Two Spotted Spider": {
      solution: "Apply insecticidal soap or neem oil.",
      suggestion: "Increase humidity around plants to deter mites.",
      precaution: "Inspect plants regularly and avoid plant stress."
    },
    "Target Spot": {
      solution: "Apply fungicides with azoxystrobin or mancozeb.",
      suggestion: "Remove and destroy affected plant parts.",
      precaution: "Maintain healthy soil and avoid excessive nitrogen."
    },
    "Yellow Leaf Curl Virus": {
      solution: "Remove infected plants and control whiteflies.",
      suggestion: "Use reflective mulch to repel insects.",
      precaution: "Plant virus-resistant varieties and monitor for vector insects."
    },
    "Mosaic virus": {
      solution: "Remove and destroy infected plants.",
      suggestion: "Disinfect tools and control aphids.",
      precaution: "Plant virus-free seeds and avoid tobacco near plants."
    },
    "Healthy": {
      solution: "No action required. Keep providing optimal care.",
      suggestion: "Maintain regular watering and nutrient balance.",
      precaution: "Continue monitoring for early signs of disease."
    }
  };

  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    setPrediction(null); // Reset prediction for new image
  };

  const handleUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    setIsLoading(true);

    try {
      const response = await axios.post(`${import.meta.env.VITE_ML_API_BASE_URL || 'https://fasalmitr.onrender.com'}/predict/tomato`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (response.data && response.data.class && response.data.confidence) {
        setPrediction({
          disease: response.data.class,
          confidence: (response.data.confidence * 100).toFixed(2)
        });
      } else {
        setPrediction(null);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
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
    <div className="tomato-main">
    <div className="tomato">
      <h2>Tomato Disease Detection</h2>
      <p>Upload an image of a tomato plant to detect diseases:</p>
      <input 
        type="file" 
        id="fileUpload" 
        accept="image/*" 
        onChange={(event) => {
          handleImageChange(event);
          handleUpload(event);
        }} 
      />
      <label htmlFor="fileUpload" className="file-label">Choose an Image</label>

      {image && <img src={image} alt="tomato preview" className="preview-image" />}

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
