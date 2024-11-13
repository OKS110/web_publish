// class의 field는 생성자 함수에서 정의하는 값
// field에 접근 제어(Access control)를 정의 : private(#), public

class Fruits{
    #name; //인스턴스.name 형식으로 외부에서 호출하는 경우 데이터 숨김
    constructor(name, color, emoji){
        // fields
        this.#name = name;
        this.color = color;
        this.emoji = emoji;
    }

    display = () => { console.log(`${this.#name}, ${this.color}, ${this.emoji}`);}
    // 내부에서도 접근 가능
}

const apple = new Fruits('apple','green','🍏');
apple.display(); // 내부에서 접근했으므로 전부 다 나옴.

console.log(apple.name); //undefined 숨겨짐
console.log(apple.color);
console.log(apple.emoji);
// 외부에서 인스턴스를 통해 접근 가능

// console.clear();

// 사번(#), 사원명, 부서명
// info() 메소드 호출 시 모든 정보 출력
class Employee{
    #num; //private
    constructor(num, name, sector){
        this.#num = num;
        this.name = name;
        this.sector = sector;
    }
    info = () => {
        console.log(`${this.name} ${this.sector}`);
    }
    infoAll = () => {
        console.log(`${this.#num} ${this.name} ${this.sector}`);
    }
}

const person = new Employee(1234, '홍길동', '회계부');

console.log(person); //Employee { info: [Function: info], name: '홍길동', sector: '회계부' }
console.log(person.num); // undefined
console.log(person.name); // 홍길동
console.log(person.sector); // 회계부
 
person.info(); // 일반정보 : 홍길동 회계부
person.infoAll(); //모든 정보 : 1234 홍길동 회계부