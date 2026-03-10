# Vanna Katha - SVG Editor Integration

## Overview
This project integrates Fabric.js as an SVG editor in the frontend.

## Installation
```bash
cd frontend
npm install
```

## Running the Project
Start the backend server on port 3000, then open `frontend/index.html` in a browser.

## Features
- **Add shapes**: Rectangle, Circle, Triangle, Text
- **Export as SVG**: Download the drawing as an SVG file
- **Export as PNG**: Download the drawing as a PNG file
- **Save to Backend**: Send SVG data to the backend server

## API Usage

### getSVG()
Returns the SVG representation of the current canvas:
```javascript
const svgData = getSVG();
```

### exportSVG()
Downloads the drawing as an SVG file.

### exportPNG()
Downloads the drawing as a PNG file.

### saveToBackend()
Sends the SVG data to the backend at `http://localhost:3000/save-svg` via POST request.

## Backend Endpoint
The `saveToBackend()` function sends a POST request to:
```
POST http://localhost:3000/save-svg
Content-Type: application/json

{ "svg": "<svg>...</svg>" }
```
