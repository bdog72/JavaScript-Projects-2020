//
//
// console.log('Bozo');

window.addEventListener('load', init);

// const container = document.querySelector('.container');

const myWords = ['javascript', 'html', 'css', 'react', 'bootstrap', 'node'];
// const myWords = ['fff1', 'ddd1', 'ccc1', 'bbbb1', 'eee1', 'aaa1'];

let current = 0;
let startTime;

function init() {
  console.log(`Ready`);
  let div = document.createElement('div');
  div.setAttribute('class', 'message');
  div.innerText = `Press Start Button`;
  document.body.appendChild(div);

  let button = document.createElement('button');
  button.type = 'button';
  button.innerText = `Start Game`;
  document.body.appendChild(button);
  button.addEventListener('click', start);

  let div1 = document.createElement('div');
  div1.classList.add('game');
  document.body.appendChild(div1);
}

function start() {
  current = 0;
  startTime = Date.parse(new Date());
  console.log(startTime);
  this.style.display = 'none';
  let tempArr = myWords.slice(0);
  tempArr.sort(function (a, b) {
    return 0.5 - Math.random();
  });

  const game = document.querySelector('.game');

  tempArr.forEach(function (item) {
    let temp = item.split('');
    temp.sort(function (a, b) {
      return 0.5 - Math.random();
    });

    let temp1 = temp.join('');
    let div = document.createElement('div');

    div.innerText = 'Select';
    div.classList.add('box');

    div.style.backgroundColor = '#000';
    div.style.color = '#fff';

    div.word = item;

    div.addEventListener('mouseenter', function () {
      div.style.backgroundColor = '#fff';
      div.style.color = '#000';
      div.innerText = temp1;
    });

    div.addEventListener('mouseleave', function () {
      div.style.backgroundColor = '#000';
      div.innerText = 'select';
    });

    div.addEventListener('click', function () {
      if (div.word === myWords[current]) {
        console.log(`Right`);
        this.classList.add('hidden');

        current++;
        nextWord();
      } else {
        console.log(`Wrong`);
      }
    });
    game.appendChild(div);
  });
  nextWord();
}

function nextWord() {
  if (current >= myWords.length) {
    let endTime = Date.parse(new Date());
    let duration = (endTime - startTime) / 1000;
    document.querySelector('.game').innerHTML = '';
    document.querySelector('button').style.display = 'block';
    message(`Game Over Bozo, you played for ${duration} seconds`);
  } else {
    message(`Select this word ${myWords[current]}`);
  }
}

function message(output) {
  document.querySelector('.message').innerHTML = output;
}
