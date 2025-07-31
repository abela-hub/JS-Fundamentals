// 5-to_integer.js

// Access the first command-line argument.
// process.argv[0] is 'node'
// process.argv[1] is the script file path
// process.argv[2] is the first actual argument
const arg = process.argv[2];

// Attempt to convert the argument to an integer.
// parseInt will return NaN if the string cannot be parsed as a number.
// It will also truncate decimal numbers (e.g., "89.89" becomes 89).
const myNumber = parseInt(arg);

// Check if the result of parseInt is NaN (Not a Number).
// isNaN() is used to check if a value is the special value NaN.
if (isNaN(myNumber)) {
  console.log("Not a number");
} else {
  // If it's a valid number, print it in the specified format.
  console.log(`My number: ${myNumber}`);
}