// School Grade Exercise

// Get the average from a array
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const array = [94,38,25,82];

console.log(studentAverage(array));

function studentAverage(grades) {
    const average = calculateAverage(grades);
    console.log('Your score is: ' + average);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A'
}

function calculateAverage(array) {
    let sum = 0;
    for (let value of array) {
        sum += value;
    }
    a = (sum/(array.length));
    return a;
}