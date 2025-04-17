mapboxgl.accessToken = MapToken;
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9",
  projection: "globe", // Display the map as a globe, since satellite-v9 defaults to Mercator
  center: listing.geometry.coordinates,
  zoom: 9,
});

// Add a marker to the map at the specified coordinates
const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h4>${listing.location}</h4><p>Exact location will be provided after booking!</p>`
    )
  )
  .addTo(map);
