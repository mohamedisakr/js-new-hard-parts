function display(data) {
  console.log(data);
}

function printHello() {
  console.log("Hello");
}

function blockFor300ms() {
  /* blocks js thread for 300ms with long for loop */
  for (let i = 0; i < 1000; i++) {}

  console.log("blockFor300ms");
}

setTimeout(printHello, 0);

const futureData = fetch(
  "https://jsonplaceholder.typicode.com/users"
).then(result => result.json());
//   .then(data => console.log(data));

futureData.then(display);

blockFor300ms();

// Which will run first?
console.log("Me first!");
