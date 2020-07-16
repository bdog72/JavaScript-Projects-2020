//
//
// console.log('Bozo');

const message = document.querySelector('.message');
const score = document.querySelector('.score');

const button = document.querySelectorAll('button');
const gamePlay = document.querySelector('.game-play');

let curCardValue = 0;
let scoreValue = 0;

let deck = [];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

const suits = ['hearts', 'diams', 'clubs', 'spades'];

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', playGame);
}

function toggleButtons() {
  button[0].classList.toggle('hide-button');
  button[1].classList.toggle('hide-button');
  button[2].classList.toggle('hide-button');
}

function playGame(e) {
  // console.log(e);
  let temp = e.target.innerText;
  let myCard = drawCard();
  // console.log(temp);
  if (temp === 'Start') {
    console.log(`You clicked start`);
    message.innerHTML = `Higher or Lower Bozo`;
    gamePlay.innerHTML = '';
    makeCard();
    toggleButtons();
  }
}

function drawCard() {}

function makeCard() {}
