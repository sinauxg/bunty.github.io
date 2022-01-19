// console.log("ok");
const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
// console.log(randomInt(0, 255));

const randomColor = () =>
  `rgb( ${randomInt(0, 255)} ,${randomInt(0, 255)}, ${randomInt(0, 255)})`;

const moto = document.querySelector(".nolife");
const color = function (el) {
  const tick = function () {
    el.style.backgroundColor = randomColor();
  };
  tick();
  return setInterval(tick, 1000);
};
color(moto);
