//
//
// console.log('Bozo');

const wording = [
  `do you like JavaScript as much as i do`,
  `hope you are having fun`,
  `source code is included`,
  `donald trump is the worst president ever`,
];

let startTime, endTime;

const message = document.querySelector('.message');
const playText = document.querySelector('textarea');
const button = document.querySelector('button');

button.addEventListener('click', function () {
  if (this.innerText === 'Start') {
    playText.disabled = false;
    playGame();
  } else if (this.innerText === 'Done') {
    playText.disabled = true;
    button.innerText = 'Start';
    endPlay();
  }
});

function endPlay(params) {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;
  let str = playText.value;
  let wordCount = wordCounter(str);
  let speed = Math.round((wordCount / totalTime) * 60);
  let finalMessage = `You typed at ${speed} words per minute`;
  finalMessage += `<br>${compareWords(message.innerText, str)}`;

  message.innerHTML = finalMessage;
}

function wordCounter(strWords) {
  let response = strWords.split(' ').length;
  return response;
}

function compareWords(str1, str2) {
  let words1 = str1.split(' ');
  let words2 = str2.split(' ');
  let count = 0;
  words1.forEach((item, index) => {
    if (item === words2[index]) {
      count++;
    }
  });
  return `${count} words correct out of ${words1.length} words`;
}

function playGame(params) {
  let randomNum = Math.floor(Math.random() * wording.length);
  message.innerHTML = wording[randomNum];
  let date = new Date();
  startTime = date.getTime();
  button.innerText = 'Done';
}
