function createNewFunction() {
  function add2(num) {
    return num + 2;
  }
  return add2;
}

const newFunction = createNewFunction();
console.log(newFunction);

const result = newFunction(3);
console.log(result);
