//
//
// console.log('Bozo');

const wording = [
  `Do you like JavaScript as much as i do`,
  `Hope you are having fun`,
  `Source code is included`,
  `Donald Trump is the worst president ever`,
];

const message = document.querySelector('.message');
const playText = document.querySelector('textarea');
const button = document.querySelector('button');

button.addEventListener('click', function () {
  // console.log(this.innerText);
  if (this.innerText === 'Start') {
    playText.disabled = false;
    playGame();
  }
});

function playGame(params) {
  let randomNum = Math.floor(Math.random() * wording.length);
  message.innerHTML = wording[randomNum];
  // console.log(randomNum);
}
