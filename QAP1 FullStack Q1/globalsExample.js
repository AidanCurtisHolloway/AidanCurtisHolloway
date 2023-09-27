// Using globals
console.log("Using globals features:");

// Accessing global objects
console.log("__filename:", __filename); // Full path to the current file
console.log("__dirname:", __dirname);   // Full path to the directory containing the current file

// Set a timeout
setTimeout(() => {
    console.log("Timeout triggered after 1 second!");
}, 1000);

// NOTE: There is no specific 'globals' object. Instead, Node.js provides a number of global objects and functions available without importing any module.
