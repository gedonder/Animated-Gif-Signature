# Animated-Gif-Signature



This scripts makes an animated gif signature for mail. The script uses the functionality of P5JS (Processing) and CCapture

1. Run the script by clicking on the html. A tar file is made containing all de png files.
2.  Run the following command to make the animated gif.
```
ffmpeg -framerate 50 -i %07d.png   signature10.gif
```
3. Play arround with the ffmeg setting for speed and color