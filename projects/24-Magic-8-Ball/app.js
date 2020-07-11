//
//
console.log('Bozo');

const questionArray = [
  'Do you like Beer?',
  'Are You Happy?',
  'Do you like JavaScript',
];

const message = document.querySelector('.message');
const question = document.querySelector('input');
const button = document.querySelector('button');

const answerArray = [
  'Hell Yes',
  'Definitely No',
  'Maybe',
  "I don't know",
  'Let me think about it',
];

button.addEventListener('click', () => {
  let response = Math.floor(Math.random() * answerArray.length);
  console.log(answerArray[response]);
  message.innerHTML = `<h2>${answerArray[response]}</h2>`;
  question.value = '';
});
