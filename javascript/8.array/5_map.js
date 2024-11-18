// 순회 메소드가 적용되는 map 함수는 파라미터 인자로 콜백함수를 입력받아,
// 처리한 결과를 새로운 배열객체로 생성하여 반환함!!
// (배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환)

let numbers = [1, 2, 3, 4, 5];
let fnumbers = [1.001, 2.002, 3.03, 4.04, 5.05];

// numbers 배열 요소에 각각 10을 곱한 결과 출력
let result = numbers.map((x) => { //{}는 return 값을 반환해야 함
    return x * 10;
}); 
// let result = numbers.map((x) => {x * 10}); //[ undefined, undefined, undefined, undefined, undefined ]
console.log(result); // [ 10, 20, 30, 40, 50 ]

// fnumber 배열 요소를 모두 정수로 변환

let result2 = fnumbers.map((item) => {
    return Math.floor(item);
});
console.log(result2);

// 배열의 요소로 Object literal 값이 있는 경우
let objects = [
    {
        name: '홍길동',
        age: 20,
    }, 
    {
        name: '안철수',
        age: 40,
    }, 
    {
        name: '이승만',
        age: 60,
    }, 
];

objects.forEach((obj, index) => {
    console.log(index, obj);
});

// 결과 : [{홍길동: name, 20:age}] ...
let objects2 = objects.map((obj) => {
    let resultObj = {};

    resultObj[obj.name] = obj.name;
    resultObj[obj.age] = 'age';

    return resultObj;
});
console.log(objects2);
// [
//     { '20': 'age', '홍길동': '홍길동' },
//     { '40': 'age', '안철수': '안철수' },
//     { '60': 'age', '이승만': '이승만' }
//   ]