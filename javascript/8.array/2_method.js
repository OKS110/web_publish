// Array 빌트인 객체의 메소드 익히기 => MDN 사이트 참조

let array1 = [1, 2, 3, 4, 5];
console.log(array1[0]); // 1
// console.log(array1.0); X
console.log(array1['0']); // 1
console.log(`array1.length = ${array1.length}`); //array1.length = 5

let fruits = ['🍉', '🍋'];
console.log(fruits);
// 빨간 사과 추가
fruits[fruits.length] = '🍎';
console.log(fruits); //[ '🍉', '🍋', '🍎' ]

// 1. 배열 요소 추가 : push(추가요소, ..)
fruits.push('🍑'); //배열의 마지막에 하나 또는 여러 개의 데이터 추가
console.log(fruits); //[ '🍉', '🍋', '🍎', '🍑' ]

let a = ['🍏','🍒','🍓'];
fruits.push(a);
console.log(fruits); // [ '🍉', '🍋', '🍎', '🍑', [ '🍏', '🍒', '🍓' ] ]

// 2. fruits 배열의 전체 key값 반환 : Object.keys(인스턴스명)
// 배열의 key값은 인덱스 주소
console.log(Object.keys(fruits)); // [ '0', '1', '2', '3', '4' ]

let keyList = Object.keys(fruits);
console.log(keyList[2]); // 2

// 3-1. 배열에서 마지막 요소를 제거하고 그 요소를 반환 - 배열 길이 변경 : pop()
console.log(fruits); //[ '🍉', '🍋', '🍎', '🍑', [ '🍏', '🍒', '🍓' ] ]
let deleteItem = fruits.pop();
console.log(deleteItem); //[ '🍏', '🍒', '🍓' ] - 삭제한 요소 반환

console.log(fruits); //[ '🍉', '🍋', '🍎', '🍑' ]
fruits.pop();
console.log(fruits); //[ '🍉', '🍋', '🍎' ]
console.log(fruits.length); // 3

// 3-2. 배열 객체의 처음 요소 삭제 : shift()
console.log(fruits.shift()); // 🍉
console.log(fruits); // [ '🍋', '🍎' ]

// 3-3 배열 특정요소 삭제 - splice
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); //1번지부터 0개 삭제후 Feb 삽입
console.log(months); //[ 'Jan', 'Feb', 'March', 'April', 'June' ]
months.splice(4, 1, 'May'); //4번지부터 1개 삭제 후 May 삽입
console.log(months); //[ 'Jan', 'Feb', 'March', 'April', 'May' ]
months.splice(1, 3); //1번지부터 3개 삭제
console.log(months); //[ 'Jan', 'May' ]

// 3-4. 배열 객체의 특정 요소 추출 - slice(begin, end) : begin부터 end까지(end는 미포함)
// 원본 배열 객체의 특정 요소를 추출하여 새로운 배열로 생성 - 원본 배열은 바뀌지 않음
fruits.push('🍌','🍍','🥝','🥥','🍇');
console.log(fruits); //['🍋', '🍎','🍌', '🍍', '🥝', '🥥', '🍇']
let sFruits = fruits.slice(1, 3); 
console.log(sFruits); //[ '🍎', '🍌' ]
console.log(fruits); //['🍋', '🍎','🍌', '🍍', '🥝', '🥥', '🍇']

// 원본의 형태가 바뀌는 것을 깊은 복사, 바뀌지 않는 것은 얕은 복사

// 3-5 배열 합치기 : concat(배열)
console.clear();
let numberList1 = [1, 2, 3];
let numberList2 = [4, 5, 6];
console.log(numberList1.concat(numberList2)); // [ 1, 2, 3, 4, 5, 6 ]
console.log(numberList2.concat(numberList1)); // [ 4, 5, 6, 1, 2, 3 ]

// 3-6 배열의 순서 바꾸기 : reverse()
let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.reverse()); // [ 6, 5, 4, 3, 2, 1 ]

// 3-7 배열의 중첩 해제 : flat()
// [1, 2, 3, [4, 5]] -> [1, 2, 3, 4, 5]
let fnumbers = [1, 2, 3, [4, 5, [6, 7]]];
console.log(fnumbers); // [ 1, 2, 3, [ 4, 5, [ 6, 7 ] ] ]
console.log(fnumbers.flat()); // [ 1, 2, 3, 4, 5, [ 6, 7 ] ] - 1 level 중첩 해제
console.log(fnumbers.flat(2)); // [ 1, 2, 3, 4, 5, 6, 7 ] - 2 level 중첩 해제

// 3-8 join() - 배열에 있는 문자열을 하나의 string 문자열로 반환
let textList = ['a', 'b', 'c'];
console.log(textList); //[ 'a', 'b', 'c' ]
console.log(textList.join()); // a,b,c
console.log(textList.join().split(',')); // [ 'a', 'b', 'c' ]
