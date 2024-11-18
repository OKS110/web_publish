// 1. 배열의 사과 요소를 딸기로 교체해 주세요.

let fruits = ['🍎','🍏','🍐','🍎','🍑','🍒','🍎','🍓','🍅','🍍'];
// output = ['🍓','🍏','🍐','🍓','🍑','🍒','🍓','🍓','🍅','🍍']

// 1.1 for문의 index 주소를 활용
for(let i = 0; i<fruits.length;i++){
    if(fruits[i] === '🍎'){
        fruits[i] = '🍓';
    }    
}
// console.log(fruits);
console.clear();
// 1-2 함수 : 파라미터 (배열객체, old, new)
function replace(array, oldValue, newValue){
    let result = '';
    for(let i = 0; i<array.length;i++){
        if(array[i] === oldValue){
            array[i] = newValue;
        }    
        result += `${array[i]}  `;
    }
    console.log(result);
}

replace(fruits, '🍎', '🍓'); //🍓  🍏  🍐  🍓  🍑  🍒  🍓  🍓  🍅  🍍

let numbers = [1, 2, 3, 1, 2, 1, 5];
replace(numbers, 1, 9); //9  2  3  9  2  9  5

// 1-3 함수 : 파라미터 (배열객체, old, new)
// 배열타입으로 객체를 반환
function replace2(array, oldValue, newValue){
    let resultArray = Array.from(array); //함수 안에서만 사용되는 shallow copy를 사용
    // 원본 훼손 방지

    for(let i = 0; i<resultArray.length;i++){
        if(resultArray[i] === oldValue){
            resultArray[i] = newValue;
        }    
    }
    return resultArray;
}

let names = ['hong', 'kim', 'park', 'lee'];
let resultObj = replace2(names, 'hong', 'gong');
console.log(resultObj); //[ 'gong', 'kim', 'park', 'lee' ]
