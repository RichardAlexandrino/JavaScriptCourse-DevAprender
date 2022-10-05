// Create a function that displays the number of
// asterisks that line has

displaysAsterisks(10);

function displaysAsterisks(lines) {
    let standard = ' ';
    for(let line = 1; line <= lines; line++) {
        standard += '*';
            console.log(standard);
    }
}