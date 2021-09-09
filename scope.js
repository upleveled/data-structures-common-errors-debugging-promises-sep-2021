// Block scope:
// a is only available for use inside of the if
// block (inside of the curly brackets)
if (true) {
  console.log(a); // ReferenceError: a is not defined
  const a = 1;
  console.log(a);
}
console.log(a); // ReferenceError: a is not defined

// This does work, through something called "hoisting"
// (but not recommended)
sum(2, 3);

// Function scope:
// numberA and numberB are only available
// for use inside of the function (inside of
// the curly brackets)
function sum(numberA, numberB) {
  console.log(numberA, numberB);
  return numberA + numberB;
}

sum(1, 2);

console.log(numberA, numberB);
