from PIL import Image
import io
import os

# Original image file path
original_image_path = "./images/light-saber.png"

# Open the original image
image = Image.open(original_image_path)

# Resize the image to the desired dimensions
new_size = (64, 64)
image = image.resize(new_size)

# Compress the image and save it to a buffer
buffer = io.BytesIO()
image.save(buffer, format="png")

# Get the directory path of the original image
original_directory = os.path.dirname(original_image_path)

# Construct the file path for the compressed image
compressed_image_path = os.path.join(original_directory, "compressed_image.png")

# Save the compressed image to the same folder as the original image
buffer.seek(0)  # Reset the buffer position to the beginning
with open(compressed_image_path, "wb") as file:
    file.write(buffer.read())
