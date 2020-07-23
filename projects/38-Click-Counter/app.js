//
//
// console.log('Bozo');
const container = document.querySelector('.container');

let counter = 0;

document.addEventListener('DOMContentLoaded', (e) => {
  console.log('Ready');

  let output = document.createElement('div');
  output.innerHTML = `Click The Button`;
  output.style.fontSize = '2rem';
  output.style.padding = '5px';
  output.setAttribute('class', 'message');
  container.append(output);

  let button = document.createElement('button');
  button.innerText = 'Click Me';
  button.style.backgroundColor = '#000';
  button.style.color = '#fff';
  button.style.padding = '5px 10px';
  button.style.borderRadius = '5px';

  button.addEventListener('click', () => {
    console.log('Clicked Button');
    counter++;
    let mes = `You Clicked the button <span>${counter}</span> times`;
    document.querySelector('.message').innerHTML = mes;
    // output.innerText = outputMessage;
  });
  container.append(button);
});
