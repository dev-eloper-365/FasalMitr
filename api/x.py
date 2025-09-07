from fastapi import FastAPI, File, UploadFile
import numpy as np
from PIL import Image
from io import BytesIO
import tensorflow as tf

app = FastAPI()

# Load your models
potato_model = tf.keras.models.load_model("path/to/potato_model.keras")
tomato_model = tf.keras.models.load_model("path/to/tomato_model.keras")
bell_pepper_model = tf.keras.models.load_model("path/to/bell_pepper_model.keras")

# Class names for each model
POTATO_CLASSES = ["Early Blight", "Late Blight", "Healthy"]
TOMATO_CLASSES = ["Early Blight", "Late Blight", "Healthy"]
BELL_PEPPER_CLASSES = ["Bacterial Spot", "Anthracnose", "Healthy"]

def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image

@app.post("/predict/potato")
async def predict_potato(file: UploadFile = File(...)):
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    predictions = potato_model.predict(img_batch)
    predicted_class = POTATO_CLASSES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return {"class": predicted_class, "confidence": float(confidence)}

@app.post("/predict/tomato")
async def predict_tomato(file: UploadFile = File(...)):
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    predictions = tomato_model.predict(img_batch)
    predicted_class = TOMATO_CLASSES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return {"class": predicted_class, "confidence": float(confidence)}

@app.post("/predict/bell_pepper")
async def predict_bell_pepper(file: UploadFile = File(...)):
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    predictions = bell_pepper_model.predict(img_batch)
    predicted_class = BELL_PEPPER_CLASSES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    return {"class": predicted_class, "confidence": float(confidence)}
