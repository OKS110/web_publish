// 객체 생성자 함수 - 객체 모델링(반려동물, 동물병원)
// dog, cat, rabbit ...의 객체 생성자 함수를 정의하고, 호출해 보자.
// 속성(Attribute, property) : name, color, emoji
// 메소드(Method) : display, eat("🐶 dog 먹는다"), sleep("🐶 dog 잔다.")
function Animals(name, color, emoji){
    // field
    this.name = name;
    this.color = color;
    this.emoji = emoji;

    // method
    this.display = () => { console.log(this.emoji);},
    this.eat = function(){
         console.log(`${this.emoji} ${this.name} 먹는다.`);
        },
    this.sleep = function(){
         console.log(`${this.emoji} ${this.name} 잔다.`);
        }
}
const dog = new Animals('dog', 'white', '🐶');
console.log(dog);
dog.display();
dog.eat();
dog.sleep();

const cat = new Animals('cat', 'yellow', '😺');
console.log(cat);
cat.display();
cat.eat();
cat.sleep();

const rabbit = new Animals('rabbit', 'black', '🐰');
console.log(rabbit);
rabbit.display();
rabbit.eat();
rabbit.sleep();