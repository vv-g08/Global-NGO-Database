// Initialize map
var map = L.map('map').setView([37.7749, -122.4194], 10); // San Francisco

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add example pin
