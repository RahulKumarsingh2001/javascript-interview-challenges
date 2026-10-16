// Explain and Predict Event Loop Output

// Predict the exact output order before running this code.
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

queueMicrotask(() => console.log("D"));

async function test() {
  console.log("E");
  await null;
  console.log("F");
}

test();

console.log("G");


/**
 * output:- A , E, G, B, C
 */