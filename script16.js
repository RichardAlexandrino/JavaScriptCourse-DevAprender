// Write a function that takes two numbers and return the largest of them

// 1
let a = 4;
let b = 4;

if (a > b) {
    console.log(a);
}
else if (b > a) {
    console.log(b);
}
else {
    console.log('Os números são iguais');
}

// 2
let valorMaior = max(10,10);
console.log(valorMaior);

function max(numero1,numero2) {
    if(numero1 > numero2) // ou "return numero1 > numero2 ? numero1 : numero2;"
        return numero1;
    return numero2;
}