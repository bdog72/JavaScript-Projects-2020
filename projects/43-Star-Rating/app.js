//
//
console.log('Bozo');

const stars = document.querySelectorAll('.star');
const output = document.querySelector('.output');

for (let i = 0; i < stars.length; i++) {
  stars[i].starValue = i + 1;
  ['mouseover', 'mouseenter', 'click'].forEach((e) => {
    stars[i].addEventListener(e, starRate);
  });
}

function starRate(e) {
  let t = e.type;
  let starValue = this.starValue;
  if (t === 'click') {
    if (starValue > 1) {
      output.innerHTML = `You rated this ${starValue} stars`;
    }
  }
  stars.forEach(function (element, index) {
    if (t === 'click') {
      if (index < starValue) {
        element.classList.add('orange');
      } else {
        element.classList.remove('orange');
      }
    }
    if (t === 'mouseover') {
      if (index < starValue) {
        element.classList.add('yellow');
      } else {
        element.classList.remove('yellow');
      }
    }
  });
}
