import EventItem from "./EventItem";

export default function Event(){
    const eventList = [
        {
            "src": "https://img.cgv.co.kr/WebApp/contents/eventV4/42372/17295802409470.jpg",
            "title": "[콜렉터블 무비머니] Vol.1 맥스 달튼",
            "date": "2024.09.25 ~ 2024.10.31"
        },
        {
            "src": "https://img.cgv.co.kr/WebApp/contents/eventV4/42820/17327600028470.jpg",
            "title": "2025 CGV짱구는 못말려 캘린더 출시!",
            "date": "2024.11.28~2024.12.31"
        },
        {
            "src": "https://img.cgv.co.kr/WebApp/contents/eventV4/42888/17332152020130.jpg",
            "title": "[모아나2]4DX 스페셜 포스터",
            "date": "2024.12.03~2024.12.08"
        },
    ];

    return(
        <section>
            <div>
                <h3>EVENT</h3>
                <div className="content-moviechart-title-right">
                    <a href="#">전체보기 &gt;</a>
                </div>
            </div>

            <ul>
                {eventList.map((event, index) => <li key={index}>
                    <EventItem src={event.src} title={event.title} date={event.date}></EventItem>
                </li>)}
            </ul>
        </section>            
    );
}