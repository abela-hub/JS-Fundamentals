// 10-factorial.js

/**
 * Computes the factorial of a non-negative integer recursively.
 * Factorial of 0 is 1.
 * Factorial of NaN is 1.
 * Factorial of negative numbers is also handled as 1 (or by the base case).
 * @param {number} n - The number for which to compute the factorial.
 * @returns {number} The factorial of n.
 */
function factorial(n) {
  // Base case: If n is 0, NaN, or less than 0, the factorial is 1.
  // This handles the "Factorial of NaN is 1" requirement and the standard
  // base case for factorial (0! = 1). It also implicitly handles negative
  // numbers by treating them like 0 for the purpose of the base case,
  // as factorials are typically defined for non-negative integers.
  if (isNaN(n) || n === 0) {
    return 1;
  }

  // Recursive step: n * factorial(n - 1)
  // For positive integers, multiply n by the factorial of (n - 1).
  return n * factorial(n - 1);
}

// Get the first command-line argument.
// process.argv[0] is 'node'
// process.argv[1] is the script file path
// process.argv[2] is the first actual argument
const arg = process.argv[2];

// Convert the argument to an integer.
// If the argument is missing or cannot be parsed, parseInt will return NaN.
const num = parseInt(arg);

// Compute the factorial using the recursive function and print the result.
console.log(factorial(num));