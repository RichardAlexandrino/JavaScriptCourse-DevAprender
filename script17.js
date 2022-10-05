// FizzBuzz

// Divisível por 3: fizz
// Divisível por 5: buzz
// não é divisível por 3 ou por 5: fizzbuzz
// não é um número: "não é um número"

const resultado = fizzBuzz();
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if (entrada % 3 == 0)
        return 'Fizz';
    if (entrada % 5 == 0)
        return 'Buzz';
    
    return entrada;
    
}