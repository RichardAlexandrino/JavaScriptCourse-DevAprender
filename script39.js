// Add elements
const numbers = [1,2,3];
console.log(numbers);

    // At the beggining
    numbers.unshift(0);
    console.log(numbers);

    // In the middle
    numbers.splice(1,0,'a');
    console.log(numbers);

    // At the end
    numbers.push(5);
    console.log(numbers);