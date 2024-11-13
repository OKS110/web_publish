// object는 다양한 타입의 데이터들을 저장하는 방식
// object literal : {property(key) : value, property(key): value, ...}

const obj = {   //obj의 주소값은 재할당 불가
    // 키의 값들은 변경 가능
    name: '홍길동',
    age: 20,
};

// 1. obj 데이터 출력
console.log(obj); //{ name: '홍길동', age: 20 }
console.log(obj.name, typeof obj.name); //홍길동
console.log(obj.age, typeof obj.age); //20

// 2. name을 '김철수'로 변경
obj.name = '김철수';
console.log(obj);//{ name: '김철수', age: 20 }
console.log(obj.name); //김철수

// 3. age를 삭제
delete obj.age;
console.log(obj); //{ name: '김철수' }
console.log(obj.age); //undefined
