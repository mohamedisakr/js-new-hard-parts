function doWhenDataReceived(value) {
  returnNextElement.next(value);
}

function* createFlow() {
  const data = yield fetch("https:jsonplaceholder.typicode.com/users"); //"http://twitter.com/will/tweets/1"
  console.log(data);
}

const returnNextElement = createFlow();

const futureData = returnNextElement.next();
futureData.then(doWhenDataReceived);
