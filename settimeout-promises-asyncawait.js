// a
// b
// c

const b = 'b';
let tempA;
let tempC;
let counter;

function timeEnd() {
  console.log(tempA);
  console.log(b);
  console.log(tempC);
}

setTimeout(() => {
  const a = 'a';
  tempA = a;
  if (tempA && tempC) timeEnd();
}, 700);

setTimeout(() => {
  const c = 'c';
  tempC = c;
  if (tempA && tempC) timeEnd();
}, 1200);
