// Even or Odd

// Receives an amount of values to evalueate
// function displays whether each valeu is even or odd

exibirTipo(10);
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if ( i % 2 === 0)
            console.log(i,'par');
        else
            console.log(i,'impar');
        }
}