// Challenge 1
/*
function sayHello() {
  setTimeout(() => {
    console.log("Hello!");
  }, 1000);
}

sayHello(); // should log "Hello" after 1000ms
*/

// Challenge 2
/*
var promise = new Promise(function(resolve, reject) {
  resolve(
    setTimeout(() => {
      console.log("Resolved!");
    }, 1000)
  );
});

// Should print out "Resolved!"
// ADD CODE HERE
promise.then(console.log());
*/

// Challenge 3
/*
promise = new Promise(function(resolve, reject) {
  reject(console.log("Rejected!"));
});

// Should print out "Reject!"
promise.catch(console.log());
*/

// Challenge 4
/*
promise = new Promise(function(resolve, reject) {
  resolve(console.log("Promise has been resolved!"));
});

// Uncomment the lines below when ready
console.log("I'm not the promise!");
promise.then(() => console.log()); //console.log("Promise has been resolved!")
*/

// Challenge 5
/*
function delay() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function sayHello() {
  console.log("Hello");
}

// This code should log "Hello" after 1000ms
delay().then(sayHello);
*/

// Challenge 6
/*
var secondPromise = new Promise(function(resolve, reject) {
  resolve(console.log("Second!"));
});

var firstPromise = new Promise(function(resolve, reject) {
  resolve(secondPromise);
});

firstPromise.then(console.log());
*/

// Challenge 7
const fakePeople = [
  { name: "Rudolph", hasPets: false, currentTemp: 98.6 },
  { name: "Zebulon", hasPets: true, currentTemp: 22.6 },
  { name: "Harold", hasPets: true, currentTemp: 98.3 }
];

const fakeAPICall = i => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};
//fakePeople[0], //fakePeople[1], //fakePeople[2]
function getAllData() {
  Promise.all([fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)]).then(result =>
    console.log(result)
  );
}

getAllData();
