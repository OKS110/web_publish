import {singleGugudan, selectGugudan, gugudan, fruitsTower} from './fmodule_export_import.js';
// import {singleGugudan, selectGugudan, gugudan, fruitsTower} from './fmodule_arrow.js';

// 여기서 만든 함수를 fmodule.js 파일에 다 전달시키고 외부에서 이곳으로 함수를
// 호출하여 사용하는 방법을 export, import를 사용하여 보여준다.




// 구구단을 출력하는 함수 생성
// gugudan(start, end)

// 구구단 선택 함수 형식: start ~ end 단 출력
// 입력되는 start는 0보다 커야 한다.
// end는 10단 이상은 출력되지 않는다.

// function gugudan(start, end){
//     if(start > 0 && end < 10){
//         for(let i = 1; i < 10; i++){
//             let rows = '';
//             for(let j = start; j<=end; j++){
//                 rows += `[${j}*${i}=${i*j}]`;
//             }
//             console.log(rows);
//         }
//     }else{
//         console.log('다시 입력해주세요.');
//     }
    
// }
gugudan(2, 5); //2~3단 출력

// 기본 함수 형식 : 1 ~ 9단까지
// function selectGugudan(){ 
//     for(let i = 1; i < 10; i++){
//         let rows = '';
//         for(let j = 1; j<=9; j++){
//             rows += `[${j}*${i}=${i*j}]`;
//         }
//         console.log(rows);
//     }
// }

selectGugudan(); //1~9단까지 출력

// 구구단 싱글 함수 형식 : single 단 출력
// 입력되는 매개변수는 0보다 커야 한다.
// function singleGugudan(dan){
//     if(dan <= 0){
//         console.log('다시 입력해주세요.');
//     }else{
//         for(let i = 1; i < 10; i++){
//             console.log(`${dan} * ${i} = ${dan * i}`);        
//         }
//     }
    
// }
singleGugudan(3); //3단 출력


// 과일 삼각형 만들기
// function fruitsTower(emoji, floor){

//     for (let i = 1; i <= floor; i++) {
//         let output = '';
//         for (let j = 1; j <= i; j++) {
//             output += `${emoji}`;
//         }
//         console.log(output);
//     }
// }
fruitsTower('🍎', 10);
fruitsTower('🍎', 5);
fruitsTower('🍋', 10);