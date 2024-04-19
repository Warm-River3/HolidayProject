var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const success = (pos) => {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  const accuracy = pos.coords.accuracy;

  const marker = L.marker([lat, lng]).addTo(map);
  const circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);
  map.fitBounds(circle.getBounds());

  console.log(lat, lng, accuracy);
};

const error = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(success, error);
