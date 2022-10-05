// If.Else

// Se a hora estiver entre 6h e 12h: bom dia!
// Se estiver entre 12h e 18h: boa tarde!
// Caso contrário: boa noite
let hora = 12;

if (hora > 6 && hora < 12) {
    console.log("bom dia!");
}
else if (hora >= 12 && hora < 18){
    console.log("boa tarde!");
}
else {
    console.log("boa noite!");
}