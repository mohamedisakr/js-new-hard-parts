function createFunction(array) {
  let i = 0;
  function inner() {
    const item = array[i];
    i++;
    return item;
  }
  return inner;
}

const arr = [1, 2, 3];
const returnNextItem = createFunction(arr);
const item = returnNextItem();
console.log(item);
