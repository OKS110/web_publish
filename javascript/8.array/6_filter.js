// filter

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
console.log(words.filter((item) => {return item.length > 6})); // [ 'exuberant', 'destruction', 'present' ]

let numbers = [1, 2, 3, 4, 5, 6, 7];

// 5이상 숫자 출력
let array = [];

numbers.forEach((x) => {
    if(x >= 5) array.push(x);
    return array;
});
console.log(array); // [ 5, 6, 7 ]

// let array2 = numbers.filter((x) => {return x >= 5});
let array2 = numbers.filter((x) => x >= 5);
console.log(array2); // [ 5, 6, 7 ]

let numbers2 = [1.4, 2.5, 3.2, 4.7, 5, 6, 7];
// 3보다 크거나 같은 숫자만 출력
let result = numbers2.filter((x) => x >= 3);
console.log(result); //[ 3.2, 4.7, 5, 6, 7 

// numbers2의 모든 값을 반올림한 후 3보다 크거나 같은 값 출력
console.log(numbers2.map((x) => Math.round(x)).filter((x) => x >= 3)); //[ 3, 3, 5, 5, 6, 7 ]




// 아이템을 검색하여 갯수를 리턴
let fList = ['🍉','🍊','🍋','🍓', '🍋']; //4
let nList = [1, 2, 4, 5, 7, 4, 6, 45, 33, 90]; //10

console.log(searchItem(fList, '🍋'));//2
console.log(searchItem(nList, 4));//2

function searchItem(array, sItem){
    return array.filter((x) => x === sItem).length; 
}
// function searchItem(array, sItem){
//     let count = 0;
//     array.forEach((item) => {
//         if(item === sItem) count++;
//     });
//     return count;
// }


