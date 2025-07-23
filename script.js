// Initialize map
var map = L.map('map').setView([37.7749, -122.4194], 10); // San Francisco

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add example pin

fetch("nonprofits.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((org) => {
      L.marker([org.lat, org.lng])
        .addTo(map)
        .bindPopup(`<b>${org.name}</b><br>${org.category}`);
    });
  });
