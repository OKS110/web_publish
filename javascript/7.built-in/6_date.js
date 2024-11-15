// 날짜 형식 - Date 클래스
console.log(Date.now()); //1731653203280
console.log(new Date()); //2024-11-15T06:46:43.284Z

let date = new Date(); //현재 사용하는 시스템의 날짜를 객체로 생성
console.log(date.getFullYear()) //2024
console.log(date.getMonth()) //10 (현재는 11월)
console.log(date.getDate()) //15



let year = date.getFullYear().toString();
let month = date.getMonth() + 1;
let day = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// '2024년 11월 15일'  => String.concat() - string타입으로 바꿔야한다.
let display = year.concat('년 ',month,'월 ',day,'일' ); //string으로 들어온 year로 인해 concat 안이 전부 string으로 계산됨
console.log(display); //2024년 11월 15일

// 템플릿 리터럴
display = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`; 
console.log(display); //2024년 11월 15일 16시 8분 24초

// 날짜 출력 타입 지정
console.log(date.toLocaleString('ko-KR')); //2024. 11. 15. 오후 4:12:01 - 한국식 표기로 변경
console.log(date.toLocaleString('en-US')); //11/15/2024, 4:12:37 PM - 미국식 표기로 변경
console.log(date.toLocaleDateString('ko-KR')); //2024. 11. 15. - 날짜에 대한 사항만 한국식으로 변경
