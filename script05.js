// function

// verb + substantive

let corSite = "azul";
function resetaCor(cor,tonalidade){
    corSite = cor + ' ' + tonalidade;
};

console.log(corSite);
resetaCor("verde","claro");
console.log(corSite);

let tamanho = 'O tamanho atual é' + ' ' + 32;
function mudaTamanho(tam){
    tamanho = 'O tamanho novo é' + ' ' + 39
};

console.log(tamanho);
mudaTamanho();
console.log(tamanho);