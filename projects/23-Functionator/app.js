//
//
// console.log('Bozo');

// prettier-ignore
let myBlock, 
    myFunctionList
let funList = [];

const movementArray = ['right', 'left', 'up', 'down'];

const container = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', function () {
  console.log(`Ready Bozo`);

  myBlock = document.createElement('div');
  myBlock.textContent = `Hello World`;
  myBlock.style.width = '100px';
  myBlock.style.height = '80px';
  myBlock.style.backgroundColor = randomColor();
  myBlock.style.color = '#fff';
  // myBlock.style.color = randomColor();
  myBlock.style.lineHeight = '80px';
  myBlock.style.verticalAlign = 'center';
  myBlock.style.textAlign = 'center';
  myBlock.style.position = 'absolute';
  myBlock.style.top = '100px';
  myBlock.style.left = '150px';

  container.appendChild(myBlock);

  myFunctionList = document.createElement('div');

  container.appendChild(myFunctionList);
});

document.addEventListener('keydown', function (e) {
  e.preventDefault();

  let keyC = e.key;
  if (keyC === 'ArrowUp') {
    addFun('up');
  } else if (keyC === 'ArrowDown') {
    addFun('down');
  } else if (keyC === 'ArrowRight') {
    addFun('right');
  } else if (keyC === 'ArrowLeft') {
    addFun('left');
  } else if (keyC === 'c') {
    myBlock.style.backgroundColor = randomColor();
  } else if (keyC === 'Enter' || keyC === ' ') {
    mover();
  } else if (keyC === 'r') {
    let randomMove =
      movementArray[Math.floor(Math.random() * movementArray.length)];
    addFun(randomMove);
  }
  console.log(e.key);
});

function mover() {
  if (funList.length > 0) {
    let cur = myBlock.getBoundingClientRect();
    let el = funList.shift();
    let item = el.textContent.replace('+', '');
    myFunctionList.removeChild(el);
    myBlock.innerHTML = 'Move:' + item;
    if (item === 'left') {
      myBlock.style.left = cur.left - cur.width + 'px';
    }
    if (item === 'right') {
      myBlock.style.left = cur.left + cur.width + 'px';
    }
    if (item === 'up') {
      myBlock.style.top = cur.top - cur.height + 'px';
    }
    if (item === 'down') {
      myBlock.style.top = cur.top + cur.height + 'px';
    }
    setTimeout(mover, 300);
    console.log(item);
  } else {
    myBlock.innerHTML = `Set Path`;
    return;
  }
}

function addFun(value) {
  let span = document.createElement('span');
  span.textContent = `+${value}`;
  span.style.padding = '10px';
  span.style.border = '1px solid #ddd';
  span.addEventListener('mouseover', function () {
    this.style.backgroundColor = '#000';
    this.style.color = '#fff';
  });
  span.addEventListener('mouseout', function () {
    this.style.backgroundColor = '#fff';
    this.style.color = '#000';
  });

  span.addEventListener('click', function () {
    let currentIndex = funList.indexOf(this);
    console.log(currentIndex);
    let tempRemove = funList.splice(currentIndex, 1);
    myFunctionList.removeChild(this);
  });

  myFunctionList.appendChild(span);
  funList.push(span);

  console.log(funList);
}

const randomColor = () => {
  return `#${Math.random().toString(16).substr(-6)}`;
};

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
