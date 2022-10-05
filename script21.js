// Create add function that returns the sum of all
// 3 and 5 multiples

somar (10);

function somar(limite) {
    let multiples3 = 0;
    let multiples5 = 0;
    for(i=0; i <= limite; i++){
        if (i % 3 == 0)
            multiples3 += i;
        if (i % 5 == 0)
            multiples5 += i;
    }
    console.log(multiples3 + multiples5);
}