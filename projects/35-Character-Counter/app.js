//
//
console.log('Bozo');

const output = document.querySelector('.output');
const txt = document.querySelector('textarea');

// txt.addEventListener('change', textCounter);
// txt.addEventListener('keyup', textCounter);
// txt.addEventListener('keydown', textCounter);

['change', 'keyup', 'keydown'].forEach((event) => {
  txt.addEventListener(event, textCounter);
});

const maxLength = 15;
const warningLength = 8;

function textCounter(e) {
  let count = txt.value.length;
  if (count > maxLength) {
    txt.value = txt.value.substring(0, maxLength);
    // output.innerHTML = `No more than 10 characters allowed`;
  }
  if (count > warningLength) {
    output.classList.add('red');
  } else {
    output.classList.remove('red');
  }

  output.innerHTML = `${maxLength - count} characters left`;
}
