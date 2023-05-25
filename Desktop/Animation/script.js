const block = document.querySelector(".block");
const blockAnimation = document.querySelector(".animation");
const btnStart = document.querySelector(".block_btn_start");
const btnReset = document.querySelector(".block_btn_reset");
const btnStop = document.querySelector(".block_btn_stop");

let position = 0;
let idInterval;
let active = true;

const squareAnimation = () => {
  position++;

  idInterval = requestAnimationFrame(squareAnimation);

  if (position < 500) {
    blockAnimation.style.top = position + "px";
    blockAnimation.style.left = position + "px";
  } else {
    cancelAnimationFrame(idInterval);
  }
};

const stopAndActiveAnimation = () => {
  if (active) {
    cancelAnimationFrame(idInterval);
    active = false;
  } else {
    idInterval = requestAnimationFrame(squareAnimation);
    active = true;
  }
};

const resetAnimation = () => {
  position = 0;
  blockAnimation.style.top = position + "px";
  blockAnimation.style.left = position + "px";
};

btnStart.addEventListener("click", stopAndActiveAnimation);

btnReset.addEventListener("click", resetAnimation);
