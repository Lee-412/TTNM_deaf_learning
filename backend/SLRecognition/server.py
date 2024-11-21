from flask import Flask, request, jsonify, render_template
import cv2
import numpy as np
import os
from tensorflow.keras.models import load_model
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)


# Load the pre-trained model
model_path = './model/WLASL20c_model.h5'  # Ensure the model file path is correct
model = load_model(model_path)

# Define labels corresponding to model predictions
labels = {
    0: 'book', 1: 'chair', 2: 'clothes', 3: 'computer', 4: 'drink',
    5: 'drum', 6: 'family', 7: 'football', 8: 'go', 9: 'hat',
    10: 'hello', 11: 'kiss', 12: 'like', 13: 'play', 14: 'school',
    15: 'street', 16: 'table', 17: 'university', 18: 'violin', 19: 'wall'
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict_video', methods=['POST'])
def predict_video():
    # Check if a video file was uploaded
    if 'video' not in request.files:
        return jsonify({'error': 'No video file provided'}), 400

    video = request.files['video']

    # Save the uploaded video temporarily
    temp_video_path = './temp_video.mp4'
    video.save(temp_video_path)

    # Process the video
    cap = cv2.VideoCapture(temp_video_path)
    frames = []
    dim = (224, 224)  # Resize dimensions for the model input

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        # Resize and normalize the frame
        frame_resized = cv2.resize(frame, dim)
        frame_normalized = frame_resized / 255.0
        frames.append(frame_normalized)

        # Limit to 10 frames for prediction (adjust as needed for your model)
        if len(frames) == 10:
            break

    cap.release()
    os.remove(temp_video_path)  # Clean up the saved video file

    if not frames:
        return jsonify({'error': 'No frames extracted from video'}), 400

    # Prepare frames for prediction
    frame_buffer = np.array(frames)
    frame_buffer = frame_buffer.reshape(1, *frame_buffer.shape)

    # Make prediction
    predictions = model.predict(frame_buffer)[0]
    best_pred_idx = np.argmax(predictions)
    acc_best_pred = predictions[best_pred_idx]

    # Determine the label
    threshold = 0  # Set threshold for confidence
    gloss = labels[best_pred_idx] if acc_best_pred > threshold else 'none'
    return jsonify({'label': gloss.upper()})
    # return jsonify({'label': threshold})


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5001)
