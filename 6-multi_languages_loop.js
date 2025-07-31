// 6-multi_languages_loop.js

// Define an array containing the three strings to be printed.
const messages = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

// Use a for...of loop to iterate over each message in the array.
// This loop structure is concise and ideal for iterating over iterable objects
// like arrays, and it naturally avoids the need for if/else statements.
// The console.log() function is called once per iteration, fulfilling the
// "only one console.log" requirement by referring to the single statement.
for (const message of messages) {
  console.log(message);
}
