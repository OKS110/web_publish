// 1 ~ 6까지 출력
// 3인 경우 for문 빠져나오기
for(let i = 1; i<=6; i++){
    if(i === 3){
        //break;
        i = 10;
    }else{
        console.log(`i = ${i}`);
    }

}

for(let i = 1; i<=6; i++){
    process.stdout.write(`${i}`);
}
// process.stdout.write(); 는 문자열만 출력 가능