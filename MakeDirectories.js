const fs = require("fs");

const folderNames = [
  "1-Introduction",
  "2-Strings",
  "3-Array-Destructuring",
  "4-Object-Destructuring",
  "5-Further-Destructuring",
  "6-Array-Methods",
  "7-Iterators-Generators",
  "8-Regular-Expressions",
  "9-Async-Await"
];

try {
  folderNames.forEach(
    name => fs.mkdir(name, () => console.log(name)) //`${path}/${name}`
  );
} catch (error) {
  console.log(error);
}
