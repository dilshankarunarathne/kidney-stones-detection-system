from keras.models import load_model
from keras.utils import load_img, img_to_array
from tensorflow.keras import backend as K
import numpy as np
import cv2
import tensorflow as tf

# Load the model
model = load_model('vgg16.h5')

# Load the image
img_path = 'test.jpg'
img = load_img(img_path, target_size=(224, 224))
x = img_to_array(img)
x = np.expand_dims(x, axis=0)

# Get the output of the last convolutional layer
vgg16_model = model.get_layer('vgg16')
last_conv_layer = vgg16_model.get_layer('block5_conv3')

# Get the class index
preds = model.predict(x)
class_idx = np.argmax(preds[0])

# Get the weights of the last dense layer
class_output = model.output[:, class_idx]

with tf.GradientTape() as tape:
    last_conv_layer_output = last_conv_layer.output
    tape.watch(last_conv_layer_output)
    class_output = model.output[:, class_idx]

grads = tape.gradient(class_output, last_conv_layer_output)
pooled_grads = tf.reduce_mean(grads, axis=(0, 1, 2))

# Compute the dot product
heatmap = np.mean(conv_layer_output_value, axis=-1)

# Resize the result to the size of the input image
heatmap = np.maximum(heatmap, 0)
heatmap /= np.max(heatmap)
heatmap = cv2.resize(heatmap, (img.shape[1], img.shape[0]))

# Overlay the result on the input image
heatmap = np.uint8(255 * heatmap)
heatmap = cv2.applyColorMap(heatmap, cv2.COLORMAP_JET)
superimposed_img = cv2.addWeighted(img, 0.6, heatmap, 0.4, 0)

# Save the image
cv2.imwrite('output.jpg', superimposed_img)