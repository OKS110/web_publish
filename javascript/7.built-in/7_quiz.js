// 1. 'Hello~ JavaScript!!!' 문자열을 한 문자씩 출력해주세요.

let str = 'Hello~ JavaScript!!!';

for(let i = 0; i<str.length; i++){
    // console.log(str.charAt(i));
    console.log(str[i], i);
}

// 2. '독서, 수영, 영화, 게임, 사이클'

let hobbies = '독서, 수영, 영화, 게임, 사이클';
hobbies = hobbies.split(',');
console.log(hobbies);
for(let i = 0; i < hobbies.length; i++){
    console.log(hobbies[i].trim(), i); //trim은 앞 뒤 공간 삭제를 위함
}

hobbies.forEach((item, index) => {
    console.log(item.trim(), index);
});