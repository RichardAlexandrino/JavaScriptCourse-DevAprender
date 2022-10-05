// Removing elements
const numbers = [1,2,3,4,5,6];
numbers.push();
numbers.unshift();
numbers.splice();

    // Final
    const last = numbers.pop();
    console.log(last);
    console.log(numbers);

    // Start
    const first = numbers.shift();
    console.log(first);
    console.log(numbers);

    // Middle
    const middle = numbers.splice(2,1);
    console.log(middle);