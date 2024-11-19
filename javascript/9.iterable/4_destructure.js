// 구조 분해 할당(destructuring assignment)

let numbers = [1, 2, 3, 4, 5];
let aa = numbers;
let [a, b, ...n] = numbers;

console.log(aa); //[ 1, 2, 3, 4, 5 ]
console.log(a); // 1
console.log(b); // 2
console.log(n); // [3, 4, 5]

let hong = {
    name: '홍길동',
    age: 20,
    address: '서울시 강남구',
};


let {name, age, address} = hong; //속성의 key 이름을 맞춰줘야 함.
// let {name2, age, address} = hong; // name2 - undefined

// 구조 분해 할당으로 정의되는 변수는
// 객체의 속성과 동일한 이름으로 정의되어야 함!

// let name = hong.name;
// let age = hong.age;
// let address = hong.address;

// hong이라는 사람의 정보를 각각의 변수로 정의
console.log(name); //홍길동
console.log(age); //20
console.log(address); //서울시 강남구


// 함수의 반환값을 받아 구조 분해 할당
const createEmoji = () => {
    return {
        name1: 'apple',
        color: 'red',
        emoji: '🍎',
    };
}

let {color, name1, emoji, price = 1000} = createEmoji(); //선언 순서는 상관없지만 속성 이름은 맞춰야 한다.
console.log(name1); //apple
console.log(color); //red
console.log(emoji); //🍎
console.log(price); //1000

let flist = ['🍍','🍌','🍋','🍎'];
let [pineApple, banana, lemon, apple] = flist;
console.log(pineApple, banana, lemon, apple); //🍍 🍌 🍋 🍎
