//
//
console.log(123);

const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
  modal.classList.toggle('open-modal');
  console.log('open modal');
});

closeBtn.addEventListener('click', () => {
  modal.classList.toggle('open-modal');
  console.log('close modal');
});
