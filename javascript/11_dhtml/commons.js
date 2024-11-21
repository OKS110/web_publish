/**
 * 공통 모듈 저장
 */

// 자주 호출되는 함수에 default 를 붙인다.
// 한 번만 가능
export default function sum(a, b){
    return Number(a) + Number(b);
}
export let sub = (a, b) =>{
    return Number(a) - Number(b);
}
export let mul = (a, b) =>{
    return Number(a) * Number(b);
}
export let div = (a, b) =>{
    return Number(a) / Number(b);
}