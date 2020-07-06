//
//

// console.log(123);

const output = document.querySelector('.output');
const button = document.querySelector('button');

button.addEventListener('click', function () {
  const cost = document.querySelector('input');
  let tip = (cost.value * 0.15).toFixed(2);
  let temp = `<h2>You should tip $${tip} on $${cost.value}</h2>`;
  output.innerHTML = temp;
});

////////////////////////////////////////////////////////////////
const button1 = document.querySelector('#button1');
const output1 = document.querySelector('.output1');

const showMessage = () => {
  const myName = document.querySelector('#input1');
  output1.innerHTML = `<h3>Hello ${myName.value}, how are you today?</h3>`;
};

button1.addEventListener('click', showMessage);
