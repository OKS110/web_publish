// 클래스간의 상속관계
/*
    class 부모클래스 {
    // 부모 클래스의 속성과 메서드
    }

    class 자식클래스 extends 부모클래스 {
    // 자식 클래스의 속성과 메서드
    }
*/

// E 동물원에서 동물관리 프로그램을 생성
// 흰색 사자. 회색 사자. 흰색 호랑이, 회색 호랑이, 푸들, 말티즈

// 객체 모델링 ==> LIon, Tiger, Dog 클래스

// Lion 클래스
// 속성 : name, color, emoji, taste(식성)
// 메소드 : display(이모지), sleep, eat

// Tiger 클래스
// 속성 : name, color, emoji, taste(식성), age
// 메소드 : display(이모지), sleep, eat

// Dog 클래스
// 속성 : name, color, emoji, taste(식성)
// 메소드 : display(이모지), sleep, eat

// Lion, Tiger, Dog 클래스를 모델링하여 부모 클래스 생성 ==> Animal

// Animal 클래스 속성 : name, color, emoji, taste
// Animal 클래스 메소드 : display(이모지), sleep, eat


class Animal{
    constructor(name, color, emoji, taste){
        this.name = name;
        this.color = color;
        this.emoji = emoji;
        this.taste = taste;
    }
    display(){
        console.log(`${this.name} : ${this.emoji}`);
    }
    sleep(){
        console.log(`${this.name} 자다`);
    }
    eat(){
        console.log(`${this.name} 먹다`);
    }
}


class Lion extends Animal{ //Lion 클래스는 Animal 클래스에게서 상속 받는다.
    constructor(name, color, emoji, taste){
        super(name, color, emoji, taste); 
        //super 키워드: 부모 클래스의 생성자나 메서드를 호출할 때 사용, 최상단에 정의
    }
    all(){
        super.display();
        super.sleep();
        super.eat();
    }

}

class Tiger extends Animal{
    constructor(name, color, emoji, taste, age){
        super(name, color, emoji, taste);
        this.age = age;
    }
    // display = () => console.log(`${this.name} : ${this.emoji}`);
    // sleep = () =>  console.log(`${this.name} 자다`);
    // eat = () =>  console.log(`${this.name} 먹다`);
    ages(){
        console.log(`${this.age}`);
    }
}

class Dog extends Animal{
    constructor(name, color, emoji, taste, type){
        super(name, color, emoji, taste);
        this.type = type;
    }
    species(){
        console.log(`${this.type}`);
    }

}


// 동물원에서 동물을 관리하는 클래스
// 속성 : #type
class EverZoo{
    static LION = 1; //사자는 1번
    static TIGHER = 2; //호랑이는 2번
    static DOG = 3; //개는 3번

    #type;
    #animal;
    constructor(type, animal){
        this.#type = type;
        this.#animal = animal;
    }
    get type(){
        return this.#type;
    }
    get animal(){
        return this.#animal;
    }

    set type(type){ this.#type = type;}
    set animal(animal){this.#animal = animal;}
}

// 클래스 생성 및 호출
const tom = new Lion('tom', 'white', '🦁', 'meat');
const smith = new Tiger('smith', 'gray', '🐯', 'meat', 3);
const judy = new Dog('judy', 'white', '🐶', 'meat', '푸들');
tom.all(); tom.sleep(); tom.eat();//tom : 🦁 tom 자다 tom 먹다 tom 자다 tom 먹다
smith.display(); smith.sleep(); smith.eat(); smith.ages(); // smith : 🐯 smith 자다 smith 먹다 3
judy.display(); judy.sleep(); judy.eat(); judy.species(); // judy : 🐶 judy 자다 judy 먹다 푸들

const everZoo = new EverZoo(EverZoo.LION, tom);
console.log(everZoo.type, everZoo.animal);


// type이라는 메서드와 type이라는 속성이 같은 이름을 가지고 있기 때문입니다. 
// JavaScript에서는 클래스 내에서 메서드와 속성이 같은 이름을 가질 수 없으므로,
//  속성 이름과 메서드 이름이 충돌하여 오류가 발생