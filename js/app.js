$(document).ready(function() {

  setTimeout(function() {
    $("#splash").fadeOut(500);
  }, 3000); /*oculta la pantalla inicial*/
  setTimeout(function() {
    $("#main").fadeIn(500);
  }, 3000); /*Muestra la pantalla Principal*/

});

function loadPage() {
  $("#searchbtn1").click(optionsMenu);
}

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

function printRestaurants(restaurant) {
  // crear elementos
  var $div = $("<div />", {
    "class": "rest-cont"
  });
  var $restaurantName = $("<h2 />");
  var $restaurantAdress = $("<p />");
  var $restaurantDescrip = $("<p />");
  var $restaurantPrice = $("<p />");
  var $div1 = $("<div />", {
    "class": "img-cont"
  });
  var $restaurantImg = $("<img />", {
    "class": "img-thumbnail sizeimg"
  });

  //  atributos y eventos a los elementos
  $div.attr('data-toggle', 'modal');
  $div.attr('data-target', '.bs-example-modal-sm');
  // $div.addClass('pretty-div');
  $restaurantImg.addClass('img-responsive');

  // Extracción de info de la data
  $restaurantName.text(restaurant.name);
  $restaurantAdress.text(restaurant.adress);
  $restaurantDescrip.text(restaurant.description);
  $restaurantPrice.text(restaurant.price);
  $restaurantImg.attr("src", restaurant.photo);

  $div.append($restaurantName);
  $div.append($restaurantAdress);
  $div.append($restaurantDescrip);
  $div.append($restaurantDescrip);
  $div.append($restaurantPrice);
  $div1.append($restaurantImg);
  $div.append($div1);

  // agregamos al contenedor de food
  $("#cont-food").prepend($div);


}

function printRestaurantsModal(restaurant) {
  // crear elementos
  // Print modal
  var $nameModal = $("<p />");
  var $adressModal = $("<p />");
  var $descriptModal = $("<p />");
  var $priceModal = $("<p />");
  // Modal Data
  $nameModal.text(restaurant.name);
  $adressModal.text(restaurant.adress);
  $descriptModal.text(restaurant.description);
  $priceModal.text(restaurant.price);

  // Agregando al Modal
  $("#name-mod").append($nameModal);
  $("#adress-mod").append($adressModal);
  $("#descript-mod").append($descriptModal);
  $("#price-mod").append($priceModal);

}

//Función de filtro

function optionsMenu() {
  var searchOption = $("#search").val().toLowerCase();
  if ($("#search").val().trim().length > 0) {
    var filteredData = data.filter(function(restaurant) {
      console.log(restaurant);
      return restaurant.type.toLowerCase().indexOf(searchOption) >= 0;
    });
    // Limpiando el div cont-food
    $("#cont-food").empty();
    filteredData.forEach(function(restaurant) {
      printRestaurants(restaurant);
      printRestaurantsModal(restaurant);
    });
  } else {
    $("#cont-food").empty();
    data.forEach(function(restaurant) {
      printRestaurants(restaurant);
    });
  }

  console.log(optionsMenu);

}

$(document).ready(loadPage);
