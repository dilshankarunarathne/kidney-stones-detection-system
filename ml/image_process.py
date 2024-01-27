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

from keras.models import Model

from keras.models import Model

# Get the output of the last layer of the base model
last_layer = base_model.layers[-1].output

# Create a new output layer that outputs both the final predictions and the last layer's output
new_output_layer = [model.layers[-1].output, last_layer]

# Create a new model that uses the same input as the base model but outputs the new output layer
new_model = Model(inputs=base_model.input, outputs=new_output_layer)
