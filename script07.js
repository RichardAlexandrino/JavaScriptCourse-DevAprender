// Operators in javascript

// Arithmetc Operators (mathematics: +, -, *, /, **, ++, --

let salary = 100;

console.log(salary + salary);
console.log(salary - salary);
console.log(salary * salary);
console.log(salary / salary);
console.log(5 ** 5);

let idade = 18;

console.log(idade++); // Do the operation later
console.log(idade);
console.log(--idade); // Do the operation before

// Attribution Operators

let gamingKeyboardPrice = 100;
console.log(gamingKeyboardPrice);

gamingKeyboardPrice += gamingKeyboardPrice; // gamingKeyb... = gamingKeyb... + gamingKeyb...
console.log(gamingKeyboardPrice);

// Comparison / Equality Operators

    // written equality

    console.log( 1 === 1);
    console.log('1' === 1);

    // loose equality

    console.log( 1 == 1);
    console.log('1' == 1);

// Ternary Operators

    // Tem um cliente, 100: premium
    // Caso contrário: comum
    let pontos = 200;
    let tipo = pontos > 100? 'premium': 'comum';
    console.log(tipo);

// Logical Operators

    // And (&&)
    console.log(true && true);
    let maiorDeIdade= true;
    let possuiCarteiraDeTrabalho = false;
    let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;
    console.log(podeAplicar);

    // Or (||)
    console.log(true && true);
    maiorDeIdade= true;
    possuiCarteiraDeTrabalho = false;
    podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
    console.log(podeAplicar);

    // Not (!)
    let candidatoRecusado = !podeAplicar;
    console.log('Candidato Rescusado', candidatoRecusado);

// Bitwise Operators