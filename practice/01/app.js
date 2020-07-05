//
//
// console.log(1234);

const friends = ['a', 'b', 'c'];
localStorage.setItem('friends', JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem('friends'));
console.log(values);

// localStorage.setItem('name', 'bozo');
// localStorage.setItem('job', 'developer');

// const name = localStorage.getItem('name');
// console.log(name);

// const form = document.getElementById('form');
// const name = document.getElementById('name');
// const password = document.getElementById('password');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log('Form Submitted');
//   console.log(name.value);
//   console.log(password.value);
// });
