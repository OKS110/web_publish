// call by value

let a = 100;
let b = "홍길동";
let c = a;

console.log(a);
console.log(b);
console.log(c);

console.log(a === c); // true

console.log("=====================================================");

// call by reference
let aa = [1, 2, 3];
let bb = "홍길동";
let cc = aa;
console.log(aa);
console.log(bb);
console.log(cc);
console.log(cc === aa);
console.log(typeof cc);
