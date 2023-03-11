function initMap() {
    // Specify the location of Myrtle Creek, Oregon
    var myrtleCreek = {lat: 42.9446, lng: -123.3195};
    // Create a new map centered on Myrtle Creek
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: myrtleCreek
    });
    // Add a marker at the location of Myrtle Creek
    var marker = new google.maps.Marker({
      position: myrtleCreek,
      map: map,
      title: 'Myrtle Creek, Oregon'
    });
  }