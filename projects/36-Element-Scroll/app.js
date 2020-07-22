//
//
console.log('Bozo');

const button = document.querySelector('button');
const cElement = document.getElementById('cElement');
const sElement = document.getElementById('sElement');
const input = document.querySelector('input');
const output = document.querySelector('.output');

const content = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magni reprehenderit pariatur temporibus quod dolorem aspernatur adipisci eos facilis ad!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magni reprehenderit pariatur temporibus quod dolorem aspernatur adipisci eos facilis ad!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magni reprehenderit pariatur temporibus quod dolorem aspernatur adipisci eos facilis ad!</p>
`;

let scroller = true;

window.onload = setupScroll;

button.addEventListener('click', () => {
  console.log(`Click`);

  scroller ^= true;
  if (scroller) {
    button.innerHTML = `Stop`;
  } else {
    button.innerHTML = `Start`;
  }
});

cElement.addEventListener('mouseenter', scrollSpeed);
cElement.addEventListener('mouseleave', scrollSpeed);

function scrollSpeed(e) {
  console.log(e.type);
  scroller = e.type === 'mouseenter' ? false : true;
  output.innerHTML = `Scrolling stopped`;
  // output.style.color = 'red';
  if (!scroller) {
    output.classList.add('red');
  } else {
    output.classList.remove('red');
  }
}

function setupScroll() {
  sElement.innerHTML = content;
  let temp = sElement.getBoundingClientRect();
  // console.log(temp);
  cElement.style.height = temp.height + 'px';
  sElement.style.top = temp.height + 'px';
  let scrollInt;
  scrollInt = setInterval(scrollingElement, 50);
}

function scrollingElement() {
  let scrollSpeed = input.value;
  if (scroller) {
    let posY = parseInt(sElement.style.top);
    if (posY + sElement.clientHeight > 0) {
      sElement.style.top = posY - scrollSpeed + 'px';
    } else {
      sElement.style.top = cElement.clientHeight + 'px';
    }
    output.innerHTML = `Scroll speed ${scrollSpeed}Y -- position ${posY}`;
  }
}
