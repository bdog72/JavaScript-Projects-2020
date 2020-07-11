//
//
console.log('Bozo');

const accordion = document.querySelectorAll('.panel');

accordion.forEach(function (element) {
  element.addEventListener('click', toggleElement);
});

function toggleElement(e) {
  const allActives = document.querySelectorAll('.active');
  allActives.forEach(function (active) {
    active.classList.remove('active');
  });
  this.classList.toggle('active');
}
