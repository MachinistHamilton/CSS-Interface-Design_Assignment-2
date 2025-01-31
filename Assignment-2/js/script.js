let stars = document.getElementById("stars");
let clouds = document.getElementById("clouds");
let hound = document.getElementById("hound");
let rubble = document.getElementById("rubble");
let city = document.getElementById("city");
let banner = document.getElementById("banner");
let btn = document.getElementById("btn");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  stars.style.left = value * 0.25 + "px";
  lemmy.style.top = value * 1.05 + "px";
  
  amps.style.top = value * 1.5 + "px";
  crowd.style.top = value * 0 + "px";

  text.style.marginRight = value * 3.5 + "px";
  text.style.marginTop = value * 0.5 + "px";

  btn.style.marginTop = value * 1.5 + "px";

  header.style.top = value * 0.5 + "px";
});
