//
//
// console.log('Bozo Boy');

const message = document.querySelector('.message');
const guess = document.querySelector('input');

const button = document.querySelector('button');
const myArray = ['javascript', 'html', 'css', 'react', 'bootstrap'];

let inPlay = false;
let scramble = '';

let scrambled = '';
let score = 0;

button.addEventListener('click', function () {
  if (!inPlay) {
    inPlay = true;
    score = 0;
    button.innerHTML = `Guess`;
    guess.classList.toggle('hidden');
    scramble = createWord();
    scrambled = randomArray(scramble.split('')).join('');
    message.innerHTML = `<p class="message1">${scrambled}</p>`;
    // message.innerHTML = `<p class="message1">${scrambled} <br> ${scramble}</p>`;
  } else {
    let tempGuess = guess.value;
    score++;
    console.log(tempGuess);
    if (tempGuess === scramble) {
      inPlay = false;
      if (score === 1) {
        message.innerHTML = `Correct it was ${scramble}, it took ${score} guess`;
      } else {
        message.innerHTML = `Correct it was ${scramble}, it took ${score} guesses`;
      }
      button.innerHTML = `Start`;
      guess.classList.toggle('hidden');
      guess.value = '';
    } else {
      console.log(`Try again Bozo`);
      // message.innerHTML = `Wrong answer bozo, try again!`;
    }
  }
});

function createWord() {
  let randomIndex = Math.floor(Math.random() * myArray.length);
  let tempWord = myArray[randomIndex];
  return tempWord;
}

function randomArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    let j = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}
