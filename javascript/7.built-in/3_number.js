// Number 클래스들의 메소드
// Number객체.valueOf()

let a = 100;
let b = new Number(100);
console.log(typeof a, typeof b); //number object
console.log(a == b); //true
console.log(a === b); //false
console.log(a === b.valueOf()); //true
console.log(a.valueOf() === b.valueOf()); //true

// Number객체.toLocaleString() -> 10000 => 10,000
//  3자리씩 끊어서 쉼표로 구분
let num = 100000;
let num2 = new Number(123456);
console.log(num.toLocaleString()); //100,000
console.log(num2.toLocaleString()); //123,456

// MAX_VALUE, MIN_VALUE ... => Number.MAX_VALUE
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324
let num3 = 123.45;
console.log(num3.toFixed()); //tofixed() - 반올림
