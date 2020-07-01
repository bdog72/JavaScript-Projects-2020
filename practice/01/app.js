//
//
console.log(123);

const people = [
  {
    name: 'bozo',
    age: 47,
    position: 'developer',
  },
  {
    name: 'bozo1',
    age: 48,
    position: 'developer1',
  },
  {
    name: 'bozo2',
    age: 49,
    position: 'developer2',
  },
  {
    name: 'bozo3',
    age: 50,
    position: 'developer3',
  },
];

const youngPeople = people.filter((person) => {
  return person.age <= 48;
});

console.log(youngPeople);

const developers = people.filter((person) => person.position === 'developer');

console.log(developers);
// const ages = people.map(function (person) {
//   // console.log(person);
//   return person.age / 10;
// });

// console.log(ages);

// const newPeople = people.map((person) => {
//   return {
//     firstName: person.name.toUpperCase(),
//     oldAge: person.age + 20,
//   };
// });

// console.log(newPeople);

// const names = people.map((person) => {
//   return `
//     <h1>${person.name}</h1>
//   `;
// });

// document.body.innerHTML = names.join('');

// console.log(names);

// function showPerson(person) {
//   console.log(person.position.toUpperCase());
// }

// people.forEach(showPerson);

// people.forEach((person) => console.log(person.position.toUpperCase()));

// people.forEach((person) => {
//   console.log(person.position.toUpperCase());
// });

// console.log(people);

// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// numbers.forEach((num) => {
//   console.log(num);
// });

// console.log('--------');

// numbers.map((num) => {
//   console.log(num);
//   // return num;
// });
