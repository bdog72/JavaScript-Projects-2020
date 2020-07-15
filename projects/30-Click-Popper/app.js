//
//
// console.log('Bozo Boy');

// const data = require('./games');

const playArea = {};
const player = {};

const data = {
  data: [
    {
      icon: '\u0026#8902;',
      value: 10,
    },
    {
      icon: '\u0026#10031;',
      value: 30,
    },
    {
      icon: '\u0026#10036;',
      value: 50,
    },
    {
      icon: '\u0026#10042;',
      value: 70,
    },
    {
      icon: '\u0026#10084;',
      value: 75,
    },
    {
      icon: '\u0026#9813;',
      value: 50,
    },
    {
      icon: '\u0026#9822;',
      value: 60,
    },
    {
      icon: '\u0026#9924;',
      value: 40,
    },
    {
      icon: '\u0026#9971;',
      value: 100,
    },
    {
      icon: '\u0026#9729;',
      value: -50,
    },
    {
      icon: '\u0026#9785;',
      value: -100,
    },
    {
      icon: '\u0026#9760;',
      value: -250,
    },
    {
      icon: '\u0026#9791;',
      value: -20,
    },
  ],
};

playArea.container = document.querySelector('.container');
playArea.stats = document.querySelector('.stats');

playArea.main = document.querySelector('.main');
playArea.game = document.querySelector('.game');

playArea.btns = Array.from(document.querySelectorAll('.btn'));
playArea.page = Array.from(document.querySelectorAll('.page'));

document.addEventListener('DOMContentLoaded', getData);

console.log(playArea);

playArea.btns.forEach(function (item) {
  item.addEventListener('click', handleBtn);
});

function getData() {
  playArea.main.classList.add('visible');
  gameObj = data.data;
  // console.log(gameObj);
  buildBoard();
}

function updateScore() {
  playArea.scorer.innerHTML = `Score: ${player.score} Lives: ${player.items}`;
}

function buildBoard() {
  playArea.scorer = document.createElement('span');
  playArea.scorer.innerHTML = `Press Button To Start`;
  playArea.stats.appendChild(playArea.scorer);
  let rows = 4;
  let cols = 4;
  let count = 0;
  playArea.game.style.width = cols * 100 + cols * 2;
  playArea.game.style.margin = 'auto';
  for (let y = 0; y < rows; y++) {
    let divMain = document.createElement('div');
    divMain.setAttribute('class', 'row');
    // prettier-ignore
    divMain.style.width = cols * 100 + (cols * 2);
    for (let x = 0; x < cols; x++) {
      let div = document.createElement('div');
      div.setAttribute('class', 'pop');
      count++;
      div.innerText = count;
      div.count = count;
      divMain.appendChild(div);
    }
    playArea.game.appendChild(divMain);
  }
}

function handleBtn(e) {
  e.preventDefault();
  if (e.target.classList.contains('new-game')) {
    startGame();
  }
}

function startGame() {
  console.log(`Game Started Bozo`);
  player.score = 0;
  player.items = 3;
  playArea.main.classList.remove('visible');
  playArea.game.classList.add('visible');
  player.gameOver = false;
  startPop();
  updateScore();
}

function randomUp() {
  const pops = document.querySelectorAll('.pop');
  const index = Math.floor(Math.random() * pops.length);
  if (pops[index].count == playArea.last) {
    return randomUp();
  }
  playArea.last = pops[index].count;
  return pops[index];
}

const hitPop = (e) => {
  console.log(e.target.v);
  console.log(e.target.count);
  let newPop = e.target;
  player.score = player.score + e.target.v;
  updateScore();
  newPop.classList.remove('active');
  newPop.removeEventListener('click', hitPop);
  newPop.innerText = newPop.old;
  clearTimeout(playArea.inPlay);
  if (!player.gameOver) {
    startPop();
  }
};

function startPop() {
  let newPop = randomUp();
  newPop.classList.add('active');
  newPop.addEventListener('click', hitPop);
  const time = Math.round(Math.random() * 2500 + 1750);
  const val = Math.floor(Math.random() * gameObj.length);
  newPop.old = newPop.innerText;
  newPop.v = gameObj[val].value;
  newPop.innerHTML = gameObj[val].icon + '<br>' + gameObj[val].value;
  playArea.inPlay = setTimeout(function () {
    newPop.classList.remove('active');
    newPop.removeEventListener('click', hitPop);
    newPop.innerText = newPop.old;
    if (newPop.v > 0) {
      player.items--;
      updateScore();
    }

    if (player.items <= 0) {
      gameOver();
    }

    if (!player.gameOver) {
      startPop();
    }
  }, time);
}

function gameOver() {
  player.gameOver = true;
  playArea.main.classList.add('visible');
  playArea.game.classList.remove('visible');
  document.querySelector('.new-game').innerText = 'Try Again';
}
