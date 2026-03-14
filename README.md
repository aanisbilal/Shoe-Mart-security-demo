# Webcam Permission Security Demonstration – Shoe Mart

## Overview

This project demonstrates how browser permissions can potentially be misused by malicious websites.
A simple **Shoe Mart landing page** was created that requests webcam access when the page loads and records a short video using the browser’s Media APIs.

The purpose of this project is **educational**, highlighting the importance of carefully granting hardware permissions to websites.

---

## How the Demo Works

1. The user opens the Shoe Mart webpage.
2. The browser requests permission to access the webcam.
3. If permission is granted, the webcam stream is captured using the `getUserMedia()` API.
4. The `MediaRecorder` API records a short video.
5. The recorded video is saved locally to demonstrate that the capture was successful.
6. A **security warning message** is displayed explaining the risks of granting camera access to untrusted websites.

---

## Technologies Used

* HTML
* CSS
* JavaScript
* MediaRecorder API
* getUserMedia API
* GitHub Pages (deployment)

---

## Security Awareness

This demonstration shows how malicious websites could potentially misuse browser permissions.
Users should always verify the trustworthiness of a website before granting access to sensitive hardware such as cameras or microphones.

---

## Live Demo

Live Website:
https://aanisbilal.github.io/Shoe-Mart-security-demo/

---

## Disclaimer

This project is created **strictly for educational and ethical hacking purposes** to demonstrate security awareness regarding browser permissions.
