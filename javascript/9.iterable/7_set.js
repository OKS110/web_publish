// Set 클래스
// 다양한 데이터(원시데이터(primitive), 객체참조) 저장
// Set 의 값은 한 번만 나타날 수 있다.


// 데이터 추가 : add(value)
let mySet = new Set();
mySet.add(10).add('홍길동').add({age:20});
console.log(mySet); //Set(3) { 10, '홍길동', { age: 20 } }
mySet.add([1, 2, 99]);
console.log(mySet); //Set(4) { 10, '홍길동', { age: 20 }, [ 1, 2, 99 ] }


// 데이터 순회
for(let value of mySet){
    console.log(`value = ${value}`);
    // value = 10
    // value = 홍길동
    // value = [object Object]
    // value = 1,2,99
}

mySet.forEach((value, key, set) => console.log(value, key, set));
// 10 10 Set(4) { 10, '홍길동', { age: 20 }, [ 1, 2, 99 ] }
// 홍길동 홍길동 Set(4) { 10, '홍길동', { age: 20 }, [ 1, 2, 99 ] }
// { age: 20 } { age: 20 } Set(4) { 10, '홍길동', { age: 20 }, [ 1, 2, 99 ] }
// [ 1, 2, 99 ] [ 1, 2, 99 ] Set(4) { 10, '홍길동', { age: 20 }, [ 1, 2, 99 ] }

// value와 key가 같다.

// 데이터 확인
console.log(mySet.has(10)); //true
console.log(mySet.has({age:20})); //false  형태만 같은 서로 다른 객체의 참조이기 때문


// 데이터 삭제
if(mySet.has(10)){
    mySet.delete(10);
    console.log('삭제완료!');
}else console.log('데이터가 존재하지 않음');

console.log(mySet); //삭제완료!     Set(3) { '홍길동', { age: 20 }, [ 1, 2, 99 ] }

mySet.clear();
console.log(mySet); //Set(0) {}