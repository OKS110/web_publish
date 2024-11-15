// 학사관리 프로그램을 생성하는 경우, 사용자를 정의하는 클래스를 설계
// 학생, 교수, 학부모, 직원 ===> Member 부모클래스 (name, age, address)

class Member{
    #name;
    #age;
    #address;
    constructor(name, age, address){ //자식의 클래스 생성자 함수에서 super 호출
        this.#name = name;
        this.#age = age;
        this.#address = address;
    }
    get name(){
        return this.#name;
    }
    get age(){
        return this.#age;
    }
    get address(){
        return this.#address;
    }

    set name(name){
        this.#name = name;
    }
    set age(age){
        this.#age = age;
    }
    set address(address){
        this.#address = address;
    }
}


// student class
class Student extends Member{
    #sno; //학번
    constructor(sno, name, age, address){
        super(name, age, address);
        this.#sno = sno;
    }

    get sno(){
        return this.#sno;
    }
    // 전체 값을 반환하는 함수 정의    
    get values(){ //객체명.values
        return [this.name, this.age, this.address, this.#sno];
    }


    set sno(sno){
        this.#sno = sno;
    }
}

// professor class
class Professor extends Member{
    #subject; //강의 과목
    constructor(name, age, address, subject){
        super(name, age, address);
        this.#subject = subject;
    }
    get subject(){
        return this.#subject;
    }
    get values(){ //객체명.values
        return [this.name, this.age, this.address, this.#subject];
    }
}
// parent class
class Parent extends Member{
    #child; //자녀명
    constructor(name, age, address, child){
        super(name, age, address);
        this.#child = child;
    }
    get child(){
        return this.#child;
    }
    get values(){ //객체명.values
        return [this.name, this.age, this.address, this.#child];
    }
    
}
// employee class
class Employee extends Member{
    #div; //소속부서
    constructor(name, age, address, div){
        super(name, age, address);
        this.#div = div;
    }
    get div(){
        return this.#div;
    }   
    get values(){ //객체명.values
        return [this.name, this.age, this.address, this.#div];
    }
}


// const hong = new Student(1111, '홍길동', 20, '서울');
// const ko = new Professor('고길동', 50, '경기', 'JavaScript');
// const chen = new Parent('첸', 45, '부산', '홍길동');
// const Lee = new Employee('이은영', 30, '전주', '개발1팀');

// console.log('학생 정보');
// console.log(`${hong.sno} ${hong.name} ${hong.age} ${hong.address}`);
// console.log('교수 정보');
// console.log(`${ko.name} ${ko.age} ${ko.address} ${ko.subject}`);
// console.log('학부모 정보');
// console.log(`${chen.name} ${chen.age} ${chen.address} ${chen.child}`);
// console.log('직원 정보');
// console.log(`${Lee.name} ${Lee.age} ${Lee.address} ${Lee.div}`);

// // 학생 정보 수정
// hong.name = '김철수';
// hong.sno = 8888;
// console.log(`${hong.sno} ${hong.name} ${hong.age} ${hong.address}`);



// ============================================================================================
// signup 버튼 클릭 시 호출되는 함수

const signupCheck = () => {
    let type = document.querySelector('input[type=radio]:checked'); //라디오 박스 중에 체크된 목록을 type 변수에 넣어줌.
    console.log(type);
    let name, age, address, sno, subject, child, div;
    // let sno = document.querySelector('#sno');
    // let name = document.querySelector('#name'); 오류 발생 전체 #name을 찾아서 출력하기 때문에 학생 값만 계속 나옴.
    // let age = document.querySelector('#age');
    // let address = document.querySelector('#address');
    // let child = document.querySelector('#child');;
    // let div = document.querySelector('#div');;
    // let subject = document.querySelector('#subject');;
    console.log(typeof type.value); //string
    
    // type에 따라서 각각의 클래스 생성
    let member = null;
    switch(type.value){            // 어떤 버튼에 체크했느냐에 따라 변수의 루트가 다르게 생성되어야 함.
        case '1':
            sno = document.querySelector('#student #sno');
            name = document.querySelector('#student #name');
            age = document.querySelector('#student #age');
            address = document.querySelector('#student #address');
            member = new Student(sno.value, name.value, age.value, address.value);
            break;
        case '2':
            name = document.querySelector('#professor #name');
            age = document.querySelector('#professor #age');
            address = document.querySelector('#professor #address');
            subject = document.querySelector('#professor #subject');
            member = new Professor(name.value, age.value, address.value, subject.value);
            break;
        case '3':
            name = document.querySelector('#parents #name');
            age = document.querySelector('#parents #age');
            address = document.querySelector('#parents #address');
            child = document.querySelector('#parents #child');
            member = new Parent(name.value, age.value, address.value, child.value);
            break;
        case '4':
            name = document.querySelector('#employee #name');
            age = document.querySelector('#employee #age');
            address = document.querySelector('#employee #address');
            div = document.querySelector('#employee #div');
            member = new Employee(name.value, age.value, address.value, div.value);
            break;
        default : return;
    }


    // 자바스크립트로 생성되는 HTML을 Dynamic HTML(DHTML)
    // let list = Object.keys(member); //['name', 'age', 'address', 'sno']
    // Class 필드 값을 private 키로 만들어서 데이터를 가져올 수 없음!! 외부에서 접근 불가. 배열에 아무것도 안 들어감.

    console.log(member.values); //(4) ['', '', '', ''] 생성된 클래스의 values를 getter로 불러서 배열로 나열
    
    let list = '';
    member.values.forEach((item)=>{ //배열에 있는 값들을 forEach 함수로 순차적으로 뽑아내어 list에 넣음
        list += `<li class = 'item'>${item}</li>`;
    })
    // console.log(list);
    let output;
    output = `<ul>${list}</ul>`;
    document.querySelector('#result').innerHTML = output; //innerHTML - 자바스크립트에서 동적으로 html 코드를 편집할 수 있다.
}// end of signupCheck

// display 라디오 버튼 클릭 시 보여지는 ul 태그
const display = (type) => { //display 라디오 버튼 클릭 시 보여지는 화면 전환
    
    document.querySelector('#result').innerHTML = ''; // 라디오 버튼 클릭 시 #result의 내용들 비우기

    let studentBox = document.querySelector('#student');
    let professorBox = document.querySelector('#professor');
    let parentsBox = document.querySelector('#parents');
    let employeeBox = document.querySelector('#employee');

    studentBox.style.display = 'none';
    professorBox.style.display = 'none';
    parentsBox.style.display = 'none';
    employeeBox.style.display = 'none';

    if(type === '1'){
        studentBox.style.display = 'block';
    }else if(type === '2'){
        professorBox.style.display = 'block';
    }
    else if(type === '3'){
        parentsBox.style.display = 'block';
    }
    else if(type === '4'){
        employeeBox.style.display = 'block';
    }
} //end of display