sum(); // ReferenceError: sum is not defined
console.log(a); // ReferenceError: a is not defined

const user = { id: 1, firstName: 'karl' };
console.log(user()); // TypeError: user is not a function
console.log(user.firstName()); // TypeError: user.firstName is not a function
