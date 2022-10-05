// Create a method to read the propieties of an object and
// display only those propieties of string type that are on that object

const movie = {
    title : 'Avengers',
    year : 2018,
    director : 'Robin',
    character : 'Thor'
}

exibirPropriedade(movie);
function exibirPropriedade(obj) {
    for (prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
}