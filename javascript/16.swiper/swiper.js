createSwiper();

function createSwiper(){

    let output = `
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231350_727.jpg" alt="1"></div>
      <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231349_727.jpg" alt="2"></div>
      <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231348_727.jpg" alt="3"></div>
      <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231347_727.jpg" alt="4"></div>
      <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231346_727.jpg" alt="5"></div>
      <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231344_727.jpg" alt="6"></div>
      <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381231343_727.jpg" alt="7"></div>
      <div class="swiper-slide"><img src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000088/88381/88381230469_727.jpg" alt="8"></div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
  
    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  
    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>`;

    document.querySelector(".swiper").innerHTML = output;

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        slidesPerView: 1, //페이지 당 보여지는 이미지 개수
        loop: true,
        autoplay:{ delay: 3000, disableOnInteraction: false }, //시간에 따라 자동으로 전환
        // If we need pagination
        pagination: {
        //   el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
        //   el: '.swiper-scrollbar',
        },
      });
}

