function initMap() {
    const location = { lat: 33.1031744, lng: -117.2676637 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: location,
    });
    const marker = new google.maps.Marker({
      position: location,
      map: map,
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    initMap();
});