// Price Range

// Create a array of price range objects so that can be used
// on a site like Mercado Livre

// Range (tooltip, minimo e maximo)

// 1st option
let range1 = [
    {tooltip: 'até R$700,00', minímo: 0, maximo: 700},
    {tooltip: 'de R$700,00 a R$1000,00', minímo: 700, maximo: 1000},
    {tooltip: 'de R$1000,00 a R$9999999,00', minímo: 1000, maximo: 9999999}
];

// 2nd option (Constructor f.)
function createPriceRange(tooltip,minimo,maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let range2 = [
    createPriceRange('a',1,100),
    createPriceRange('b',100,1000),
    createPriceRange('c',1000,10000)
]

// 3rd option (Factory f.)
function PriceRange(tooltip,minimo,maximo) {
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}

let range3 = [
    new PriceRange('d',10,20),
    new PriceRange('e',20,30),
    new PriceRange('d',30,40),
]

console.log(range1);
console.log(range2);
console.log(range3);