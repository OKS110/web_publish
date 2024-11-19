// ...(Spread Operator, 전개구문)
// 모든 Iterable object에서 사용 가능
// function 함수명(...parameter)
// [ ...iterable ] 요소에 제한이 없다.
// { ...iterable }

// 1. function 함수명(...parameter)
function add(...numbers){
    let sum = 0;
    for(let element of numbers){
        sum += Number(element);
    }
    return sum;
}
let sum = add(1, 2, 3, 4, '5', 6, 7, 8, 9, 10);

console.log(`sum = ${sum}`); // sum = 55


// 2. [ ...iterable ]
let fruit1 = ['🍏', '🍒'];
let fruit2 = ['🥑', '🍆', '🍓'];

// fruit1과 fruit2 사이에 '🍍' 추가
let fruit3 = fruit1.concat('🍍', fruit2);
console.log(fruit3); //[ '🍏', '🍒', '🍍', '🥑', '🍆', '🍓' ]

let fruit4 = [...fruit1, '🍍', ...fruit2];
console.log(fruit4); // [ '🍏', '🍒', '🍍', '🥑', '🍆', '🍓' ]


// 3. { ...iterable }
const hong = {
    name: '홍길동',
    age: 20,
    address: '서울시 강남구',
};

const hongUpdate = {
    ...hong,
    job: '개발자',
};
console.log(hongUpdate); 
//{ name: '홍길동', age: 20, address: '서울시 강남구', job: '개발자' }
