// 8-square.js

// Get the first command-line argument.
// process.argv[0] is 'node'
// process.argv[1] is the script file path
// process.argv[2] is the first actual argument
const arg = process.argv[2];

// Convert the argument to an integer.
// parseInt will return NaN if the string cannot be parsed as a number.
const size = parseInt(arg);

// Check if the argument is not a number (NaN) or if no argument was provided.
// If size is NaN, it means the input was not a valid integer.
// If arg is undefined, it means no argument was passed at all.
// Also, check if the size is less than or equal to 0, as a square needs a positive size.
if (isNaN(size) || arg === undefined) {
  console.log("Missing size");
} else if (size > 0) {
  // If a valid positive size is provided, proceed to print the square.

  // Create a string representing a single row of 'X's.
  // The 'repeat()' method is a concise way to create a string with repeated characters.
  const rowOfXs = 'X'.repeat(size);

  // Loop 'size' times to print each row, forming the square.
  for (let i = 0; i < size; i++) {
    console.log(rowOfXs);
  }
}
// If size is 0 or negative, nothing is printed, matching the example behavior.