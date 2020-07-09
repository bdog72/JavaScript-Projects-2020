//
//
console.log('Bozo');

const animals = document.querySelectorAll('.animal');

const makeSound = (name) => {
  // console.log(name);
  switch (name) {
    case 'lion':
      let sound1 = new Audio(`./sound/lion.mp3`);
      sound1.play();
      break;
    case 'cougar':
      let sound2 = new Audio(`./sound/cougar.mp3`);
      sound2.play();
      break;
    case 'dog':
      let sound3 = new Audio(`./sound/dog.mp3`);
      sound3.play();
      break;
    default:
      break;
  }
};

const addStyle = (name) => {
  let activeElement = document.querySelector(`.${name}`);
  // console.log(activeElement);
  activeElement.classList.add('active');
  setTimeout(() => {
    activeElement.classList.remove('active');
  }, 1000);
};

for (let i = 0; i < animals.length; i++) {
  animals[i].addEventListener('click', function () {
    let animal = this.innerHTML;
    let lowerAnimal = animal.toLowerCase();
    makeSound(lowerAnimal);
    addStyle(lowerAnimal);
  });
}
