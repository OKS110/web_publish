// 객체에서 기능을 실행하는 메소드

const apple = {
    name: '사과',
    color: 'Red',
    emoji: '🍎',
    display: function(){ //메소드
        console.log("🍎"); //사과의 이모지 콘솔에 출력
    },
    getName: function (){
        // 객체의 메서드 내부에서 this는 해당 메서드를 호출한 객체를 참조
        console.log(this.name);
        // console.log(name);을 쓸 경우 오류가 발생하는 이유는, 
        // name 변수가 전역 스코프에 존재하지 않기 때문입니다.
    },
    getColor: function(){
        console.log(this.color);
    },
    getEmoji: function(){
        console.log(this.emoji);
    }
}
console.log(apple);
apple.getName();
apple.getColor();
apple.getEmoji();
// display(); 에러
