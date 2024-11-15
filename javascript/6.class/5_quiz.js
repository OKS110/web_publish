// 학생(Student) 클래스
// 속성 : #이름, #나이, #주소, 별칭
// 메소드 : setter/getter 메소드 정의
class Student{
    #name;
    #age;
    #address;
    constructor(name, age, address, nick){
        this.#name = name;
        this.#age = age;
        this.#address = address;
        this.nick = nick;
    }
    display = () => console.log(`${this.#name} ${this.#age} ${this.#address} ${this.nick}`);
    
    
    // set / get 함수 형식은 private 정의된 필드값에 한해서 생성한다.
    get name() {
        return this.#name;
    }
    get age() {
        return this.#age;
    }
    get address(){
        return this.#address;
    }

    // setter 메서드
    set name(newName) {
        if (newName) {          // 유효한 이름인지 확인
            this.#name = newName;
        } else {
            console.log("Invalid name");
        }
    }
    set age(newAge) {
        if (newAge > 0) {          // 유효한 나이인지 확인
            this.#age = newAge;
        } else {
            console.log("Invalid age");
        }
    }
    set address(newAddress){
        this.#address = newAddress;
    }
}

const hong = new Student('홍길동', 24, '서울시', 'nick');

hong.display(); //홍길동 24 서울시 nick
console.log(hong.name); //홍길동
console.log(hong.address); //서울시


hong.name = ''; //Invalid name
hong.age = -1; //Invalid age

hong.name = 'Eric';
hong.address = '경기도';
hong.display(); //Eric 24 경기도 nick
