//
//

const store = [
  {
    product: 'laptop',
    value: 1000,
    count: 3,
  },
  {
    product: 'desktop',
    value: 1500,
    count: 4,
  },
  {
    product: 'mobile',
    value: 500,
    count: 10,
  },
];

const totalValueFromStore = store.reduce((acc, item) => {
  return acc + item.value * item.count;
}, 0);

console.log(totalValueFromStore);

// const numbers = [11, 2, 3, 4, 5, 6, 7];

// const max = numbers.reduce(callback, -Infinity);

// function callback(accumulator, value) {
//   if (accumulator > value) {
//     return accumulator;
//   } else {
//     return value;
//   }
// }

// console.log(max);
