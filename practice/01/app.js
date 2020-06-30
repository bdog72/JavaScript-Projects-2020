//
//

console.log('Bozo');

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  if (total > 100) {
    console.log(`Whoa, you are out of control`);
  } else {
    console.log(`Whoa, you are good to go`);
  }
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([100, 200, 25]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});

console.log(gasTotal);
console.log(foodTotal);
console.log(randomTotal);

// const names = ['bozo', 'molly', 'josie', 'bDog'];
// const lastName = 'shakeAndBake';

// let newArray = [];

// for (let i = 0; i < names.length; i++) {
//   let result = newArray.push(names);
//   const fullName = `${names[i]} ${lastName}`;
//   newArray.push(fullName);
// }
// console.log(newArray);

// let names = ['john', 'bozo', 'barry', 'olga', 'ben'];

// console.log(names.length);
// console.log(names[names.length - 1]);

// const lastNames = ['pepper', 'onion', 'banana'];

// const allNames = names.concat(lastNames);

// console.log(allNames.push('Moo'));
// console.log(allNames);

// allNames.splice(1,2)
// console.log(allNames);

// const allNames = names.concat(lastNames).reverse();
// console.log(allNames.reverse());

// allNames.unshift('suzy');
// console.log(allNames);
// allNames.shift();
// console.log(allNames);

// const name = 'Bozo';
// const age = 47;
// const sentence = `Hey it's ${name} and he is ${age} years old`;

// console.log(sentence);

// const value = `${2 + 2}`;
// console.log(value);

// let text = ` Bozo Beak`;

// let result = text.length;
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(3));
// console.log(text.charAt(text.length - 1));
// console.log(text.indexOf('o'));
// console.log(text.trim().toLowerCase().startsWith('b'));
// console.log(text.startsWith(' Bozo'));
// console.log(text.includes('ozo B'));
// console.log(text.slice(2, 3));
// console.log(text.slice(-3));

// let amount;
// amount = 10;

// while (amount > 0) {
//   console.log(`I have ${amount} dollars. And I am happy`);
//   amount--;
// }

// let money;
// money = 0;

// do {
//   console.log(`I have ${money} dollars. And I am happy`);
//   money++;
// } while (money < 5);

// for (let i = 0; i < 10; i++) {
//   console.log(`I have ${i} dollars. And I am happy`);
// }

// let number;
// number = 11;

// for (number; number >= 0; number--) {
//   console.log(`I have ${number} dollars. And I am happy`);
// }
