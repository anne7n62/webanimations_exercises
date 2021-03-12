"use strict";

// Create keyframes and properties for falling and zoom

const zoom = {
  duration: 500,
  iterations: 1,
  direction: "alternate",
  easing: "ease",
  fill: "forwards",
};

const falling = {
  duration: 1000,
  iterations: Infinity,
  direction: "alternate",
  easing: "ease",
};

const zoom_kf = [{ transform: "scale(0)" }, { transform: "scale(1)" }];

const falling_kf = [{ transform: "translateY(-20vw)" }, { transform: "translateY(10vw)" }];

//Animating the ball using the  keyframes and properties
const ball = document.querySelector("#ball");

// register click
document.querySelector("#ball").addEventListener("click", ballClicked);

// start falling animation
const animation = ball.animate(falling_kf, falling);

function ballClicked() {
  console.log("Ball clicked!");
  // pause falling animation
  animation.pause();

  // start zoom-animation
  ballZoom();
}

function ballZoom() {
  const animation = ball.animate(zoom_kf, zoom);
}
