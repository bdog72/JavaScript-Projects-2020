//
//

const button = document.querySelector('button');
const message = document.querySelector('.message');
messenger('Click Start Button');
const gameArea = document.querySelector('.game-area');

let inPlay = false;
let playArea = {};
let start;

button.addEventListener('click', function () {
  if (!inPlay) {
    inPlay = true;
    button.style.display = 'none';
    messenger('Click the circle as quickly as you see them');
    showBox();
  }
});

function showBox() {
  playArea.timer = setTimeout(myBox, rand(3000));
}

const myBox = () => {
  let el = document.createElement('div');
  el.classList.add('box');
  el.style.backgroundColor = getColor();
  el.style.width = `${rand(30) + 70}px`;
  el.style.height = `${rand(30) + 70}px`;
  el.style.borderRadius = `${rand(50)}%`;
  el.style.position = 'relative';
  el.style.top = `${rand(150)}px`;
  el.style.left = `${rand(150)}px`;
  el.addEventListener('click', hit);
  el.start = new Date().getTime();
  gameArea.appendChild(el);
};

function hit(e) {
  let end = new Date().getTime();
  let start = e.target.start;
  let duration = (end - start) / 1000;
  messenger(`You clicked in ${duration} seconds`);
  clearTimeout(playArea.timer);
  gameArea.children[0].remove();
  playArea.timer = setTimeout(myBox, rand(3000));
}

function getColor() {
  function col() {
    let hex = rand(255).toString(16);
    return ('0' + String(hex)).substr(-2);
  }
  return `#${col()}${col()}${col()}`;
}

function rand(num) {
  let tempVal = Math.floor(Math.random() * num);
  return tempVal;
}

function messenger(mes) {
  message.innerHTML = mes;
}
