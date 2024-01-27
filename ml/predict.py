import pickle

from keras.models import load_model
import keras.utils as image
import numpy as np

# Load the model
model = load_model('vgg16.h5')

# Load the label maker
with open('label_maker.pkl', 'rb') as f:
    label_maker = pickle.load(f)

# Load an image file to predict on
img = image.load_img('test.jpg', target_size=(224, 224))

# Convert the image to a numpy array
x = image.img_to_array(img)

# Add a fourth dimension (since Keras expects a list of images)
x = np.expand_dims(x, axis=0)

# Scale the input image to the range used in the trained network
x = x / 255.0

# Make a prediction
predictions = model.predict(x)

# Get the indices of the top k predictions
top_k_indices = predictions[0].argsort()[-5:][::-1]

# Get the classes of the top k predictions
top_k_classes = label_maker.inverse_transform(top_k_indices)
