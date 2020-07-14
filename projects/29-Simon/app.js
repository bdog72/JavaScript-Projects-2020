//
//
console.log('Bozo');

const message = document.querySelector('.message');
const gameArea = document.querySelector('.game-area');

const button = document.querySelector('button');
const gameColors = ['red', 'blue', 'green', 'black'];

let gameClicks = [];
let userClicks = [];

let inPlay = false;
let playNum = 5;

button.addEventListener('click', function () {
  if (!inPlay) {
    player();
  }
});

window.addEventListener('load', setUp);

const runSequence = (num) => {
  let squares = document.querySelectorAll('.box');
  num--;
  if (num < 0) {
    inPlay = true;
    return;
  }
  let randomNum = Math.floor(Math.random() * gameColors.length);
  // console.log(squares[randomNum]);
  gameClicks.push(gameColors[randomNum]);
  console.log(gameClicks);
  squares[randomNum].style.opacity = '1';
  setTimeout(function () {
    squares[randomNum].style.opacity = '0.5';
    setTimeout(function () {
      runSequence(num);
    }, 100);
  }, 500);
};

function player() {
  button.disabled = true;
  button.style.display = 'none';
  messenger('Match Pattern');
  gameClicks = [];
  userClicks = [];
  runSequence(playNum);
}

const checkAnswer = (e) => {
  if (inPlay) {
    let el = e.target;
    userClicks.push(el.myColor);
    el.style.opacity = '1';
    setTimeout(function () {
      el.style.opacity = '0.5';
    }, 500);

    if (userClicks.length == gameClicks.length) {
      inPlay = false;
      endGame();
    }
  }
  console.log(userClicks);
};

function messenger(mes) {
  message.innerHTML = mes;
}

function endGame() {
  console.log('Game Over');
  button.disabled = false;
  button.style.display = 'block';
  if (userClicks.toString() == gameClicks.toString()) {
    playNum++;
    console.log(`Correct`);
  } else {
    console.log(`Not Correct`);
  }
}

function setUp() {
  console.log('loads');
  for (let i = 0; i < gameColors.length; i++) {
    let div = eleFactory('div');
    div.style.backgroundColor = gameColors[i];
    div.classList.add('box');
    div.style.opacity = '0.5';
    div.myColor = gameColors[i];
    div.addEventListener('click', checkAnswer);
    gameArea.appendChild(div);
  }
}

function eleFactory(elType) {
  let ele = document.createElement(elType);
  return ele;
}
