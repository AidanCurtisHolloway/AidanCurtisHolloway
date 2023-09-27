// Using console
console.log("Using console features:");

// Simple log
console.log("Simple log message.");

// Formatting a string
const name = "John";
const age = 30;
console.log(`Name: %s, Age: %d`, name, age);

// Table output
const users = [
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 25 },
];
console.table(users);

// Measure time to execute a piece of code
console.time("LoopTime");
for(let i = 0; i < 1000000; i++) {}
console.timeEnd("LoopTime");
