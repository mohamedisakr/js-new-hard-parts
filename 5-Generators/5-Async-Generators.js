async function createFlow() {
  console.log("Me first");
  const data = await (
    await fetch("https:jsonplaceholder.typicode.com/users")
  ).json();
  console.log(data);
}

createFlow();
console.log("Me second");
