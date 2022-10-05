// Dynamic nature of objects

const mouse = {
    color: 'red',
    brand: 'Dazz'
}

mouse.velocity = 5000;
mouse.changeDPI = function() {
    console.log('Change DPI ');
}

delete mouse.velocity;
delete mouse.changeDPI;
console.log(mouse);
