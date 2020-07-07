//
//
console.log('Bozo');

const button = document.querySelector('button');
const output = document.querySelector('.output');

const showOutput = () => {
  const date = new Date();
  let currentHour = date.getHours();
  // let currentHour = 13;
  let message;

  if (currentHour > 17) {
    message = `Good Evening`;
    output.style.backgroundColor = 'black';
  } else if (currentHour > 12) {
    message = `Good Afternoon`;
    output.style.backgroundColor = 'blue';
  } else if (currentHour >= 0) {
    output.style.backgroundColor = 'orange';
    // output.style.color = 'black';
    output.style.fontWeight = 'bolder';
    message = `Good Morning`;
  } else {
    output.style.backgroundColor = 'red';
    message = `No idea what time it is Bozo Boy`;
  }

  output.innerHTML = `<h2>${message}</h2>`;
};

button.addEventListener('click', showOutput);
