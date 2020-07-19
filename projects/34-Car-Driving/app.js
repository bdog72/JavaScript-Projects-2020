//
//
// console.log('Bozo');

const score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');

let keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

const start = () => {
  console.log(`click`);
};
startScreen.addEventListener('click', start);

const pressOn = (e) => {
  e.preventDefault();
  keys[e.key] = true;
  console.log(keys);
};
document.addEventListener('keydown', pressOn);

const pressOff = (e) => {
  e.preventDefault();
  keys[e.key] = false;
  console.log(keys);
};
document.addEventListener('keydown', pressOff);
