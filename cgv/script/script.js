    // nav메뉴
    let menuTitle = document.getElementsByClassName("header-bottom-title");
    let dl = document.getElementsByTagName("dl");
    let menuTitleLength = menuTitle.length;
    for(let i = 0; i < menuTitleLength; i++){
    // console.log(menuTitle[i]);
    menuTitle[i].addEventListener('mouseenter',function(){
    for(let i = 0; i < dl.length; i++){
        dl[i].style.display = "block";

        }
    });
    document.addEventListener('click',function(){
    for(let i = 0; i < dl.length; i++){
        dl[i].style.display = "none";

        }
    });
    }



// 슬라이드

// 공통 변수
let slideWrap = document.querySelector('.slide-wrap');
let slide = document.querySelectorAll(".slide");
const slideWidth = slideWrap.offsetWidth;
console.log(slideWidth);
// console.log(slide);

            // 슬라이드 이동함수
function goToLeftSlide(index){
    for(let i = 0;i < slide.length; i++){
        slide[i].style.transition = 'transform 0.5s ease';
        slide[i].style.transform = `translateX(${slideWidth - 1000}px)`;
        // 왜 slideWidth 너비의 2배를 이동하는지 모르겠다. 그래서 -1000px 더 줬다. 이렇게 하니 처음에 right 버튼이 가능해지는 현상이 사라졌다.

    console.log(slideWidth);

    }

}
function goToRightSlide(index){
    for(let i = 0;i < slide.length; i++){
        slide[i].style.transition = 'transform 0.5s ease';
        slide[i].style.transform = `translateX(-${slideWidth + 36}px)`;
        // 이동시키니 슬라이드가 Wrap 안에 딱 들어맞지 않고 약간 틀어져서 36px일 추가로 줬다.

    console.log(slideWidth);

    }

}

    //버튼 이벤트 생성
    const BtnL = document.querySelector(".leftbtn");
    BtnL.addEventListener('click',(event)=>{
        event.preventDefault(); // 기본 앵커 링크 동작을 막습니다.
        goToLeftSlide();
        console.log(BtnL);
        
    })
    const BtnR = document.querySelector(".rightbtn");

    BtnR.addEventListener('click',(event)=>{
        event.preventDefault(); // 기본 앵커 링크 동작을 막습니다.
        goToRightSlide();
        console.log(BtnR);

    })    
// 왜 버튼이 한번씩만 적용되는지는 모르겠다.




// 특별관 리스트 호버 시 이미지 변경
// aria-selected 공부하기

    const specialImages = document.getElementsByClassName('special-images');
    console.log(specialImages);
    const specialList = document.getElementsByClassName('special-list');
    console.log(specialList);
    function imgChange(){
        for(let i = 0; i < specialList.length; i++){
            // 마우스를 리스트에 올렸을 때

            specialList[i].addEventListener('mouseenter', function(){
            
            specialList[i].classList.add('hover');
            specialImages[i].style.display = 'block';
            });

            specialList[i].addEventListener('mouseleave', function(){
            // 마우스가 리스트에서 벗어났을 때
            specialList[i].classList.remove('hover');
            specialImages[i].style.display = 'none';

            return specialReset();
            });
        }
    }

    function specialReset(){
        specialImages[0].style.display = 'block';
    }
    imgChange();
    


    // 고정버튼 나타나게 하기
    const fixButtonWrap = document.getElementsByClassName('fix-button-wrap');
    const move = document.getElementById('move');
    console.log(move);
    console.log(fixButtonWrap);
    
    window.addEventListener('scroll', () => { 
        //스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
        console.log(window.scrollX, window.scrollY);
        if(window.scrollY > Number(500)){
            fixButtonWrap[0].style.transition = '.3s'; //등장할 때 사라질 때 서서히 나타남
            fixButtonWrap[0].style.opacity = '100%';
            move.style.transform = 'translate(-50px, 0)';

            
        }else if(window.scrollY < Number(500)){   
                fixButtonWrap[0].style.opacity = '0';
                move.style.transform = 'translate(50px, 0)';
            }
        
      });

        
      // 버튼 클릭 시 맨 위로 이동

    const topBtn = document.getElementsByClassName("moveTopBtn");
    console.log(topBtn);


    topBtn[0].addEventListener('click', function(){
        console.log("check");
        window.scrollTo({top: 0, behavior: 'smooth'});  
    });
// 처음에 a태그에 클래스를 줘서 스크롤을 이동시키려했지만 되지 않았다.
// div 태그로 변경하니 부드럽게 올라가졌다. a태그는 behavior 가 먹히지 않는다. 아주 중요한 사실!!

