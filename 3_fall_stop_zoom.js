"use strict";

const ball = document.querySelector("#ball");

// Create keyframes and properties for falling and zoom

const falling = {
  duration: 1000,
  iterations: Infinity,
};

const falling_kf = [{ transform: "translate(0,-20vw)" }, { transform: "translate(0,10vw)" }];

const zoom = {
  duration: 500,
  fill: "forwards",
};

const zoom_kf = [{ transform: "scale(0)" }, { transform: "scale(1)" }];

//Animating the ball using the  keyframes and properties

// register click
ball.addEventListener("mousedown", ballClicked);

// start falling animation
const fall_anim = ball.animate(falling_kf, falling);

function ballClicked() {
  console.log("Ball clicked!");
  // pause falling animation
  fall_anim.pause();

  // start zoom-animation
  const zoom_anim = ball.animate(zoom_kf, zoom);

  //when zoom finishes, cancel and start falling again
  zoom_anim.onfinish = function () {
    zoom_anim.cancel();
    fall_anim.currentTime = 0;
    fall_anim.play();
  };
}
