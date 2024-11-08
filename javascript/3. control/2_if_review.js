// 임의의 과일을 선택받아..
// 좋아하는 과일 : apple, melon, orange
// 이외 과일 선택 시 '좋아하는 과일 없음'

let fruit = 'orange';
let result;
if(fruit === "apple"){
    result = '🍎';
}else if(fruit === "melon"){
    result = '🍈';
}else if(fruit === 'orange'){
    result = '🍊';
}else{
    result = `${fruit} 없음`;
}
console.log(`결과 = ${result}`);