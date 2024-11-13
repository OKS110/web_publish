// static 메소드 : 객체를 생성하지 않고, 클래스명.메소드 형식으로 호출이 가능함!!
// static 메소드는 클래스 명으로만 호출이 가능하다.
class Fruits{
    constructor(name, color, emoji){
        this.name = name;
        this.color = color;
        this.emoji = emoji;
    }
    
    static makeFruit = (a, b, c) => {
        // console.log('makeFruit 호출');
        // 복숭아를 생성해서 리턴
        return new Fruits(a, b, c);
    }

    display = () => {console.log(`${this.name} ${this.color} ${this.emoji}`);}
}

let apple = new Fruits('apple', 'red', '🍎');
apple.display(); //인스턴스 메소드

let orange = Fruits.makeFruit('orange', 'coral', '🍊');  //스테틱 메소드
//static 영역에서 static 메소드를 찾아서 호출

console.log(orange);
orange.display();
// apple.makeFruit(); 에러