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

const signupCheck = () => { //학생 부분 클래스만 테스트 해보자.
    let type = document.querySelector('input[type=radio]:checked'); //라디오 박스 중에 체크된 목록을 type 변수에 넣어줌.

    let sno = document.querySelector('#sno');
    let name = document.querySelector('#name');
    let age = document.querySelector('#age');
    let address = document.querySelector('#address');
    let child = '';
    let div = '';
    let subject = '';
    console.log(typeof type.value);
    
    // type에 따라서 각각의 클래스 생성
    let member = null;
    switch(type.value){
        case '1':
            member = new Student(sno.value, name.value, age.value, address.value);
            break;
        case '2':
            member = new Professor(name.value, age.value, address.value);
            break;
        case '3':
            member = new Parent(name.value, age.value, address.value);
            break;
        case '4':
            member = new Employee(name.value, age.value, address.value);
            break;
        default : return;
    }

    console.log(member);

}

// display 라디오 버튼 클릭 시 보여지는 ul 태그
const display = (type) => {
    // type = 1 학생폼
    let studentBox = document.querySelector('#student');
    let professorBox = document.querySelector('#professor');
    let parentsBox = document.querySelector('#parents');
    let employeeBox = document.querySelector('#employee');

    if(type === '1'){
        studentBox.style.display = 'block';
        professorBox.style.display = 'none';
        parentsBox.style.display = 'none';
        employeeBox.style.display = 'none';

    }else if(type === '2'){
        studentBox.style.display = 'none';
        professorBox.style.display = 'block';
        parentsBox.style.display = 'none';
        employeeBox.style.display = 'none';

    }
    else if(type === '3'){
        studentBox.style.display = 'none';
        professorBox.style.display = 'none';
        parentsBox.style.display = 'block';
        employeeBox.style.display = 'none';

    }
    else if(type === '4'){
        studentBox.style.display = 'none';
        professorBox.style.display = 'none';
        parentsBox.style.display = 'none';
        employeeBox.style.display = 'block';
    }
}