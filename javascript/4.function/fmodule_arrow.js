// 모듈, 라이브러리는 공통된 기능을 구현하는 함수들의 집합

// export 키워드를 전역에서 사용할 수 있도록 함
// 화살표 함수 형식으로 변환
// const 함수명 = (파라미터...) => {};

// 함수 앞에 export만 붙이면 다른 파일에서 import를 통해 불러올 수 있다.

const gugudan = (start, end) => {
    if(start > 0 && end < 10){
        for(let i = 1; i < 10; i++){
            let rows = '';
            for(let j = start; j<=end; j++){
                rows += `[${j}*${i}=${i*j}]`;
            }
            console.log(rows);
        }
    }else{
        console.log('다시 입력해주세요.');
    }
}

const selectGugudan = () => { 
    for(let i = 1; i < 10; i++){
        let rows = '';
        for(let j = 1; j<=9; j++){
            rows += `[${j}*${i}=${i*j}]`;
        }
        console.log(rows);
    }
}

const singleGugudan = (dan) => {
    if(dan <= 0){
        console.log('다시 입력해주세요.');
    }else{
        for(let i = 1; i < 10; i++){
            console.log(`${dan} * ${i} = ${dan * i}`);        
        }
    }
    
}

const fruitsTower = (emoji, floor) =>{

    for (let i = 1; i <= floor; i++) {
        let output = '';
        for (let j = 1; j <= i; j++) {
            output += `${emoji}`;
        }
        console.log(output);
    }
}

export {gugudan, selectGugudan, singleGugudan, fruitsTower}; //export 한줄로 표기