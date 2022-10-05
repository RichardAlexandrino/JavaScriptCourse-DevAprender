// Constructor Functions

// function createCell(brandCell,screenSize,batteryCapacity) {
//     return {
//         brandCell,
//         screenSize,
//         batteryCapacity,
//         turnOn() {
//             console.log("Making a call")
//         }
//     }
// }

function Cell(brandCell,screenSize,batteryCapacity) {
    this.brandCell = brandCell,
    this.screenSize = screenSize,
    this.batteryCapacity = batteryCapacity;
    this.turnOn = function() {
        console.log("Making a Call");
    }
}

const cell1 = new Cell('ASUS',5.5,5000);
console.log(cell1);

const cell2 = new Cell ('Samsung',6.1,5800);
console.log(cell2);