// iterable(이터러블) object - Iteration Protocol : 순회를 위한 규칙, 조약
// for...of, ...(Spread: 전개구문), 구조분해할당(Destructuring Assignment)
// String, Array, Map, Set ...

// "Hello~ JavaScript~!!!!"
const text = new String("Hello~ JavaScript~!!!!");

for(let element of text){
    console.log(element);
}

// [1, 2, 3, 4, 5]
const arr = [1, 2, 3, 4, 5];
for(let element of arr){
    console.log(element);
}

// Number 클래스 생성 및 실행
const NumberClass = new Number(12345);

// for(n of NumberClass){
//     console.log(n);   
// }
// TypeError: NumberClass is not iterable

