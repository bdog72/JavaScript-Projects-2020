//
//

const gameArea = document.querySelector('.container');
const inputContainer = document.querySelector('.input-container');
const message = document.querySelector('.message');
const button = document.querySelector('button');

let gamePlay = false;
let score = 0;

button.addEventListener('click', function () {
  if (!gamePlay) {
    gamePlay = true;
    score = 0;
    inputContainer.innerHTML = '';
    maker();
    message.innerHTML = `Guess the combo`;
    button.innerHTML = 'Check Combo';
  } else {
    score++;
    message.innerHTML = `Guesses: ${score}`;
    const numbers = document.querySelectorAll('.num');
    let winCondition = 0;
    numbers.forEach((num) => {
      if (num.value == num.correct) {
        num.style.backgroundColor = 'green';
        num.style.color = 'white';
        winCondition++;
      } else {
        let color = num.value < num.correct ? 'blue' : 'red';
        num.style.backgroundColor = color;
        num.style.color = 'black';
      }
      if (winCondition == numbers.length) {
        gameEnd();
      }
    });
  }
});

function gameEnd() {
  if (score == 1) {
    message.innerHTML = `You solved the combo in ${score} guess`;
  } else {
    message.innerHTML = `You solved the combo in ${score} guesses`;
  }
  gamePlay = false;
  button.innerHTML = 'Restart Game';
}

function maker() {
  for (let x = 0; x < 4; x++) {
    let el = document.createElement('input');
    el.setAttribute('type', 'number');
    el.max = 9;
    el.min = 0;
    el.size = 1;
    el.style.width = '40px';
    el.classList.add('num');
    el.order = x;
    el.correct = Math.floor(Math.random() * 9 + 1);
    el.value = 5;
    inputContainer.append(el);
  }
}
