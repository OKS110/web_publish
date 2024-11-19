// Map 클래스 생성
const fList = new Map([[1, 'one'], [2, 'two']]);
console.log(fList); // Map(2) { 1 => 'one', 2 => 'two' }
console.log(fList.get(1)); //one

// 사이즈 확인
console.log(`size = ${fList.size}`); //size = 2

// 데이터 추가
fList.set(3, 'three');
// fList.set([[4, 'four'], [5, 'five']]); //[ [ 4, 'four' ], [ 5, 'five' ] ] => undefined
// set은 구조분해할당이 안 된다. - set(key, value)
console.log(fList); //Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }

// 데이터 확인
if(fList.has(3)) console.log(fList.get(3)); //three
// console.log(fList.has(3)); //true
// console.log(fList.has(5)); //false

// 모든 키 값 출력
console.log(fList.keys()); //[Map Iterator] { 1, 2, 3 }

// 모든 value 출력
console.log(fList.values()); //[Map Iterator] { 'one', 'two', 'three' }

// key, value를 입력된 순서대로 배열 형태로 반환
let iteratorObj = fList.entries();
console.log(iteratorObj); //[Map Entries] { [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] }
console.log(iteratorObj.next()); //{ value: [ 1, 'one' ], done: false }
console.log(iteratorObj.next().value); //[ 2, 'two' ]


// 순회 : forEach
fList.forEach((element) => console.log(element)); //one two three
fList.forEach((value, key) => console.log(value, key)); //one 1 two 2 three 3
fList.forEach((value, key, map) => console.log(value, key, map));
// one 1 Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }
// two 2 Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }
// three 3 Map(3) { 1 => 'one', 2 => 'two', 3 => 'three' }
// Map에서 forEach 매개변수는 value, key, map 순으로 출력한다.

// 순회 : for...of
// [key, value]
for(let element of fList){
    console.log(element);
    // [ 1, 'one' ]
    // [ 2, 'two' ]
    // [ 3, 'three' ]
}


// key 출력
for(let key of fList.keys()){
    console.log(key);  // 1 2 3
}
// value 출력
for(let value of fList.values()){
    console.log(value);  // one two three
}

// entries
for(let entry of fList.entries()){
    console.log(entry);
    // [ 1, 'one' ]
    // [ 2, 'two' ]
    // [ 3, 'three' ]
}


// 데이터 삭제
if(fList.has(1)) fList.delete(1);
console.log(fList); //Map(2) { 2 => 'two', 3 => 'three' }

// 전체 삭제
fList.clear();
console.log(fList); // Map(0) {}

