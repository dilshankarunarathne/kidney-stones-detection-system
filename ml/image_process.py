from keras.models import load_model
from keras.utils import load_img, img_to_array
from tensorflow.keras import backend as K
import numpy as np
from keras.applications.vgg16 import preprocess_input
import cv2
import tensorflow as tf
from keras.applications import VGG16

base_model = VGG16(include_top = False, weights = 'imagenet', input_shape = (224,224,3), classes = 38)

# Load the model
model = load_model('vgg16.h5')

# Load the image
img_path = 'test.jpg'
img = load_img(img_path, target_size=(224, 224))
x = img_to_array(img)
x = np.expand_dims(x, axis=0)
x = preprocess_input(x)

# Get the output of the last convolutional layer
vgg16_model = model.get_layer('vgg16')

# Get the output of the last convolutional layer
last_conv_layer = base_model.get_layer('block5_conv3')

# Create a new model that outputs both the final predictions and the last convolutional layer's output
output_model = tf.keras.Model(inputs=base_model.input, outputs=[model.output, last_conv_layer.output])

# Use this model to predict on your input
preds, conv_output = output_model.predict(x)

print(preds)
print(conv_output)
