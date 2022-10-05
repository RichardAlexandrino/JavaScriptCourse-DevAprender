// Equality of object

function Address(street,city,zip){
    this.street = street,
    this.city = city,
    this.zip = zip
}

const address1 = new Address('a','b','c');
const address2 = new Address('a','b','c');

function areTheSame(address1,address2){
    return address1.street === address2.street && 
            address1.city === address2.city && 
            address1.zip === address2.zip
}

console.log(areTheSame(address1,address2));

function doHaveSameMemoryAddress(address1,address2){
    return address1 === address2;
}

console.log(doHaveSameMemoryAddress(address1,address2));