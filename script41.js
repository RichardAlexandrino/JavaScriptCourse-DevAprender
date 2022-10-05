// Finding objects (reference types)

const brands = [
    {id:1, name: 'a'},
    {id:2, name: 'b'},
];

const brand = brands.find(function(brand){
    return brand.name === 'a';
})

console.log(brand);