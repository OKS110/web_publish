// 배열의 데이터 출력
// for, forEach

let numbers = [1, 2, 3, 4, 5];

for(let i = 0;i<numbers.length; i++){
    console.log(`${numbers[i]}`); //1 2 3 4 5
}

// forEach => 순회(iterable) 메소드 지원
numbers.forEach((element, index) => {
    console.log(`numbers = ${element} index = ${index}`);
})
// numbers = 1 index = 0
// numbers = 2 index = 1
// numbers = 3 index = 2
// numbers = 4 index = 3
// numbers = 5 index = 4

// replace3 함수를 forEach 형태로 생성해주세요.

function replace3(array, origin, target){
    let arrayObject = Array.from(array);
    arrayObject.forEach((element, index) => {
        // if(element === origin){
        //     arrayObject[index] = target;
        // } 
        if(element === origin) arrayObject.splice(index, 1, target);
    });
    return arrayObject;
}

let result = replace3(numbers, 2, 99);
console.log(result); //[ 1, 99, 3, 4, 5 ]