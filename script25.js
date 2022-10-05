// Factory Function

    // Wrong Way

    // const cell = {
    //     brand: 'ASUS',
    //     screenSize: {
    //         vertical: 155,
    //         horizontal: 75
    //     },
    //     batteryCapacity: 5000,
    //     turnOn: function() {
    //         console.log("Making a call")
    //     }
    // } // and keep repeating the same commando for each brand

    // Right Way

    function createCell(brandCell,screenSize,batteryCapacity) {
        return {
            brandCell,
            screenSize,
            batteryCapacity,
            turnOn() {
                console.log("Making a call")
            }
        }
    }

    const cell1 = createCell('Zenfone',5.5,5000);
    console.log(cell1);