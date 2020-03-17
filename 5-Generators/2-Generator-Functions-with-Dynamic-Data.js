function* createFlow() {
  const num = 10;
  const newNum = yield num;
  console.log(`newNum = ${newNum}`);

  yield 5 + newNum;
  yield 6;
}

const returnNextElement = createFlow();

const element1 = returnNextElement.next();
console.log(element1);

const element2 = returnNextElement.next(2);
console.log(element2);

/*
function* createFlow() {
  yield 1;
  yield 2;
  yield 3;
}

const returnNextElement = createFlow();

const element1 = returnNextElement.next();
console.log(element1);

const element2 = returnNextElement.next();
console.log(element2);
*/
