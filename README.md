# Animated-Gif-Signature



This scripts makes an animated gif signature for mail. The script uses the functionality of P5JS (Processing) and CCapture

1. Run the script by clicking on the sketch.html file. A tar file is made containing all de png files needed to create the animated gif.

2. Change the sketch.js file for changes of the behavior.

3.  Run the following command to create the animated gif file.
```
ffmpeg -framerate 50 -i %07d.png   Sig10A.gif
```
4. Play arround with the ffmeg setting for speed and color


### Result
![Demo Signature 10A](images/Sig10A.gif)