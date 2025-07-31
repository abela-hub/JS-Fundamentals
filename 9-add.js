// 9-add.js

/**
 * Adds two numbers together.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

// Get the first command-line argument.
// process.argv[0] is 'node'
// process.argv[1] is the script file path
// process.argv[2] is the first actual argument
const arg1 = process.argv[2];

// Get the second command-line argument.
const arg2 = process.argv[3];

// Convert the arguments to integers.
// If an argument is missing or cannot be parsed, parseInt will return NaN.
const num1 = parseInt(arg1);
const num2 = parseInt(arg2);

// Call the add function with the parsed numbers and print the result.
// If either num1 or num2 is NaN, the addition operation will result in NaN,
// which will then be printed by console.log, matching the example behavior.
console.log(add(num1, num2));