import cv2
import matplotlib.pyplot as plt
import numpy as np
import tensorflow as tf

loaded_model = tf.keras.models.load_model("model.h5")
label_to_class_name = {0: 'Cyst', 1: 'Normal', 2: 'Stone', 3: 'Tumor'}

img = cv2.imread('test.jpg')
plt.imshow(img)
plt.show()
resize = tf.image.resize(img, (150,150))
yhat = loaded_model.predict(np.expand_dims(resize/255, 0))
max_index = np.argmax(yhat)

print(label_to_class_name[max_index])
