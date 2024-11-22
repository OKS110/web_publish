// text 배열을 입력받아, 길이가 3자 이상인 text들을 새로운 배열 객체로 생성하여
// 반환해주세요.

const textFilter = (object) => {
    let a = object.filter((text) => text.length>=3);
    return a;
};

function textFilter2(object){
    return object.filter((text) => text.length >= 3);
}
let textArray = ['z', '1234', '김수한무거북이와두루미', 'javascript', 'ex'];
let result = textFilter(textArray);
console.log(result);
let result2 = textFilter2(textArray);
console.log(result2);

// 2. 숫자 배열을 입력받아, 짝수를 필터링하여 출력하는 함수를 생성해주세요.
const evenNumber = (arr) => {
    return arr.filter((x) => !(x % 2));
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(evenNumber(numbers));

const oddNumber = (arr) => {
    return arr.filter((x) => x % 2);
};
console.log(oddNumber(numbers));

// 3. 사원의 아이디를 받아서, 7자리 번호를 랜덤하게 생성하여 아이디와 번호를
// 조합하여 사번을 생성해 주세요.
// 사원의 아이디는 배열 객체로 입력받고, 출력도 배열 형태로 출력해주세요.

const createEmployeeNumber = (array) => {
    // 중복된 데이터 처리
    let array2 = [...new Set(array)];
    // console.log(Array.from(array2));
    
    return array2.map((x) => x.concat('_', Math.trunc(Math.random() * 10000000)));
};
const employeeIds = ['hong', 'hong', 'test', 'abcd', 'test1234', 'test'];
let a = createEmployeeNumber(employeeIds);
console.log(a);