//
//
console.log('Bozo');

let slideIndex = 0;
let timer;

const myImages = [
  {
    img: 'https://via.placeholder.com/150/09f/000?text=image-1',
    caption: 'Hello World Image 1',
  },
  {
    img: 'https://via.placeholder.com/150/e4e/000?text=image-2',
    caption: 'Hello World Image 2',
  },
  {
    img: 'https://via.placeholder.com/150/1f1/000?text=image-3',
    caption: 'Hello World Image 3',
  },
];

const builder = () => {
  for (let x = 0; x < myImages.length; x++) {
    let slide = document.createElement('div');
    slide.setAttribute('class', 'my-slide fade');
    let img = document.createElement('img');
    img.setAttribute('src', myImages[x].img);
    let cap = document.createElement('div');
    cap.classList.add('caption');
    cap.innerText = myImages[x].caption;
    slide.appendChild(img);
    slide.appendChild(cap);
    document.querySelector('.slide-container').appendChild(slide);

    let span = document.createElement('span');
    span.classList.add('dot');
    span.addEventListener('click', function () {
      moveSlide(x);
    });
    document.querySelector('.indicator').appendChild(span);
  }
  playSlides();
};
function playSlides() {
  const slides = document.querySelectorAll('.my-slide');
  const dots = document.querySelectorAll('.dot');
  const active = document.querySelector('.active');

  if (active !== null) {
    active.classList.remove('active');
  }

  if (slideIndex + 1 > slides.length) {
    slideIndex = 0;
  }

  slides.forEach(function (el) {
    el.style.display = 'none';
  });
  slides[slideIndex].style.display = 'block';
  dots[slideIndex].classList.add('active');
  slideIndex++;
  timer = setTimeout(playSlides, 3000);
}

function moveSlide(num) {
  slideIndex = num;
  clearTimeout(timer);
  playSlides();
}

builder();
