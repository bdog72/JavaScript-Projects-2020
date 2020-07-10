//
//
// console.log('Bozo');

let myBlock;

const container = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', function () {
  console.log(`Ready Bozo`);

  myBlock = document.createElement('div');
  myBlock.textContent = `Hello World`;
  myBlock.style.width = '100px';
  myBlock.style.height = '80px';
  myBlock.style.backgroundColor = 'red';
  myBlock.style.color = '#fff';
  myBlock.style.lineHeight = '80px';
  myBlock.style.verticalAlign = 'center';
  myBlock.style.textAlign = 'center';
  myBlock.style.position = 'absolute';
  myBlock.style.top = '100px';
  myBlock.style.left = '150px';

  container.appendChild(myBlock);
});

function goLeft(params) {
  let temp = myBlock.offsetLeft;
  temp = temp - 50;
  myBlock.style.left = temp + 'px';
}

function goRight(params) {
  let temp = myBlock.offsetLeft;
  temp = temp + 50;
  myBlock.style.left = temp + 'px';
}

function goUp(params) {
  let temp = myBlock.offsetTop;
  temp = temp - 50;
  myBlock.style.top = temp + 'px';
}

function goDown(params) {
  let temp = myBlock.offsetTop;
  temp = temp + 50;
  myBlock.style.top = temp + 'px';
}
