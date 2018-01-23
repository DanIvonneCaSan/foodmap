$(document).ready(function() {

  setTimeout(function() {
    $("#splash").fadeOut(500);
  }, 3000); /*oculta la pantalla inicial*/
  setTimeout(function() {
    $("#main").fadeIn(500);
  }, 3000); /*Muestra la pantalla Principal*/

});

function initMap() {
  var uluru = {
    lat: 19.4279937,
    lng: -99.1392083
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

function search() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById('search');
  // filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
