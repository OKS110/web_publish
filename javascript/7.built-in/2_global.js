// global 함수 : 함수명으로 호출이 가능

// ex) parseInt(), parseFloat() ..
// parseInt(데이터) : 데이터를 정수로 변환
// parseFloat(데이터) : 데이터를 실수로 변환

let a = '100.2';
// a = parseInt(a); //정수
console.log(a); //100.2
a = parseFloat(a); //실수
console.log(typeof a); //number
console.log(a); //100.2


// URI를 인코딩하고 디코딩하는 것은 
// URL의 특수 문자나 유니코드 문자를 안전하게 전달하기 위해 필요

// uri 인코딩 ex) https://mozilla.org/?x=шеллы
let uri = 'https://mozilla.org/?x=шеллы';

let encode= encodeURI(uri);
console.log(encode); // https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B
// uri 디코딩
let decode = decodeURI(uri);
console.log(decode); // https://mozilla.org/?x=шеллы
