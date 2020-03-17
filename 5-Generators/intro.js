function createFlow(array) {
  let i = 0;
  const inner = {
    next() {
      const item = array[i];
      i++;
      return item;
    }
  };
  return inner;
}

const returnNextElement = createFlow([1, 2, 3]);

const item1 = returnNextElement.next();
console.log(item1);

const item2 = returnNextElement.next();
console.log(item2);
