//
//
// console.log('Bozo');

const message = document.querySelector('.message');
const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
const btn = document.querySelector('button');

// const myWords = ['aaa', 'bbb', 'ccc', 'ddd', 'molly', 'bozo', 'brian'];
// const myWords = ['aaa', 'bbb', 'ccc'];
const myWords = ['javascript', 'react', 'html', 'css'];
let player = {};

btn.addEventListener('click', function () {
  output1.innerHTML = '';
  output2.innerHTML = '';
  if (myWords.length > 0) {
    btn.style.display = 'none';
    myWords.sort(() => {
      return 0.5 - Math.random();
    });
    let theWord = myWords.shift();
    player.solution = theWord.split('');
    buildBoard();
    // console.log(player.solution);
  } else {
    message.innerHTML = `No More Words`;
  }
});

function buildBoard() {
  player.solution.forEach(function (letter) {
    let div = document.createElement('div');
    div.classList.add('letter2');
    div.innerText = '_';
    div.myLetter = letter;
    output2.appendChild(div);
  });

  let solutionLetter = document.querySelectorAll('.letter2');

  for (let x = 0; x < 26; x++) {
    let temp = String.fromCharCode(65 + x);
    let div = document.createElement('div');
    div.classList.add('letter');
    div.myLetter = temp;
    let handler = function (e) {
      div.removeEventListener('click', handler);
      div.classList.add('done');

      let counter = 0;
      let guess = 0;
      solutionLetter.forEach(function (letter) {
        if (letter.innerHTML !== '_') {
          counter++;
        }

        if (letter.myLetter.toUpperCase() === temp) {
          letter.innerHTML = temp;
          guess++;
        }
      });
      if (guess > 0) {
        console.log(`You found ${guess} letters`);
      }
      let letterLeft = solutionLetter.length - (guess + counter);
      console.log(letterLeft);
      if (letterLeft < 1) {
        btn.style.display = 'block';
      }
    };
    div.addEventListener('click', handler);
    div.innerHTML = temp;
    output1.appendChild(div);
  }
}
