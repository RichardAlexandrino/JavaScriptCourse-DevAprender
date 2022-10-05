// Create a function to show prime numbers

ShowPrimeNumbers(100);

function ShowPrimeNumbers(limit) {
    let j = 0;
    for(let i = 2; i <= limit; i++) {
        if(Discover(i)) { console.log(i + ' é primo');
        j += 1;} }
    console.log('O total é de ' + j + ' números primos até ' + limit);
}

function Discover(i) { 
    for (let divisor = 2; divisor < i; divisor ++)
        if(i % divisor === 0) return false;
    return true;
}