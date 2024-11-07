// object : Array(배열 : []), JSON({})..

let apple = null;
// null - 참조 데이터 값
apple = {
    name: 'apple',
    color: 'red',
    display: '🍎'
};
console.log(apple);
console.log(apple.name);
console.log(apple.color);
console.log(apple.display);

// orange JSON 객체 생성 후 출력
orange = {
    name: 'orange',
    color: 'orange',
    display: '🍊'
};
console.log(orange);
console.log(orange.name);
console.log(orange.color);
console.log(orange.display);

// 1~5까지 출력
let arr = [1, "2", 3, 4, 5];
// 데이터는 0번지부터 저장됨.
console.log(arr);
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3
console.log(arr[3]); // 4

setTimeout(function(){
    console.log("hi");
},1000);
