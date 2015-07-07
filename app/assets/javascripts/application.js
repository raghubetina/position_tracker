// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

var map;

function initGeolocation() {
  if (navigator && navigator.geolocation) {
    var watchId = navigator.geolocation.watchPosition(successCallback,
                                                      errorCallback,
                                                      {
                                                        enableHighAccuracy: true,
                                                        timeout: 60000,
                                                        maximumAge: 0
                                                      });

  } else {
    console.log('Geolocation is not supported');
  }
}

function errorCallback() {}

function successCallback(position) {
  var myLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  if(map == undefined) {
    var myOptions = {
      zoom: 15,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("map"), myOptions);
  }
  else map.panTo(myLatlng);

  marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Current Position'
  });
}
