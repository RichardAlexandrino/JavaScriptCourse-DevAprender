// Address object

// Create an address object that contains:
// Street, City, Zip Code

let address = {
    street: '',
    city: 'b',
    zip: 'c'
};

showAddress(address);

function showAddress(address) {
    for(let key in address)
        console.log(key,address[key]);
}