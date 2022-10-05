// Finding elements
const numbers = [12,24,45,23,12,32,2];
console.log(numbers.indexOf(12)); // Values position
console.log(numbers.lastIndexOf(12)); // Last values position
console.log(numbers.indexOf(12) !== -1); // If value exist (old way)
console.log(numbers.includes(12)); // If value exist (modern way)