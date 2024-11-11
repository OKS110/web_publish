// 삼각형의 높이 설정
const height = 5;

for (let i = 1; i <= height; i++) {
    // 각 행에서 필요한 공백을 출력
    let spaces = ' '.repeat(height - i);  // 왼쪽 공백

    // 각 행에서 필요한 별을 출력
    let stars = '*'.repeat(2 * i - 1);   // 별의 개수는 2 * i - 1

    // 공백과 별을 합쳐서 출력
    console.log(spaces + stars);
}
console.log('-=================================================');


// 각 행에 대해 반복
for (let i = 1; i <= height; i++) {
    // 각 행에서 공백을 출력
    for (let j = 1; j <= height - i; j++) {
        process.stdout.write(" ");  // 공백 출력
    }

    // 각 행에서 별을 출력
    for (let k = 1; k <= 2 * i - 1; k++) {
        process.stdout.write("*");  // 별 출력
    }

    // 한 행이 끝나면 줄바꿈
    console.log();
}
console.log('-=================================================');



for (let i = 1; i <= height; i++) {
    // 각 행에서 공백을 출력
    for (let j = 1; j <= height - i; j++) {
        process.stdout.write(" ");  // 공백 출력
    }

    // 각 행에서 별을 출력
    for (let k = 1; k <= 2 * i - 1; k++) {
        process.stdout.write("*");  // 별 출력
    }

    // 한 행이 끝나면 줄바꿈
    console.log();
}
console.log('-=================================================');


//  다이아몬드
for (let i = 1; i <= height; i += 2) { //3번 까지만
    // 공백 출력
    for (let j = 1; j <= (height - i) / 2; j++) {
        process.stdout.write(" ");  // 공백 출력
    }
    // 별 출력
    for (let k = 1; k <= i; k++) {
        process.stdout.write("*");  // 별 출력
    }
    // 한 행 끝나면 줄바꿈
    console.log();
}

// 아래쪽 삼각형
for (let i = height - 2; i >= 1; i -= 2) { //2번 까지만
    // 공백 출력
    for (let j = 1; j <= (height - i) / 2; j++) {
        process.stdout.write(" ");  // 공백 출력
    }
    // 별 출력
    for (let k = 1; k <= i; k++) {
        process.stdout.write("*");  // 별 출력
    }
    // 한 행 끝나면 줄바꿈
    console.log();
}
console.log('-=================================================');

const size = 5;

for (let i = 1; i <= size; i++) {
    // 각 행에서 별을 찍을 첫 번째 위치
    for (let j = 1; j <= size; j++) {
        // 첫 번째와 마지막 위치에 별을 찍기
        if (j === i || j === size - i + 1) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    // 한 행 끝나면 줄바꿈
    console.log();
}
// process.stdout.write()는 줄바꿈 없이 한 줄에 숫자를 출력
console.log('-=================================================');

for (let i = 1; i <= 9; i += 3) {
      for (let j = i; j < i + 3 && j <= 9; j++) {
    process.stdout.write(`${j}\t`);
    // 맥북은 (option + ₩)로 `` 표현
  }
  console.log(); // 줄바꿈
}
console.log('-=================================================');


// object 배열을 이용한 중첩for문 연습
// 예를 들어, 2차원 배열을 순회하는 경우
let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        console.log(array[i][j]);
    }
}
