//
//
// console.log('Bozo');

window.addEventListener('load', init);

const container = document.querySelector('.container');

const myWords = ['javascript', 'html', 'css', 'react', 'bootstrap', 'node'];

function init() {
  console.log(`Ready`);

  let div = document.createElement('div');
  div.setAttribute('class', 'message');
  div.innerText = 'Press Start Button';
  container.append(div);
  // document.body.append(div);

  let button = document.createElement('button');
  button.type = 'button';
  button.innerText = 'Start Game';
  button.addEventListener('click', start);
  container.append(button);
  // document.body.append(button);

  let div1 = document.createElement('div');
  div1.classList.add('game');
  container.append(div1);
  // document.body.append(div1);
}

function start() {
  this.style.display = 'none';
  myWords.sort((a, b) => {
    return 0.5 - Math.random();
  });

  myWords.forEach(function (item) {
    let temp = item.split('');
    temp.sort((a, b) => {
      return 0.5 - Math.random();
    });

    let temp1 = temp.join('');

    console.log(temp1);
    // console.log(item);
  });

  // console.log(myWords);
  message(`Select this Word`);
}

const message = (output) => {
  document.querySelector('.message').innerHTML = output;
};
