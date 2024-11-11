// 구구단 3단 ~ 5단 출력

for(let i = 1; i <= 9; i++){
    let rows='';
    for(let j = 3; j <= 5; j++){
        rows += `${j} * ${i} = ${j*i} \t`;
    }
    console.log(rows);
}


/*
    *
    **
    ***
*/ 

for(let i = 0; i<3; i++){
    let rows = '';
    for(let j = 0; j <= i; j++){
        rows += "*";
    }
    console.log(rows);
}


// 사과 이모지를 이용하여 출력
/*
    🍏
    🍏🍏
    🍎🍎🍎
    🍏🍏🍏🍏
    🍏🍏🍏🍏🍏
*/
for(let i = 0; i<5; i++){
    let rows = '';
    for(let j = 0; j <= i; j++){
        if(i === 2){
            rows += "🍎";
        }else{
            rows += "🍏";
        }
    }
    console.log(rows);
}
