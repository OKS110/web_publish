import HomeIntro from "./HomeIntro";

export default function Home({home}) {
    if (!home || !home.HomeText) {
        return null; // 데이터가 없으면 아무것도 렌더링하지 않음
    }
        // 위와 같이 수정하면, 데이터가 비동기로 로드되기 전 HomeText에 접근하려는 문제를 방지할 수 있습니다.

        // 데이터가 로드되기 전에 Home은 아무것도 렌더링하지 않습니다(return null).
        // 데이터가 로드된 후에 HomeText가 존재하면 해당 내용을 렌더링합니다.
return (
    <section id="home">
        <HomeIntro img ={home.HomeText.img}
         nickName = {home.HomeText.nickName}
         name= {home.HomeText.name}
         job ={home.HomeText.job}
         country= {home.HomeText.country}
         nation= {home.HomeText.nation}
         ></HomeIntro>

          <a className = "home__contact" href="#contact">Contact Me</a>
    </section>
    );
};