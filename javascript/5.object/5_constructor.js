// 객체 생성자 함수 정의와 사용법 익히기

// 생성자 함수는 첫 글자가 대문자
// 속성에 접근(생성)할 때는 this를 사용
function Fruits(name, color, emoji){
    // field
    this.name = name; //name이라는 속성에 접근(생성)해서 name 파라미터를 대입
    this.color = color;
    this.emoji = emoji;

    // method
    this.display = () => {console.log(this.emoji);}
}

// 생성자 함수는 호출 할 때 new 키워드를 붙여야 함.
const apple = new Fruits('apple', 'red', '🍎');
const orange = new Fruits('orange', 'coral', '🍊');
const lemon = new Fruits('lemon', 'yellow', '🍋');
console.log(apple);
console.log(orange);
console.log(lemon);






// // apple: property - name, color : method - display()
// const apple ={
//     name: "apple",
//     color: "red",
//     display: function(){ console.log("🍎");},

// }
// // orange: property - name, color : method - display()
// const orange ={
//     name: "orange",
//     color: "coral",
//     display: function(){ console.log("🍊");},
    
// }
// // lemon: property - name, color : method - display()
// const lemon ={
//     name: "lemon",
//     color: "yellow",
//     display: function(){ console.log("🍋");},
    
// }