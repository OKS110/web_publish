// 중복된 배열을 입력받아, 중복을 제거한 후 출력하는 함수 작성

let numbers = [1, 2, 3, 4, 1, 2, 1, 2, 3, 3, 5, 6, 7, 8, 9];
let names = ['홍길동', '송수정', '배지현', '정택민', '홍길동'];

function filtering(iterable){
    return new Set(iterable);
}

let result = filtering(numbers); 
console.log(result); //Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }

let result2 = filtering(names);
console.log(result2); //Set(4) { '홍길동', '송수정', '배지현', '정택민' }

// 사원의 이름을 입력받아, 사번을 생성하고 각각의 변수로 반환(구조분해할당)하는 함수 작성
// 함수 작성
function createEmployeeNumber(arr){
    // 배열 전체의 요소를 대상으로 하는 작업이며, 결과가 새로운 배열로 반환
    return arr.map((ename) => { 
        //{} 안에는 return이 반드시 있어야 한다.
        return ename.concat('_', Math.trunc(Math.random() * 10000000));
        // return `${ename}_${Math.trunc(Math.random() * 10000000)})`;
    });
}

let employeeNames = ['smith', 'kelly'];
let [smith, kelly] = createEmployeeNumber(employeeNames); // ['smith_1234562', 'kelly_8765431']
console.log(`smith => ${smith}`); //smith => smith_2602608
console.log(`kelly => ${kelly}`); //kelly => kelly_1777837

console.clear();

// =================================================Map===============================================
// 각 단어가 등장한 빈도수 보여주기
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const wordCount = new Map();

for(let element of words){
    wordCount.set(element, (wordCount.get(element) || 0) + 1);
};
console.log(wordCount); //Map(3) { 'apple' => 3, 'banana' => 2, 'orange' => 1 }

// 전화번호부 관리
const phoneBook = new Map();
phoneBook.set('Alice', '010-2345-6789');
phoneBook.set('Eric', '010-1425-6181');

console.log(phoneBook.get('Eric')); //010-1425-6181
console.log(phoneBook.get('chan')); //undefined
console.log(phoneBook); //Map(2) { 'Alice' => '010-2345-6789', 'Eric' => '010-1425-6181' }

// 키-값 교환
const originalMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
]);
console.log(originalMap); //Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }
const swappedMap = new Map(
    [...originalMap].map(([key, value]) => [value, key])
);

console.log(swappedMap);
// 출력: Map(3) { 1 => 'a', 2 => 'b', 3 => 'c' }


// ========================================Set==============================================
// Set을 사용하여 배열의 중복된 요소를 제거하고 새로운 배열로 출력.
const numList = [1, 2, 3, 3, 4, 4, 5];

const uniqueNumbers = [...new Set(numList)];
console.log(uniqueNumbers); // 출력: [1, 2, 3, 4, 5]

// 집합연산

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// 교집합
const interation = new Set([...setA].filter((x) => setB.has(x)));
console.log(interation); //Set(2) { 3, 4 }

// 합집합
const union = new Set([...setA, ...setB]);
console.log(union);

// 차집합
const difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log(difference); //Set(2) { 1, 2 }


// 중복된 문자 제거
const str = 'hello world';
const uniqueChars = [...new Set(str)].join(''); //join()으로 한 문자열로 만듬.
console.log(uniqueChars); // 출력: 'helo wrd'


// map과 set 활용
const userLogs = new Map();

function logVisit(user, page) {
    if (!userLogs.has(user)) {
        userLogs.set(user, new Set());
    }
    userLogs.get(user).add(page);
}

// 로그 추가
logVisit('Alice', 'home');
logVisit('Alice', 'about');
logVisit('Bob', 'home');
logVisit('Alice', 'home'); // 중복된 방문은 무시됨

console.log(userLogs);
// 출력: Map(2) { 'Alice' => Set(2) { 'home', 'about' }, 'Bob' => Set(1) { 'home' } }
