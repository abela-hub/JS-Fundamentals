// 7-multi_c.js

// Get the first command-line argument.
// process.argv[0] is 'node'
// process.argv[1] is the script file path
// process.argv[2] is the first actual argument
const arg = process.argv[2];

// Convert the argument to an integer.
// parseInt will return NaN if the string cannot be parsed as a number.
const numOccurrences = parseInt(arg);

// Check if the argument is not a number (NaN) or if no argument was provided.
// If numOccurrences is NaN, it means the input was not a valid integer.
// If arg is undefined, it means no argument was passed at all.
if (isNaN(numOccurrences) || arg === undefined) {
  console.log("Missing number of occurrences");
} else {
  // If a valid number is provided, loop and print "C is fun".
  // The loop will not execute if numOccurrences is 0 or negative,
  // which matches the example behavior for negative inputs.
  for (let i = 0; i < numOccurrences; i++) {
    console.log("C is fun");
  }
}
