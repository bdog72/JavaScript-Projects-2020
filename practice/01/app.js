//
//
// console.log(1234);

const btn = document.querySelector('.btn');

const heading = document.querySelector('h2');

const changeColors = () => {
  let hasClass = heading.classList.contains('red');
  if (hasClass) {
    heading.classList.remove('red');
  } else {
    heading.classList.add('red');
  }
};

btn.addEventListener(
  'click',
  changeColors
  // heading.classList.add('red');
  // heading.classList.toggle('red');
  // document.body.classList.toggle('red');
);
