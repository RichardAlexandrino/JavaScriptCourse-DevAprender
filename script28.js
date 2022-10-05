// Clone objects

const cell = {
    brand: 'ASUS',
    screenSize: {
        vertical: 155,
        horizontal: 75
    },
    batteryCapacity: 5000,
    turnOn: function() {
        console.log("Making a call")
    }
} 

const newObject1 = Object.assign({
    color: 'White'
},cell);
console.log(newObject1);

const newObject2 = {...cell};
console.log(newObject2);1
