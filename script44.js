// Emptying an array
let numbers1 = [1,2,3,4,5,6];
let others1 = numbers1;
let numbers2 = [1,2,3,4,5,6];
let others2 = numbers2;
let numbers3 = [1,2,3,4,5,6];
let others3= numbers3;
let numbers4 = [1,2,3,4,5,6];
let others4= numbers4;

    // Solution 1
    numbers1 = [];
    console.log(numbers1);
    console.log(others1); // No empty

    // Solution 2
    numbers2.length = 0;
    console.log(numbers2);
    console.log(others2); // Empty

    // Solution 3
    numbers3.splice(0,numbers3.length);
    console.log(numbers3);
    console.log(others3); // Empty

    // Solution 4
    while (numbers4.lenght > 0) // Late
        numbers4.pop();
    console.log(numbers4);
    console.log(others4); 