from PIL import Image

# Replace 'path/to/your/image.jpg' with the actual path to your image file
image_path = 'dawg-skull-emoji.gif'

try:
  # Open the image using Pillow's open function
  img = Image.open(image_path)

  # Display the image using the default image viewer on your system
  img.show()
except OSError:
  print(f"Error: Could not open image at '{image_path}'.")