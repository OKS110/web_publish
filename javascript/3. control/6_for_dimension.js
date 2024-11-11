// 중첩 for문 : 이차원 형태의 저장소 데이터 출력

// for(){ //행
//      for(){ //열
//      }
// }

// 1(1, 1) 2(1, 2) 3(1, 3)
// 4(2, 1) 5(2, 2) 6(2, 3)
for(let i = 0; i < 2; i++){
    let rows = '';
    for(let j = 0; j < 3; j++){
        rows += `${i+1}, ${j+1} \t`;
    }
    console.log(rows);
}
// 결과
// 1, 1    1, 2    1, 3 
// 2, 1    2, 2    2, 3 
console.log('-=================================================');
//  한 행에 나열되는 수들을 3열씩 끊어서 다음 행에 나열
for(let i = 0; i < 1; i++){
    let rows1 = '';
    for(let j = 1; j < 10; j++){

        rows1 += `${j} \t`;
        if(j % 3 == 0){
            rows1 += `\n`;
        }
    }
    console.log(rows1);
}
console.log('-=================================================');
// 1부터 나열되는 수들을 3열씩 끊어서 다음 행에 나열
for(let i = 0; i < 5; i++){
    let rows = '';
    for(let j = 1; j < 4; j++){
        rows += `${3 * i + j}\t`;

    }
    console.log(rows);
}

console.log('-=================================================');

// 2의 배수 3열씩 진행
for(let i = 0; i < 2; i++){
    let rows = '';
    for(let j = 1; j < 4; j++){
        rows += `${2*(3 * i + j)}\t`;
    }
    console.log(rows);
}


console.log('-=================================================');
// 바깥에서 변수 지정하고 for문으로 1씩 증가시켜서 수 나열하기
let count = 1;
for(let i = 0; i < 5; i++){
    let rows = '';
    for(let j = 0; j < 3; j++){
        // rows += `${count += 2}\t`;
        rows += `${count++}\t`;
    }
    console.log(rows);
}
console.log('-=================================================');

// 구구단 2단을 출력
// 구구단 중에서 2단이 출력되면 for문을 빠져나오게 설정
for(let i = 2; i < 10; i++){
    if(i === 3){
        break;
    }
    for(let j = 1; j<10;j++){
        let result = i * j;
        console.log(`${i} * ${j} = ${result}`);
    }
    console.log(`${i}단 출력 끝`);
}
console.log('-=================================================');

// 구구단 가로로 출력
for(let i = 1; i < 10; i++){
    let rows = '';
    for(let j = 2; j<10;j++){
        rows += `[${j}*${i}=${i*j}]`;
    }
    console.log(rows);
}
console.log('-=================================================');

for(let i = 0; i < 6; i++){
    let rows = '';
    for(let j = 0; j <= i; j++){
        // rows += `[${i}, ${j}]`;
        rows += `*`;
    }
    console.log(rows);
}
console.log('-=================================================');

for(let i = 0; i < 6; i++){
    let rows = '';
    for(let j = 4; j >= i; j--){
        rows += `*`;
    }
    console.log(rows);
}
console.log('-=================================================');

for(let i = 5; i >=1; i--){
    let rows = '';
    for(let j = i; j >= 1; j--){
        rows += `*`;
    }
    console.log(rows);
}
