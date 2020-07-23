//
//
console.log('Bozo');

const modalWrapper = document.querySelector('.modal-wrapper');

const btn = document.querySelectorAll('.modal-1');
btn.forEach(function (button) {
  makeClick(button);
});

function makeClick(el) {
  el.addEventListener('click', function () {
    modalWrapper.classList.add('show-modal');
    const closeButton = document.querySelector('.close-1');
    closeButton.addEventListener('click', function () {
      return modalWrapper.classList.remove('show-modal');
    });
    modalWrapper.addEventListener('click', () => {
      modalWrapper.classList.remove('show-modal');
    });
  });
}

// const closeBtn = document.querySelector('.close-1');

// closeBtn.addEventListener('click', () => {
//   modalWrapper.classList.remove('show-modal');
// });
