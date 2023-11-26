"use strict";

var button = document.querySelector("#button"),
    video = document.querySelector("#video");
var stopped = true;

function playVideo() {
  if (stopped) {
    video.play();
    button.style.display = "none";
    stopped = false;
  } else {
    video.pause();
    button.style.display = "block";
    stopped = true;
  }
}

AOS.init({
  once: true,
  offset: 200,
  delay: 50
});