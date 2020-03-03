function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}

let valid = false;
function checkSubmit() {
  console.log("worked");
  valid = checkPasswords();
  if (
    document.getElementById("dragPokemonDiv1").firstElementChild !== null &&
    document.getElementById("dragPokemonDiv1").firstElementChild.id ===
      "pokemon2" &&
    valid
  ) {
    console.log("enabled");
    document.getElementById("submitButton").disabled = false;
  } else {
    console.log("disabled");
    document.getElementById("submitButton").disabled = "disabled";
  }
}

function checkPasswords() {
  console.log("called");
  if (
    document.getElementById("favPoke1").value != "" &&
    document.getElementById("favPoke1").value ==
      document.getElementById("favPoke2").value
  ) {
    document.getElementById("favPoke1").style = "background-color: green;";
    document.getElementById("favPoke2").style = "background-color: green;";
    document.getElementById("passwordsMatch").innerHTML =
      "The Pokemon you have entered match!";
    return true;
  } else {
    document.getElementById("favPoke1").style = "background-color: red;";
    document.getElementById("favPoke2").style = "background-color: red;";
    document.getElementById("passwordsMatch").innerHTML =
      "The Pokemon you have entered don't match, they must match to be able to submit this form";
    return false;
  }
}

var slideIndex = 1;
showSlides(slideIndex);

function shiftSlide(n) {
  showSlides((slideIndex += n));
}

function changeSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function toggleTheme() {
  if (sessionStorage.getItem("theme") !== null) {
  } else {
    sessionStorage.setItem("theme", "light");
  }
  console.log(sessionStorage.getItem("theme"));
  sessionStorage.setItem(
    "theme",
    sessionStorage.getItem("theme") === "light" ? "dark" : "light"
  );
  if (sessionStorage.getItem("theme") === "light") {
    document.getElementById("theme").innerHTML =
      "You are currently using light theme, click the button below to switch to dark theme";
    document.body.style = "background-color: skyblue;";
    document.getElementById("theme").style =
      "background-color: cornflowerblue; border-radius: 5px; display: inline;";
  } else {
    document.getElementById("theme").innerHTML =
      "You are currently using dark theme, click the button below to switch to light theme";
    document.body.style = "background-color: black; color: lightgray";
    document.getElementById("theme").style =
      "background-color: navy; border-radius: 5px; display: inline;";
  }
}

function activateTheme() {
  if (sessionStorage.getItem("theme") !== null) {
  } else {
    sessionStorage.setItem("theme", "light");
  }
  if (sessionStorage.getItem("theme") === "light") {
    document.getElementById("theme").innerHTML =
      "You are currently using light theme, click the button below to switch to dark theme";
    document.body.style = "background-color: skyblue;";
    document.getElementById("theme").style =
      "background-color: cornflowerblue; border-radius: 5px; display: inline;";
  } else {
    document.getElementById("theme").innerHTML =
      "You are currently using dark theme, click the button below to switch to light theme";
    document.body.style = "background-color: black; color: lightgray";
    document.getElementById("theme").style =
      "background-color: navy; border-radius: 5px; display: inline;";
  }
}

function checkRating() {
  document.getElementById("rating").innerHTML = document.getElementById(
    "rater"
  ).value;
}

function getCoords() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("coords").innerHTML =
      "No geological coordinates available";
  }
}

function showPosition(position) {
  document.getElementById("coords").innerHTML =
    "Latitude: " +
    position.coords.latitude +
    ", Longitude: " +
    position.coords.longitude;
}

function initMap() {
  var mapProp = {
    center: new google.maps.LatLng(34.9686444587, 135.7537),
    zoom: 5
  };
  var map = new google.maps.Map(document.getElementById("map"), mapProp);
}
