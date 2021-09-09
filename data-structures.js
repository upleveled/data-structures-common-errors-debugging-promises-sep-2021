// Primitive: Null

// Absence of a value
const nullVal = null;

// Example: User
let user = null;
user = {};

// Primitive: Undefined

let user2 = undefined;
user2 = {};

// Primitive: Booleans
let lightIsOn = true;
lightIsOn = false;

// Primitive: Numbers
const price = 10;
console.log(price * 2); // 20

const floatingPointPrice = 0.01;
console.log(floatingPointPrice + floatingPointPrice); // 0.02

console.log(0.1 + 0.2); // 0.30000000000000004

// Primitive: Strings

const singleQuoteName = 'Karl';
// prettier-ignore
const doubleQuoteName = "Karl";

// Template strings
const backtickName = `Karl`;
const templateStringWithNewlines = `a
b`;
const interpolatedTemplateString = `Name: ${backtickName}`;

// Concatenating strings
console.log(singleQuoteName + doubleQuoteName);

// String methods
console.log(singleQuoteName.toLowerCase()); // karl
console.log(singleQuoteName.length); // 4
console.log(singleQuoteName[1]); // a
console.log(singleQuoteName.replace('a', 'e')); // Kerl
console.log(singleQuoteName.replace(/^K.{3}/, 'José')); // Kerl
console.log('abc def ghi'.match(/\w+ \w+/));
// and others: substring, etc - check out MDN

console.log(String(1)); // '1'

// Arrays
export const fruitItems = ['tomato', 'pear', 'apple'];

// Loops
for (let index = 0; index < fruitItems.length; index++) {
  console.log(fruitItems[index]);
}
for (const fruitItem of fruitItems) {
  console.log(fruitItem);
}
// Array methods
fruitItems.forEach((fruitItem, index) => {
  console.log('fruitItem', fruitItem);
  console.log('index', index);
});
fruitItems.forEach(function iterator() {});
// Map: Creates a new array based on a transformation of each element
// Important: map does not modify (or "mutate") the original array
fruitItems.map((fruitItem) => {
  return fruitItem.concat('...');
});
fruitItems.map((fruitItem) => fruitItem.concat('...'));
// Filter: Creates a new array which may be a subset of the original
// Important: filter does not modify (or "mutate") the original array
// Important 2: filter may return the full array elements
fruitItems.filter((fruitItem) => {
  // Return a true / false value (boolean) whether the current
  // item should be included in the final array that is created
  const fruitItemShouldBeInFinalArray = fruitItem !== 'tomato';
  return fruitItemShouldBeInFinalArray;
});
// Find: Get a single item OR undefined which passes a condition
fruitItems.find((fruitItem) => {
  // Return a true / false value (boolean) whether the current
  // item should be included in the final array that is created
  const fruitItemShouldBeReturned = fruitItem.startsWith('t');
  return fruitItemShouldBeReturned;
});

// Also: reduce, some, every

// Objects
const user = {
  id: 1,
  firstName: 'Karl',
  lastName: 'Horky',
};

console.log(user.firstName); // Karl
console.log(user['lastName']); // Horky
const key = 'id';
console.log(user[key]); // 1

Object.entries(user); // [ [ 'id', 1 ], [ 'firstName', 'Karl' ], [ 'lastName', 'Horky' ] ]
// other interesting methods Object.keys, Object.values

// Functions
// numberA and numberB are called "parameters"
function sum(numberA, numberB) {
  return numberA + numberB;
}

const sumArrow = (numberA, numberB) => {
  return numberA + numberB;
};
const sumArrowConcise = (numberA, numberB) => numberA + numberB;

// Function call
// 1 and 2 are called "arguments"
sum(1, 2);

const tomatoPrice = 7;
const applePrice = 3;
// With this function call, the variables here
// get renamed to numberA and numberB once the
// line 112 is run
sum(tomatoPrice, applePrice);

// Maps, WeakMaps

// BigInt
