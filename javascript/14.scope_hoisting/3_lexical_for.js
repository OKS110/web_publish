//1~5 출력
for(let i = 1; i < 6; i++){
    console.log(`i --> ${i}`);
}// 루프가 돌 때마다 레코드가 하나씩 만들어지고 별도로 관리됨

let a = [1, 2, 3];
a.forEach(x => {
    console.log(x);
});

// for 루프의 인덱스 값으로 var키워드는 권장하지 않음 
for(var i = 0; i < a.length; i++){
    console.log(`a[${i}] --> ${a[i]}`);
}

console.log(`a[${i}] --> ${a[0]}`); //a[3] --> 1
console.log(`a[${i}] --> ${a[1]}`); //a[3] --> 2
console.log(`a[${i}] --> ${a[2]}`); //a[3] --> 3


for(let element of a){
    console.log(element);
    
}