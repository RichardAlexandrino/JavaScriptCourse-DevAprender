// Spread operator
const first = [1,2,3];
const second = [4,5,6];

const combined = [...first,...second,'a'];
console.log(combined);

const cloned = [...combined];
console.log(cloned);